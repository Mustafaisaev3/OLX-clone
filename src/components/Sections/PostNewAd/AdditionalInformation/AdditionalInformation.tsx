import React, { useEffect, useState } from 'react'
import { FormFieldTypesInterface } from '../../../../utils/Types/FormFieldTypes'
import Checkboxes from '../../../Form/Checkboxes/Checkboxes'
import Input from '../../../Form/Input/Input'
import Tabs from '../../../Form/Tabs/Tabs'
import Card from '../../../UI/Card/Card'
import { CardTitle } from '../../../UI/Card/Card.elements'
import { ContentWrapper } from '../MainContent.elements'

interface AdditionalInformation {
  data: any[],
  getData: any
}

const AdditionalInformation = ({data, getData}: AdditionalInformation) => {
  // const [checkedOptions, setCheckedOptions] = useState([])
  // const getCheckedOptions = (options: any) => {
  //   setCheckedOptions(options)
  // }
  let initialState: any = []
  initialState = initialState.length ?  data.map(item => {
    const optionsItem = {
      id: item._id,
      value: []
    }
    return [...initialState, optionsItem ]
  }) : []

  const [checkedOptions, setCheckedOptions] = useState(initialState)
  const getOptions = (options: any, id: any) => {
    const filteredOptions = checkedOptions.filter((item: any) => {
      if(item.id !== id) {
        return item
      }
    })

    const targetOption = {
      id,
      value: options
    }
    setCheckedOptions([...filteredOptions, targetOption])
  }

  useEffect(() => {
    setCheckedOptions(initialState)
  }, [data])

  useEffect(() => {
    getData(checkedOptions)
  }, [checkedOptions])

  console.log(checkedOptions)
  return (
    <Card>
        <ContentWrapper>
            <CardTitle>Додаткова інформація</CardTitle>
            {data && data?.map((item) => {
                if(item.fieldType == FormFieldTypesInterface.checkboxes){
                    return <Checkboxes title={item.name} id={item._id} data={item.values} getValue={getOptions} />
                } else if(item.fieldType == FormFieldTypesInterface.input) {
                    return <Input label={item.name} id={item._id} getValue={getOptions} />
                } else if(item.fieldType == FormFieldTypesInterface.tabs) {
                    return <Tabs label={item.name} id={item._id} data={item.values} />
                }
            })}
        </ContentWrapper>
    </Card>
  )
}

export default AdditionalInformation