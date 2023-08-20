import { AuthForm } from 'components'
import { useAuthContext } from 'core/providers'
import { Navigate } from 'react-router-dom'
import { APP_ROUTES } from 'core/config'

const SignInPage = () => {
  const { isAuth, login } = useAuthContext()

  if (isAuth) {
    return <Navigate to={APP_ROUTES.HOME} />
  }

  return (
    <AuthForm
      titleText='Рады видеть!'
      submitText='Войти'
      onSubmit={login}
    />
  )
}

export default SignInPage
