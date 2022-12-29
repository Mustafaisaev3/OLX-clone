import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSignUp } from '../../../store/ducks/user/action'
import { selectUserData, selectUserState } from '../../../store/ducks/user/selectors'
import Form from '../../Form/Form/Form'
import Input from '../../Form/Input/Input'
import Button from '../../UI/Button/Button'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Authorization from '../Authorization/Authorization'
import { TermsOfUse } from './Register.elements'

const Register = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useDispatch()

  const handleRegisterBtnClick = (e: any) => {
    e.preventDefault()
    console.log(email, password)
    dispatch(fetchSignUp({email, password}))
  }

  console.log(useSelector(selectUserState))

  return (
    <Authorization>
      <Form>
        <Input label='Вкажіть Email' type='text' name='email' value={email} onChange={setEmail} placeholder='Вкажіть Email'/>
        <Input label='Вкажіть пароль' type='password' name='password' value={password} onChange={setPassword} placeholder='Вкажіть пароль'/>
        <TermsOfUse>
            <Checkbox value={'agre'} name='some'/>
            <p>* Я погоджуюсь із правилами користування сервісом, а також з передачею та обробкою моїх даних в OLX.ua. Я підтверджую своє повноліття та відповідальність за розміщення оголошення. </p>
        </TermsOfUse>
        <Button type='secondary' onClick={(e) => handleRegisterBtnClick(e)}>Реєстрація</Button>
      </Form>
    </Authorization>
  )
}

export default Register