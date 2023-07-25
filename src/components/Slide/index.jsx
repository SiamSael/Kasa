const Slide = (index, images) => {
    return (
        <img className="slideshow__img" key={index} src={images[index]} alt="logement"/>
    )
}
export default Slide