import React from 'react'
import Card from '../../../UI/Card/Card'
import { ContentWrapper } from '../MainContent.elements'
import { GrPowerCycle } from 'react-icons/gr'
import { AutocontinueContainer, AutocontinueContent, AutocontinueSubtitle, AutocontinueText, AutocontinueTitle } from './Autocontinue.elements'
import Colors from '../../../../utils/css_variables/colors'
import Switch from '../../../UI/Switch/Switch'

const Autocontinue = () => {
  return (
    <Card>
        <ContentWrapper>
            <AutocontinueContainer>
                <AutocontinueContent>
                    <GrPowerCycle size={20} color={Colors.main_green} />
                    <AutocontinueText>
                        <AutocontinueTitle>Автопродовження</AutocontinueTitle>
                        <AutocontinueSubtitle>Оголошення буде деактивовано через 30 днів</AutocontinueSubtitle>
                    </AutocontinueText>
                </AutocontinueContent>
                <Switch name='autocontinue' value={'autocontinue'} />
            </AutocontinueContainer>
        </ContentWrapper>
    </Card>
  )
}

export default Autocontinue