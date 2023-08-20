import { useState } from 'react'
import { Button, Divider, Section } from 'components/UI'
import { ProfileInputField } from './components'
import { useAuthContext, useCurrentUser } from 'core/providers'
import { useValidation } from 'utils/hooks'
import { EMAIL_VALIDATION, NAME_VALIDATION } from 'utils/constants'
import './Profile.scss'
import { type UpdateUserValues } from 'modules/currentUser'

export const Profile = () => {
  const { logout } = useAuthContext()
  const { user, updateUser, isLoading, error } = useCurrentUser()

  const name = useValidation({
    ...NAME_VALIDATION,
    initialValue: user.name ?? ''
  })
  const email = useValidation({
    ...EMAIL_VALIDATION,
    initialValue: user.email ?? ''
  })

  const [isEditable, setIsEditable] = useState(false)

  const onSubmit = async () => {
    const payload: UpdateUserValues = {
      name: name.value,
      email: email.value
    }
    try {
      await updateUser(payload)
      setIsEditable(false)
    } catch (e) {
      console.log(e)
    }
  }

  const onToggleEdit = () => {
    setIsEditable(prev => !prev)
    name.set(user.name ?? '')
    email.set(user.email ?? '')
  }

  return (
    <Section paddingY="s" className="profile" containerClassName="profile__container">
      <h1 className="profile__title">
        Привет, {user?.name}
      </h1>

      <form id='profile-form' className="profile__form">
        <p className='profile__input-error'>{name.error}</p>
        <ProfileInputField
          label='Имя'
          disabled={!isEditable}
          {...name.register}
        />

        <Divider />

        <ProfileInputField
          label='E-mail'
          disabled={!isEditable}
          {...email.register}
        />
        <p className='profile__input-error'>{email.error}</p>
      </form>

      <p className='profile__form-error'>{error}</p>

      <div className='profile__buttons'>
        {isEditable
          ? <>
              <Button
                onClick={onSubmit}
                color='blue'
                fullWidth
                isLoading={isLoading}
              >
                Сохранить
              </Button>
              <Button onClick={onToggleEdit}>Отменить</Button>
            </>
          : <>
              <Button onClick={onToggleEdit}>Редактировать</Button>
              <Button onClick={logout} className='profile__logout'>Выйти из аккаунта</Button>
          </>}
      </div>
    </Section>
  )
}
