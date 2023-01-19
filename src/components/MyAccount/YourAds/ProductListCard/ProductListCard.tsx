import React from 'react'
import Card from '../../../UI/Card/Card'
import { ProductCategories, ProductContent, ProductDate, ProductFooter, ProductFooterBtns, ProductHeader, ProductImage, ProductInfo, ProductInfoBar, ProductInfoBarItem, ProductInfoBody, ProductInfoLeft, ProductInfoRight, ProductLocation, ProductPrice, ProductTitle } from './ProductListCard.elements'

import { HiOutlineCalendar } from 'react-icons/hi'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineEye, AiOutlinePhone } from 'react-icons/ai'
import { FiHeart, FiMessageSquare } from 'react-icons/fi'
import Colors from '../../../../utils/css_variables/colors'
import Button from '../../../UI/Button/Button'
import { AdsApi } from '../../../../services/AdApi'
import { useDispatch } from 'react-redux'
import { fetchActivateUserAd, fetchDeactivateUserAd, fetchUserAds } from '../../../../store/ducks/user/action'
import { useUI } from '../../../../context/ui.context'

const ProductListCard = ({data}: any) => {
    const {openConfirmationModal, setConfirmationModalData} = useUI()
    const dispatch = useDispatch()
    const handleDeactivateAdClick = () => {
        setConfirmationModalData({question: 'Ви дійсно хетече Деактивувати це оголошення?', perfomedFunction: () => dispatch(fetchDeactivateUserAd({adId: data._id, userId: data.user._id}))})
        openConfirmationModal()
    }
    
    const handleActivateAdClick = () => {  
        setConfirmationModalData({question: 'Ви дійсно хетече Активувати це оголошення?', perfomedFunction: () => dispatch(fetchActivateUserAd({adId: data._id, userId: data.user._id}))})
        openConfirmationModal()
    }
    
    const handleDeleteAdClick = () => {
        // dispatch(fetchUserAds(data.user._id))
        setConfirmationModalData({question: 'Ви дійсно хетече видалити це оголошення?', perfomedFunction: () => dispatch(fetchUserAds(data.user._id))})
        openConfirmationModal()
    }

  return (
    <Card>
        <ProductContent>
            <ProductImage>
                {/* <img src="https://ag-spots-2021.o.auroraobjects.eu/2021/08/22/ford-mustang-gt-2018-c939522082021114916_1.jpg?1629625769" alt="product_img" /> */}
                <img src={data.photos[0].url} alt="product_img" />
            </ProductImage>
            <ProductInfo>
                <ProductHeader>
                    <ProductTitle>
                        <a href='#'>{data.title}</a>
                    </ProductTitle>
                    <ProductPrice>{data.price.price} грн</ProductPrice>
                </ProductHeader>
                <ProductInfoBody>
                    <ProductInfoLeft>

                        <ProductCategories>
                            <li>Запчасти</li>
                            <li>Запчасти</li>
                            <li>Запчасти</li>
                        </ProductCategories>
                        <ProductLocation>
                            <GrLocation size={20} color={Colors.main_green} />
                            <p>{data.place}</p>
                        </ProductLocation>
                        <ProductDate>
                            <HiOutlineCalendar size={20} color={Colors.main_green} />
                            <p>{data.updatedAt}</p>
                        </ProductDate>
                    </ProductInfoLeft>

                    <ProductInfoRight>
                        <ProductInfoBar>
                            <ProductInfoBarItem>
                                <AiOutlineEye size={15} color={Colors.main_green} />
                                <p>222</p>
                            </ProductInfoBarItem>
                            <ProductInfoBarItem>
                                <FiHeart size={15} color={Colors.main_green} />
                                <p>10</p>
                            </ProductInfoBarItem>
                            <ProductInfoBarItem>
                                <AiOutlinePhone size={15} color={Colors.main_green} />
                                <p>0</p>
                            </ProductInfoBarItem>
                        </ProductInfoBar>
                        <Button buttontype='primaryBordered'>Посмотреть статистику</Button>
                        <Button buttontype='primaryBordered' className='messages-btn'>
                            <FiMessageSquare size={20} />
                            <p>0</p>
                        </Button>
                    </ProductInfoRight>
                </ProductInfoBody>
            </ProductInfo>
        </ProductContent>
        <ProductFooter>
            <p>ID: {data._id}</p>
            <ProductFooterBtns>
                {data.active 
                    ?
                    <Button buttontype='primaryBordered' onClick={handleDeactivateAdClick}>Деактивувати</Button>
                    :
                    <Button buttontype='primaryBordered' onClick={handleActivateAdClick}>Активувати</Button>
                }
                <Button buttontype='primary'>Редагувати</Button>
                <Button buttontype='primary' onClick={handleDeleteAdClick}>Видалити</Button>
            </ProductFooterBtns>
        </ProductFooter>
    </Card>
  )
}

export default ProductListCard