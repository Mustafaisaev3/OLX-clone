import React, { useState } from 'react'
import Button from '../../../../UI/Button/Button'
import Card from '../../../../UI/Card/Card'
import { CardTitle } from '../../../../UI/Card/Card.elements'
import { SallerInfoContainer, UserInfoBlock, UserImage, UserInfo, UserName, LustOnlineDate, SallerInfoBtns, AllSallerAdsLinkContainer, AllSallerAdsLink } from './SalesrInfo.elements'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Colors from '../../../../../utils/css_variables/colors'
import { useSelector } from 'react-redux'
import { selectUserData, selectUserState } from '../../../../../store/ducks/user/selectors'
import { selectAd } from '../../../../../store/ducks/ad/selectors'
import { useUI } from '../../../../../context/ui.context'

const SallerInfo = ({data}: any) => {
  const [showPhone, setShowPhone] = useState(false)
  const {openChatModal, setChatModalData, chatModalData} = useUI()

  const showPhoneBtnClick = () => {
    setShowPhone(!showPhone)
  }

  const ad = useSelector(selectAd)
  
  const handleClickBtn = () => {
    setChatModalData(data)
    openChatModal()
  }

  return (
    <SallerInfoContainer>
        <Card>
            <CardTitle>Користувач</CardTitle>
            <UserInfoBlock>
              <UserImage src='' />
              <UserInfo>
                <UserName>{ad.e_mail}</UserName>
                <LustOnlineDate>Онлайн вчора в 23:35</LustOnlineDate>
              </UserInfo>
            </UserInfoBlock>
            <SallerInfoBtns>
              <Button buttontype='primaryBordered' onClick={showPhoneBtnClick}>{showPhone ? ad.phone : 'Телефон'}</Button>
              <Button buttontype='secondary' onClick={handleClickBtn}>Повідомлення</Button>
            </SallerInfoBtns>
            <AllSallerAdsLinkContainer>
              <AllSallerAdsLink>
                Усі оголошення автора <MdOutlineArrowForwardIos size={20} color={Colors.text_main} />
              </AllSallerAdsLink>
            </AllSallerAdsLinkContainer>
        </Card>
    </SallerInfoContainer>
  )
}

export default SallerInfo