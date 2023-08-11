import { Link, type To, useLocation } from 'react-router-dom'
import { APP_ROUTES } from 'core/config'

const FormFooter = ({ text, to, linkText }: { text: string, linkText: string, to: To }) => (
  <>
    <p className='auth-form__footer-text'>{text}</p>
    <Link className='auth-form__footer-link' to={to} replace>{linkText}</Link>
  </>
)

export const useFormLocation = () => {
  const location = useLocation()
  const isSingInPage = location.pathname === APP_ROUTES.SIGN_IN
  const isSingUpPage = location.pathname === APP_ROUTES.SIGN_UP

  const getFooter = () => {
    if (isSingUpPage) {
      return (
        <FormFooter
          text="Уже зарегистрированы?"
          linkText="Войти"
          to={APP_ROUTES.SIGN_IN}
        />
      )
    }
    if (isSingInPage) {
      return (
        <FormFooter
          text="Ещё не зарегистрированы?"
          linkText="Регистрация"
          to={APP_ROUTES.SIGN_UP}
        />
      )
    }
  }

  return {
    footer: getFooter(),
    isSingInPage,
    isSingUpPage
  }
}
