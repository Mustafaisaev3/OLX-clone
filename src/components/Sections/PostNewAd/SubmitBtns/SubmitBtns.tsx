import React from 'react'
import { useDispatch } from 'react-redux'
import { Title } from '../../../../pages/globalStyles'
import { fetchCreateNewAd } from '../../../../store/ducks/ads/action'
import Button from '../../../UI/Button/Button'
import Card from '../../../UI/Card/Card'
import { ContentWrapper } from '../MainContent.elements'
import { BtnsWrapper, BtnsContainer } from './SubmitBtns.elements'

const SubmitBtns = ({data}: any) => {
  const dispatch = useDispatch()

  const handleCreateNewAdBtnClick = () => {
    console.log(data)
    dispatch(fetchCreateNewAd(data))
  }

  return (
    <Card>
        <BtnsWrapper>
            <BtnsContainer>
                <Button type='submit' buttontype='secondary' onClick={handleCreateNewAdBtnClick}>Опублікувати</Button>
            </BtnsContainer>
        </BtnsWrapper>
    </Card>
  )
}

export default SubmitBtns