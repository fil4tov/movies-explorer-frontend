import { type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button, FormControl, FormError, FormLabel, Input, Section } from 'components/UI'
import { APP_ROUTES } from 'core/config'
import { useFormLocation } from './helpers'
import logo from 'assets/images/logo.svg'
import './AuthForm.scss'

interface AuthFormProps {
  submitText: string
  titleText: string
  onSubmit: () => void
}

export const AuthForm = ({
  submitText,
  titleText,
  onSubmit
}: AuthFormProps) => {
  const { footer, isSingUpPage } = useFormLocation()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
  }

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
            <FormControl isRequired>
              <FormLabel label="Имя" />
              <Input />
              <FormError />
            </FormControl>
          )}

          <FormControl isRequired>
            <FormLabel label="E-mail" />
            <Input type="email" />
            <FormError />
          </FormControl>

          <FormControl isRequired>
            <FormLabel label="Пароль" />
            <Input type="password" />
            <FormError />
          </FormControl>
        </fieldset>

        <Button type="submit" className="auth-form__button" fullWidth color="blue">
          {submitText}
        </Button>

        <div className="auth-form__footer">
          {footer}
        </div>
      </form>
    </Section>
  )
}
