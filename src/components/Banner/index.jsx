function Banner(bannerImg, $isDisplayTitle) {

  const title = "Chez vous, partout et ailleurs"

  return (
    <div className="banner">
      <img className="banner__img" src={ bannerImg } alt="paysage"/>
      {$isDisplayTitle ? <h1 className="banner__title"> { title } </h1> : null}
    </div>
  )
}

export default Banner