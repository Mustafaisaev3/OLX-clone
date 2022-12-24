import React from 'react'
import Input from '../../Form/Input/Input'
import Button from '../../UI/Button/Button'
import Form from '../../Form/Form/Form'

import Authorization from '../Authorization/Authorization'

const Login = () => {
  return (
    <Authorization>
      <Form>
          <Input label='Email-адреса або номер телефону' type='email' name='email' placeholder='Email-адреса або номер телефону'/>
          <Input label='Ваш поточный пароль від OLX ' type='password' name='password' placeholder='Ваш поточный пароль від OLX'/>
          <Button type='secondary'>Увійти</Button>
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