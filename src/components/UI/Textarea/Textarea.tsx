import React, { HTMLAttributes } from 'react'
import { CharactersNumInfoBlock, Label, TextareaComp, TextareaContainer, TextareaError } from './Textarea..elements'

interface TextareaInterface extends HTMLAttributes<HTMLTextAreaElement> {
  name?: string,
  label?: string,
  value? :string,
  rows?: number,
  charactersNum?: number
}

const Textarea: React.FC<TextareaInterface> = ({label, name, value, rows, charactersNum, onChange, ...props}) => {
  const handleTextareaChange = (e: any) => {
    if(onChange) {
      CheckCharactersNum()
      onChange(e.target.value)
    }
  }

  const CheckCharactersNum = () => {
    if(charactersNum && value && value?.length == charactersNum){
      console.log('Длина больше чем необходимо')
    }
  }

  return (
    <TextareaContainer>
        <Label htmlFor={name}>{label}</Label>
        <TextareaComp id={name} onChange={(e) => handleTextareaChange(e)} {...props}/> 
        <TextareaError>Error,ErrorErrorErrorErrorError</TextareaError>
        {charactersNum && (
          <CharactersNumInfoBlock>
              {value?.length}/{charactersNum}
          </CharactersNumInfoBlock>
        )}
    </TextareaContainer>
  )
}

export default Textarea