import React, { useEffect, useState } from 'react'
import { useUI } from '../../../context/ui.context'
import { Title } from '../../../pages/globalStyles'
import { MainContentContainer } from './MainContent.elements'
import PhotosGrid from './PhotosGrid/PhotosGrid'
import PriceBlock from './PriceBlock/PriceBlock'
import Description from './Description/Description'
import Autocontinue from './Autocontinue/Autocontinue'
import Location from './Location/Location'
import Contacts from './Contacts/Contacts'
import SubmitBtns from './SubmitBtns/SubmitBtns'
import AdditionalInformation from './AdditionalInformation/AdditionalInformation'
import Category from './Category/Category'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../../store/ducks/categories/action'
import { useSelector } from 'react-redux'
import { selectActiveCategory } from '../../../store/ducks/categories/selectors'
import { selectUserData } from '../../../store/ducks/user/selectors'

const PostNewAdMainContent = () => {
  const [titleData, setTitleData] = useState('Reno duster')
  const [priceData, setPriceData] = useState(undefined)
  const [categoryData, setCategoryData] = useState(undefined)
  const [photosData, setPhotosData] = useState(undefined)
  const [additionalInformationData, setAdditionalInformationData] = useState(undefined)
  const [descriptionData, setDescriptionData] = useState(undefined)
  const [autocontinueData, setAutocontinueData] = useState(undefined)
  const [locationData, setLocationData] = useState(undefined)
  const [contactData, setContactData] = useState({email: '', phone: ''})

  const user = useSelector(selectUserData)


  const dispatch = useDispatch()
  const activeCategory = useSelector(selectActiveCategory)
  console.log(activeCategory)
  useEffect(() => {
    dispatch(fetchCategories())
  },[])

  useEffect(() => {}, [activeCategory])

  
  const NewAd = {
    status: 'new',
    title: titleData,
    description: descriptionData,
    photos: photosData,
    category: categoryData,
    options: additionalInformationData,
    place: locationData,
    price: priceData,
    e_mail: contactData.email,
    phone: contactData.phone,
    user: user.id
  }

  console.log(contactData)

  return (
    <MainContentContainer>
      <Title>Створити оголошення</Title> 
      {/* <Category activeCategory={activeCategory && activeCategory} /> */}
      <Category getData={setCategoryData} getTitle={setTitleData}/>
      <PriceBlock getData={setPriceData} />
      <PhotosGrid getData={setPhotosData} />
      <AdditionalInformation data={activeCategory && activeCategory.options} getData={setAdditionalInformationData} />
      <Description getData={setDescriptionData} />
      <Autocontinue />
      <Location getData={setLocationData} />
      <Contacts getData={setContactData} />
      <SubmitBtns data={NewAd}/>
    </MainContentContainer>
  )
}

export default PostNewAdMainContent