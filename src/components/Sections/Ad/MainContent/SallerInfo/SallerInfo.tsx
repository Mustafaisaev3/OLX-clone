import React, { useState } from 'react'
import Button from '../../../../UI/Button/Button'
import Card from '../../../../UI/Card/Card'
import { CardTitle } from '../../../../UI/Card/Card.elements'
import { SallerInfoContainer, UserInfoBlock, UserImage, UserInfo, UserName, LustOnlineDate, SallerInfoBtns, AllSallerAdsLinkContainer, AllSallerAdsLink } from './SalesrInfo.elements'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Colors from '../../../../../utils/css_variables/colors'

const SallerInfo = () => {
  const [showPhone, setShowPhone] = useState(false)

  const showPhoneBtnClick = () => {
    setShowPhone(!showPhone)
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
              <Button type='primaryBordered' onClick={showPhoneBtnClick}>{showPhone ? '+380973384523' : 'Телефон'}</Button>
              <Button type='secondary'>Повідомлення</Button>
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