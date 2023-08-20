import { AuthForm } from 'components'
import { useAuthContext } from 'core/providers'
import { Navigate } from 'react-router-dom'
import { APP_ROUTES } from 'core/config'

const SignUpPage = () => {
  const { isAuth, register } = useAuthContext()

  if (isAuth) {
    return <Navigate to={APP_ROUTES.HOME} />
  }

  return (
    <AuthForm
      titleText='Добро пожаловать!'
      submitText='Зарегистрироваться'
      onSubmit={register}
    />
  )
}

export default SignUpPage
