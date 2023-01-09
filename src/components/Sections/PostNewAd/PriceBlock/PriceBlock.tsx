import React, { useEffect, useState } from 'react'
import Input from '../../../Form/Input/Input'
import Card from '../../../UI/Card/Card'
import Switch from '../../../UI/Switch/Switch'
import { ContentWrapper } from '../MainContent.elements'
import { PriceBlockContainer, PriceBlockItem, PriceForm, SwitchBlock, SwitchBlockTitle } from './PriceBlock.elements'

const PriceBlock = ({getData}: any) => {
  const [activeValue, setActiveValue] = useState('cina')
  const [price, setPrice] = useState()

  const handlePriceBlockBtnClick = (e: any) => {
    setActiveValue(e.target.value)
  }

  useEffect(() => {
    getData({
      type: activeValue,
      price
    })
  }, [activeValue, price])

  return (
    <Card>
      <ContentWrapper>
        <PriceBlockContainer>
            <PriceBlockItem clasName={activeValue == 'cina' ? 'active' : ''} value={'cina'} onClick={handlePriceBlockBtnClick}>Ціна</PriceBlockItem>
            <PriceBlockItem clasName={activeValue == 'bez' ? 'active' : ''} value={'bez'} onClick={handlePriceBlockBtnClick}>Безкоштовно</PriceBlockItem>
            <PriceBlockItem clasName={activeValue == 'obmin' ? 'active' : ''} value={'obmin'} onClick={handlePriceBlockBtnClick}>Обмін</PriceBlockItem>
        </PriceBlockContainer>

        <PriceForm>
            {activeValue == 'cina' && (
                <>
                    <Input id={price} value={price} onChange={setPrice} label={'Ціна за 1 шт.*'} />
                    <SwitchBlock>
                        <SwitchBlockTitle>Договорная</SwitchBlockTitle>
                        <Switch name='dogovornaya' value='dogovornaya'></Switch>
                    </SwitchBlock>
                </>
            )}
        </PriceForm>
      </ContentWrapper>
    </Card>
  )
}

export default PriceBlock