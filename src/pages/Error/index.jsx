import { Link } from "react-router-dom"

function Error() {

  const error = {
    errorCode : "404",
    explainationText : "Oups! La page que vous demandez n'existe pas.",
    redirectionText : "Retourner sur la page d'accueil."
  }

  return (
    <main className="error">
      <h1 className="error__title">{ error.errorCode }</h1>
      <p className="error__p--explaination">{ error.explainationText }</p>
      <Link className="error__p--home" to="/">{ error.redirectionText }</Link>
    </main>
  )
}
  
export default Error