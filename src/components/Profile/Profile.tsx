import { type ChangeEvent, type FormEvent, useState } from 'react'
import { Button, Divider, Section } from 'components/UI'
import { ProfileInputField } from './components'
import './Profile.scss'

export interface FormValues {
  name?: string
  email?: string
}

const FORM_ID = 'edit-profile'

export const Profile = () => {
  const [values, setValues] = useState<FormValues>({
    name: 'name',
    email: 'email'
  })

  const [isEditable, setIsEditable] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const onToggleEdit = () => {
    setIsEditable(prev => !prev)
    setValues(values)
  }

  return (
    <Section paddingY="s" className="profile" containerClassName="profile__container">
      <h1 className="profile__title">
        Привет, Human Name!
      </h1>

      <form onSubmit={onSubmit} id={FORM_ID} className="profile__form">
        <ProfileInputField
          onChange={onChange}
          label="Имя"
          value={values.name}
          name="name"
          disabled={!isEditable}
        />

        <Divider />

        <ProfileInputField
          onChange={onChange}
          label="E-mail"
          value={values.email}
          name="email"
          disabled={!isEditable}
        />
      </form>

      <div className="profile__buttons">
        {isEditable
          ? <>
              <Button color="blue" fullWidth>Сохранить</Button>
              <Button onClick={onToggleEdit}>Отменить</Button>
            </>
          : <>
              <Button onClick={onToggleEdit}>Редактировать</Button>
              <Button className="profile__logout">Выйти из аккаунта</Button>
          </>}
      </div>
    </Section>
  )
}
