import React, { useEffect, useState } from 'react'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Fieldset from '../../UI/Fieldset/Fieldset'
import Grid from '../../UI/Grid/Grid'

interface CheckboxesInterface {
    title: string,
    getValue?: any,
    id: any,
    data: any[]
}

const Checkboxes: React.FC<CheckboxesInterface> = ({title, id, data, getValue}) => {
  // let optionState: any = []
  

  // const getCheckboxStatus = (e: any) => {
  //   let option = e.currentTarget.value

  //   if(optionState.includes(option)){
  //     const filteredOptionState = optionState.filter((item: any) => {
  //       return item != option
  //     })

  //     optionState = [...filteredOptionState]
  //   } else {
  //     optionState.push(option)
  //   }
  // }
  
  // useEffect(() => {
  //   getCheckedOptions(optionState)
  //   console.log(optionState)
  // }, [])

  let [optionState, setOptionState] = useState<string[]>([])

  const getCheckboxStatus = (e: any) => {
    let option = e.currentTarget.value

    if(optionState.includes(option)){
      const filteredOptionState = optionState.filter((item: any) => {
        return item != option
      })

      setOptionState([...filteredOptionState])
    } else {
      const filteredOptionState = [...optionState, option]
      setOptionState([...filteredOptionState])
    }
  }

  useEffect(() => {
    getValue(optionState, id)
    console.log(optionState)
  }, [optionState])

  // console.log(data)

  return (
    <Fieldset legend={title}>
        <Grid column={2}>
            {data.map((option) => {
              return <Checkbox value={option} name={option} label={option} onChange={getCheckboxStatus} />
            })}
        </Grid>
    </Fieldset>
  )
}

export default Checkboxes