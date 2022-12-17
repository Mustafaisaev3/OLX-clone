import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import HomeSearch from '../components/HomeSearch/HomeSearch'


export default function Home() {
  return (
    <div>
      <Header />
      <HomeSearch />
    </div>
  )
}
