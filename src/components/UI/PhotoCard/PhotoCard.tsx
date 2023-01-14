import React, { useEffect, useState } from 'react'
import { PhotoCardContainer, PhotoCardContainerEmpty, PhotoCardIcon, PhotoCardImageContainer, PhotoCardInput, PhotoCardTools, PhotoCardToolsItem } from './PhotoCard.elements'
import { MdOutlinePhotoCamera } from 'react-icons/md'
import Colors from '../../../utils/css_variables/colors'
import Image from 'next/image'

import { MdDeleteForever } from 'react-icons/md'

interface UploadImageInterface {
    image?: any,
    deleteImage?: (callback: (prev: any) => any[]) => void
    getImage?: (callback: (prev: any) => any[]) => void
}

const PhotoCardInputElement = ({getImage}: any) => {
    const handleImageUploadEvent = (e: any) => {
        const file = e.target.files[0]
        console.log(e.target.files[0], 'files')
        if(file) {
            const fileObj = new Blob([file])
            console.log(fileObj)
            const imageObj = {
                imageUrl: URL.createObjectURL(fileObj),
                file: file
            }
            // const imageObj = {
            //     imageUrl: URL.createObjectURL(fileObj),
            //     file: fileObj
            // }

            getImage(imageObj)
        }
    }

    return(
        <PhotoCardInput type='file' onChange={handleImageUploadEvent}/>
    )
}

const PhotoCardImage = ({image, setImage, deleteImage}: any) => {
    const [displayImageTools, setDisplayImageTools] = useState(false)
    const handleImageHover = () => {
        setDisplayImageTools(true)
    }

    const handleImageHoverOver = () => {
        setDisplayImageTools(false)
    }

    const handleImageDelete = (image: any) => {
        // deleteImage((prev: any) => {
        //     const filteredArr = prev.filter((item: any) => {
        //         return image != item
        //     })
        //     return [...filteredArr]
        // })
        deleteImage((prev: any) => prev.filter(((imageItem: any) => {
            return image != imageItem
        })))
        setImage(null)
    }

    return(
        <PhotoCardImageContainer onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverOver}>
            <Image src={image.imageUrl} alt='image' layout='fill'/>
            {displayImageTools && (
                <PhotoCardTools>
                    <PhotoCardToolsItem onClick={() => handleImageDelete(image)}>
                        <MdDeleteForever color={Colors.main_green} size={30} />
                    </PhotoCardToolsItem>
                </PhotoCardTools>
            )}
        </PhotoCardImageContainer>
    )
}

const PhotoCard = ({image, getImage, deleteImage}: UploadImageInterface) => {
  const [imageObj, setImageObj] = useState(image)

  useEffect(() => {
    if(getImage && imageObj != image){
        getImage((prev: any) => [...prev, imageObj])
    }
  }, [imageObj])

  return (
    <PhotoCardContainer>
        {
            imageObj
            
            ?
            <PhotoCardImage image={imageObj} setImage={setImageObj} deleteImage={deleteImage}/>
            :
            <PhotoCardContainerEmpty>
                <PhotoCardInputElement getImage={setImageObj} />
                <PhotoCardIcon>
                    <MdOutlinePhotoCamera size={20} color={Colors.text_main} />
                </PhotoCardIcon>
            </PhotoCardContainerEmpty>
        }
    </PhotoCardContainer>
  )
}

export default PhotoCard