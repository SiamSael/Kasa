import imgHomeBanner from "../../assets/HomeImage.png"
import Banner from "../../components/Banner"
import Cards from "../../components/Cards"
import logements from "../../datas/logements"

function Home() {
  return (
    <main className="home">
      {Banner(imgHomeBanner, true)}
      {Cards(logements)}
    </main>
  )
}
  
export default Home