import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HomeSearch from '../components/HomeSearch/HomeSearch'
import Business from '../components/Sections/Home/Business/Business'
import SocialLinks from '../components/Sections/Home/SocialLinks/SocialLinks'
import VIPAd from '../components/Sections/Home/VIPAd/VIPAd'


export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <HomeSearch />
      <VIPAd />
      <Business />
      <SocialLinks />
      {/* <Footer /> */}
    </div>
  )
}
