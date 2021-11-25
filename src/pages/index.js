import react from 'react'
import './styles.scss'

const Home = () => {
  return (
    <main id="main-content" className="home__container">
      <div className="home__coL">
        <h1 className="home__title">Teresina para todos</h1>
        <p className="home__text">
          Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas
          que buscam alternativas culturai para sair de casa, com mobilidade que
          todo cidadão precisa.
        </p>
        <p className="home__text">
          Checamos 10 itens essenciais de acessibilidade para pesoas com
          deficiência em diversos pontos da cidade.
        </p>
      </div>
    </main>
  )
}
