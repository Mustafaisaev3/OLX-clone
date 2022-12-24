import React from 'react'
import Form from '../../Form/Form/Form'
import Input from '../../Form/Input/Input'
import Button from '../../UI/Button/Button'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Authorization from '../Authorization/Authorization'
import { TermsOfUse } from './Register.elements'

const Register = () => {
  return (
    <Authorization>
      <Form>
        <Input label='Вкажіть Email або Телефон' type='text' name='email-phone' placeholder='Вкажіть Email або Телефон'/>
        <TermsOfUse>
            <Checkbox value={'agre'} name='some'/>
            <p>* Я погоджуюсь із правилами користування сервісом, а також з передачею та обробкою моїх даних в OLX.ua. Я підтверджую своє повноліття та відповідальність за розміщення оголошення. </p>
        </TermsOfUse>
        <Button type='secondary'>Реєстрація</Button>
      </Form>
    </Authorization>
  )
}

export default Register