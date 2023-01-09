import React, { useState } from 'react'
import Button from '../../../../UI/Button/Button'
import Card from '../../../../UI/Card/Card'
import { CardTitle } from '../../../../UI/Card/Card.elements'
import { SallerInfoContainer, UserInfoBlock, UserImage, UserInfo, UserName, LustOnlineDate, SallerInfoBtns, AllSallerAdsLinkContainer, AllSallerAdsLink } from './SalesrInfo.elements'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Colors from '../../../../../utils/css_variables/colors'
import { useSelector } from 'react-redux'
import { selectUserData, selectUserState } from '../../../../../store/ducks/user/selectors'

const SallerInfo = () => {
  const [showPhone, setShowPhone] = useState(false)

  const showPhoneBtnClick = () => {
    setShowPhone(!showPhone)
  }

  const user = useSelector(selectUserData)
  
  const handleClickBtn = () => {
    console.log(user)
  }

  return (
    <SallerInfoContainer>
        <Card>
            <CardTitle>Користувач</CardTitle>
            <UserInfoBlock>
              <UserImage src='' />
              <UserInfo>
                <UserName>Олег</UserName>
                <LustOnlineDate>Онлайн вчора в 23:35</LustOnlineDate>
              </UserInfo>
            </UserInfoBlock>
            <SallerInfoBtns>
              <Button buttontype='primaryBordered' onClick={showPhoneBtnClick}>{showPhone ? '+380973384523' : 'Телефон'}</Button>
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