import React, { useEffect, useState } from 'react'
import { TabsContainer, TabsLinks, TabsLinkItem, TabsLink } from './AdsHeaderTabs.elements'


const AdsHeaderTabs = ({setIsActiveAds}: any) => {
  const [activeTab, setActiveTab] = useState(true)
  console.log(activeTab)

  useEffect(() => {
    setIsActiveAds(activeTab)
  }, [activeTab])

  return (
    <TabsContainer>
        <TabsLinks>
            <TabsLinkItem key='active' className={activeTab ? 'active' : ''} onClick={() => setActiveTab(true)}>
                <TabsLink>Активні</TabsLink>
            </TabsLinkItem>
            <TabsLinkItem key='unactive' className={!activeTab ? 'active' : ''} onClick={() => setActiveTab(false)}>
                <TabsLink>Неактивні</TabsLink>
            </TabsLinkItem>

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

export default AdsHeaderTabs