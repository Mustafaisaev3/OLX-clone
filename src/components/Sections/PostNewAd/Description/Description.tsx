import React, { useEffect, useState } from 'react'
import Card from '../../../UI/Card/Card'
import Textarea from '../../../UI/Textarea/Textarea'
import { ContentWrapper } from '../MainContent.elements'

const Description = ({getData}: any) => {
  const [textareaValue, setTextareaValue] = useState('')
  useEffect(() => {
    getData(textareaValue)
  }, [textareaValue])
  return (
    <Card>
      <ContentWrapper>
        <Textarea label='Опис*' value={textareaValue} onChange={setTextareaValue} rows={11} charactersNum={9000} placeholder='Подумайте, що ви хотіли би дізнатися з оголошення. І додайте це в опис'></Textarea>
      </ContentWrapper>
    </Card>
  )
}

export default Description