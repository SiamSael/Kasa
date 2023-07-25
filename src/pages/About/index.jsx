import imgAboutBanner from "../../assets/AboutImage.png"
import Banner from "../../components/Banner"
import CollapseList from "../../components/CollapseList";
import { aboutList } from "../../datas/about"

function About () {
    return(
        <main>
            {Banner(imgAboutBanner, false)}
            {CollapseList(aboutList)}
        </main>
    )
}
export default About