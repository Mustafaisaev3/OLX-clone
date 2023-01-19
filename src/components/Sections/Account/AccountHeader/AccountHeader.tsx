import React from 'react'
import { Container, Section } from '../../../../pages/globalStyles'
import AccountHeaderTabs from '../../../UI/AccountHeaderTabs/AccountHedaerTabs'
import { HeaderTitle } from './AccountHeader.elements'

interface AccountHeaderInterface {
    title: string
}

const data = [
    {
        link: '/myaccount',
        title: 'Оголошення'
    },
    {
        link: '/myaccount/messages',
        title: 'Повідомлення'
    },
    {
        link: '/myaccount/settings',
        title: 'Налаштування'
    },
]

const AccountHeader = ({title}: AccountHeaderInterface) => {
  return (
    <Section bg='white'>
        <Container>
            <HeaderTitle>{title}</HeaderTitle>
            <AccountHeaderTabs data={data}></AccountHeaderTabs>
        </Container>
    </Section>
  )
}

export default AccountHeader