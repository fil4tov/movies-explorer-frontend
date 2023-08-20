import { AboutMe, AboutProject, Portfolio, Promo, Technologies } from './components'

export const HomePage = () => {
  return (
    <>
      <Promo />
      <AboutProject />
      <Technologies />
      <AboutMe />
      <Portfolio />
    </>
  )
}
