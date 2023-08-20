import { type ChangeEvent, forwardRef } from 'react'
import { Input } from 'components/UI'

type Props = {
  label: string
  value?: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ProfileInputField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    value,
    onChange,
    disabled,
    label
  } = props
  return (
    <div className="profile__input-field">
      <p className="profile__input-label">{label}</p>
      <Input
        className="profile__input"
        noBorder
        value={value}
        onChange={onChange}
        disabled={disabled}
        ref={ref}
      />
    </div>
  )
})
