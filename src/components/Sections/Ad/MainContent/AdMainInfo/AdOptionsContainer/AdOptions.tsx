import React from 'react'
import { useSelector } from 'react-redux'
import { AdOptionsContainer, AdOption } from './AdOptions.elements'

const AdOptions = ({options}: any) => {
  return (
    <AdOptionsContainer>
      {options && options.map((option: any) => {
        return(
          <AdOption key={option.id}>
            {option.id.name}: {option.value.map((item: any, id: number) => <span key={id}>{item}, </span> )}
          </AdOption>
        )
      })}
      
      {/* <AdOption>Тип автомобіля: З пробігом</AdOption>
      <AdOption>Умови продажу: Звичайний продаж</AdOption>
      <AdOption>Розмитнена: Так</AdOption>
      <AdOption>Модель: Octavia</AdOption>
      <AdOption>Коробка передач: Механічна</AdOption>
      <AdOption>Комфорт: Електропакет, Електросклопiдйомники, Парктроник, Бортовий комп'ютер, Датчик світла, Клiмат контроль, Круїз контроль, Мультируль, Омивач фар, Підігрів дзеркал, Підсилювач керма, Тонування скла, Датчик дощу</AdOption> */}
    </AdOptionsContainer>
  )
}

export default AdOptions