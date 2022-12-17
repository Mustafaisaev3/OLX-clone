import React, { useRef, useState } from 'react'
import { LocationSearchContainer, LocationsModal, LocationsModalHeader, LocationsModalContant, LocationCantantItem } from './LocationSearch.elements'
import Colors from '../../utils/css_variables/colors'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import {useLocationOutsideClick} from '../../hooks/useLocationOutsideClick'

type DivElementRef = React.MutableRefObject<HTMLDivElement>;

const LocationSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [showLocationModal, setShowLocationModal] = useState<boolean>(false)
  const [oblast, setOblast] = useState<string>('')
  
  const locationModalRef = useRef() as DivElementRef
  useLocationOutsideClick(locationModalRef, () => setShowLocationModal(false))

  const handleInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const handleOnFocusInput = (e: React.FormEvent<HTMLInputElement>) => {
    setShowLocationModal(true)
  }

  // const handleOnBlurInput = (e: React.FormEvent<HTMLInputElement>) => {
  //   setShowLocationModal(false)
  // }


  return (
    <LocationSearchContainer ref={locationModalRef}>
        <HiOutlineLocationMarker color={Colors.main_green} size={30}/>
        <input placeholder='Вся Україна' value={searchValue} onChange={handleInputValue} onFocus={handleOnFocusInput}  />
        {showLocationModal && (
          <LocationsModal>
            <LocationsModalHeader>
              {!oblast 
                ? 
                <div onClick={() => setShowLocationModal(false)}>Вся Укрыїна</div>              
                : 
                <div onClick={() => setOblast('')}>
                  <IoIosArrowBack size={20} />
                  Змінити регіон
                </div>
              }
            </LocationsModalHeader>

            {!oblast 
               ?
              <LocationsModalContant>
                <LocationCantantItem onClick={() => setOblast('Kyiv')}>
                  1
                  <IoIosArrowForward size={20} />
                </LocationCantantItem>
                <LocationCantantItem>
                  2
                  <IoIosArrowForward size={20} />
                </LocationCantantItem>
                <LocationCantantItem>
                  3
                  <IoIosArrowForward size={20} />
                </LocationCantantItem>
                <LocationCantantItem>
                  4
                  <IoIosArrowForward size={20} />
                </LocationCantantItem>
                <LocationCantantItem>
                  5
                  <IoIosArrowForward size={20} />
                </LocationCantantItem>
                <LocationCantantItem>
                  6
                  <IoIosArrowForward size={20} />
                </LocationCantantItem>
                <LocationCantantItem>
                  7
                  <IoIosArrowForward size={20} />
                </LocationCantantItem>
                <LocationCantantItem>
                  8
                  <IoIosArrowForward size={20} />
                </LocationCantantItem>
                <LocationCantantItem>
                  9
                  <IoIosArrowForward size={20} />
                </LocationCantantItem>
                <LocationCantantItem>
                  10
                  <IoIosArrowForward size={20} />
                </LocationCantantItem>
              </LocationsModalContant>

              :

              <LocationsModalContant>
                <LocationCantantItem onClick={() => setOblast('Kyiv')}>
                  1
                </LocationCantantItem>
                <LocationCantantItem>
                  2
                </LocationCantantItem>
                <LocationCantantItem>
                  3
                </LocationCantantItem>
                <LocationCantantItem>
                  4
                </LocationCantantItem>
                <LocationCantantItem>
                  5
                </LocationCantantItem>
                <LocationCantantItem>
                  6
                </LocationCantantItem>
                <LocationCantantItem>
                  7
                </LocationCantantItem>
                <LocationCantantItem>
                  8
                </LocationCantantItem>
                <LocationCantantItem>
                  9
                </LocationCantantItem>
                <LocationCantantItem>
                  10
                </LocationCantantItem>
              </LocationsModalContant>

            }

          </LocationsModal>
        )}
    </LocationSearchContainer>
  )
}

export default LocationSearch