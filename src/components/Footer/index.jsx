import logoFooter from "../../assets/FooterLOGO.png"

function Footer() {

    const law = "2020 Kasa. All rights reserved"
    
    return (
        <footer className="footer">
            <img className="footer__img" src={ logoFooter } alt="logo de kasa" />
        <p className="footer__p"><i className="fa-regular fa-copyright"></i>{ law }</p>
        </footer>
    )
}
export default Footer