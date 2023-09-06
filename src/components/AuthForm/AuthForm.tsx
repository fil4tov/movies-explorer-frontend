import { type FormEvent, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, FormControl, FormError, FormLabel, Input, Section } from 'components/UI'
import { APP_ROUTES } from 'core/config'
import { useFormLocation } from './helpers'
import { type AuthState } from 'modules/auth'
import { useAuthContext } from 'core/providers'
import { useValidation } from 'utils/hooks'
import { EMAIL_VALIDATION, NAME_VALIDATION, PASSWORD_VALIDATION } from 'utils/constants'
import logo from 'assets/images/logo.svg'
import './AuthForm.scss'

interface AuthFormProps {
  submitText: string
  titleText: string
  onSubmit: AuthState['login'] | AuthState['register']
}

export const AuthForm = ({
  submitText,
  titleText,
  onSubmit
}: AuthFormProps) => {
  const { footer, isSingUpPage } = useFormLocation()
  const { isLoading } = useAuthContext()
  const navigate = useNavigate()
  // Для сброса ошибки при переключении форм
  const [error, setError] = useState('')

  const name = useValidation(NAME_VALIDATION)
  const email = useValidation(EMAIL_VALIDATION)
  const password = useValidation(PASSWORD_VALIDATION)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await onSubmit({
        name: name.value,
        email: email.value,
        password: password.value
      })
      navigate(APP_ROUTES.MOVIES)
    } catch (e) {
      setError(e as string)
    }
  }

  const isFormValid = useMemo(() => (
    isSingUpPage
      ? name.isValid && email.isValid && password.isValid
      : email.isValid && password.isValid
  ), [email.isValid, name.isValid, password.isValid, isSingUpPage])

  const isButtonDisabled = !isFormValid || isLoading

  return (
    <Section paddingY="s" className="auth-form" containerClassName="auth-form__container">
      <Link to={APP_ROUTES.HOME}>
        <img className="auth-form__logo" src={logo} alt="Логотип" />
      </Link>

      <h1 className="auth-form__title">
        {titleText}
      </h1>

      <form className='auth-form__form' onSubmit={handleSubmit}>
        <fieldset className='auth-form__fields'>
          {isSingUpPage && (
            <FormControl isRequired error={name.error}>
              <FormLabel label="Имя" />
              <Input {...name.register} />
              <FormError />
            </FormControl>
          )}

          <FormControl isRequired error={email.error}>
            <FormLabel label="E-mail" />
            <Input type='email' {...email.register} />
            <FormError />
          </FormControl>

          <FormControl isRequired error={password.error}>
            <FormLabel label="Пароль" />
            <Input type="password" {...password.register} />
            <FormError />
          </FormControl>
        </fieldset>

        <p className='auth-form__error'>
          {error}
        </p>

        <Button
          type="submit"
          className="auth-form__button"
          fullWidth
          color="blue"
          disabled={isButtonDisabled}
          isLoading={isLoading}
        >
          {submitText}
        </Button>

        <div className="auth-form__footer">
          {footer}
        </div>
      </form>
    </Section>
  )
}
