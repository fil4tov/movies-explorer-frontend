import { type ChangeEvent } from 'react'
import { Input } from 'components/UI'
import { type FormValues } from '../Profile'

export const ProfileInputField = ({
  label,
  value,
  name,
  onChange,
  disabled
}: {
  label: string
  value?: string
  disabled?: boolean
  name: keyof FormValues
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => (
  <div className="profile__input-field">
    <p className="profile__input-label">{label}</p>
    <Input
      className="profile__input"
      name={name}
      noBorder
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  </div>
)
