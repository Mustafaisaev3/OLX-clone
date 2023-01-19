import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Container, Section } from '../../../pages/globalStyles'
import { fetchUserAds } from '../../../store/ducks/user/action'
import { selectUserAdsData } from '../../../store/ducks/user/selectors'
import EmptyAccountAds from '../../Empty/EmptyAccountAds/EmptyAccountAds'
import AccountHeader from '../../Sections/Account/AccountHeader/AccountHeader'
// import AccountHeaderTabs from '../../UI/AccountHeaderTabs/AccountHedaerTabs'
import AdsHeaderTabs from './AdsHeaderTabs/AdsHeaderTabs'
import ProductListCard from './ProductListCard/ProductListCard'
import { AdsCount, ProductsList } from './YourAds.elements'

const YourAds = () => {
//   const [userAds, setUserAds] = useState([])
  const [isActiveAds, setIsActiveAds] = useState(true)
  const dispatch = useDispatch()

  const userAds = useSelector(selectUserAdsData)


  useEffect(() => {
    dispatch(fetchUserAds('63aabf517d072f7917253f98'))
  }, [])

  return (
    <>
        <AccountHeader title={'Ваші оголошення'}></AccountHeader>  
        <Container>
            {/* <AccountHeaderTabs data={data}></AccountHeaderTabs> */}

            <AdsHeaderTabs setIsActiveAds={setIsActiveAds}></AdsHeaderTabs>
            <AdsCount>Всего объявлений: {userAds ? userAds.length : 0}</AdsCount>
            {
                userAds 
                    ? 
                <ProductsList >
                    {userAds.map((product: any) => {
                        if (product.active === isActiveAds){
                            return(
                                <ProductListCard key={product._id} data={product}></ProductListCard>  
                            )
                        }
                    })}
                </ProductsList>
                : (
                    <EmptyAccountAds />
                )
            }
        </Container>     
    </>
  )
}

export default YourAds