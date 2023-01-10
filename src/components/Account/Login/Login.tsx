import React, { useState } from 'react'
import Input from '../../Form/Input/Input'
import Button from '../../UI/Button/Button'
import Form from '../../Form/Form/Form'
import { useDispatch } from 'react-redux'

import Authorization from '../Authorization/Authorization'
import { fetchSignIn } from '../../../store/ducks/user/action'
import { useUI } from '../../../context/ui.context'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {addToast} = useUI()

  const dispatch = useDispatch()

  const handleLoginBtnClick = (e: any) => {
    e.preventDefault()
    console.log(email, password)
    dispatch(fetchSignIn({email, password}))
    addToast({toastType: 'success', text: 'Ви успішно зареєструвалисть!', id: Math.random()})
  }

  // console.log(useSelector(selectUserState))

  return (
    <Authorization>
      <Form>
          <Input value={email} onChange={setEmail} label='Email-адреса або номер телефону' type='email' name='email' placeholder='Email-адреса або номер телефону'/>
          <Input value={password} onChange={setPassword} label='Ваш поточный пароль від OLX ' type='password' name='password' placeholder='Ваш поточный пароль від OLX'/>
          <Button buttontype='secondary' onClick={(e) => handleLoginBtnClick(e)}>Увійти</Button>
      </Form>
    </Authorization>
  )
}

export default Login

// const Login = () => {
//   return (
//     <LoginContainer>
//       <Round />
//       <FormContainer>
//         <LoginHeader>
//           <HeaderItemsContainer>
//             <HeaderItem>Увійти</HeaderItem>
//             <HeaderItem>Реєстрація</HeaderItem>
//           </HeaderItemsContainer>
//           <HeaderAnimationStripe></HeaderAnimationStripe>
//         </LoginHeader>
//         <Card paddingSize='xl'>
//           <FacebookLoginBtn>
//             <Button type='primaryBordered'><ImFacebook2 size={25} /> Вхід з Facebook</Button>
//           </FacebookLoginBtn>
//           <Abo>АБО</Abo>
//           <Form>
//               <Input label='Email-адреса або номер телефону' type='email' name='email' placeholder='Email-адреса або номер телефону'/>
//               <Input label='Ваш поточный пароль від OLX ' type='password' name='password' placeholder='Ваш поточный пароль від OLX'/>
//               <Button type='secondary'>Увійти</Button>
//           </Form>
//         </Card>
//       </FormContainer>
//     </LoginContainer>
//   )
// }