import React from 'react'
import { AdOptionsContainer, AdOption } from './AdOptions.elements'

const AdOptions = () => {
  return (
    <AdOptionsContainer>
      <AdOption>Приватна особа</AdOption>
      <AdOption>Тип автомобіля: З пробігом</AdOption>
      <AdOption>Умови продажу: Звичайний продаж</AdOption>
      <AdOption>Розмитнена: Так</AdOption>
      <AdOption>Модель: Octavia</AdOption>
      <AdOption>Коробка передач: Механічна</AdOption>
      <AdOption>Комфорт: Електропакет, Електросклопiдйомники, Парктроник, Бортовий комп'ютер, Датчик світла, Клiмат контроль, Круїз контроль, Мультируль, Омивач фар, Підігрів дзеркал, Підсилювач керма, Тонування скла, Датчик дощу</AdOption>
    </AdOptionsContainer>
  )
}

export default AdOptions