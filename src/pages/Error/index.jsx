import { Link } from "react-router-dom"

function Error() {

  const errorCode = "404"
  const explainationText = "Oups! La page que vous demandez n'existe pas."
  const redirectionText = "Retourner sur la page d'accueil."

  return (
    <main className="error">
      <h1 className="error__title">{ errorCode }</h1>
      <p className="error__p--explaination">{ explainationText }</p>
      <Link className="error__p--home" to="/">{ redirectionText }</Link>
    </main>
  )
}
  
export default Error