import React, { useState } from 'react'
import { TabsContainer, TabsLinks, TabsLinkItem, TabsLink } from './AccountHedaerTabs.elements'

interface HeaderTabsInterface {
    data: {title: string, link: string}[]
}

const AccountHeaderTabs = ({data}: HeaderTabsInterface) => {
  const [activeTab, setActiveTab] = useState(data[0])

  return (
    <TabsContainer>
        <TabsLinks>
            {data ? data.map((item) => {
                return(
                        <TabsLinkItem key={item.title} className={activeTab.link == item.link ? 'active' : ''}>
                            <TabsLink href={`${item.link}`}>{item.title}</TabsLink>
                        </TabsLinkItem>
                )  
            }) : null}

            {/* <TabsLinkItem>
                <TabsLink href='#'>Оголошення</TabsLink>
            </TabsLinkItem>
            <TabsLinkItem>
                <TabsLink>Повідомлення</TabsLink>
            </TabsLinkItem>
            <TabsLinkItem className='active'>
                <TabsLink>Налаштування</TabsLink>
            </TabsLinkItem> */}
        </TabsLinks>
    </TabsContainer>
  )
}

export default AccountHeaderTabs