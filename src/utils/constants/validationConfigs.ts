import { type UseValidationProps } from 'utils/hooks'
import isEmail from 'validator/lib/isEmail'

export const NAME_VALIDATION: UseValidationProps = {
  initialValue: '',
  minLength: 2,
  maxLength: 30,
  regExp: {
    match: /^[a-zA-Zа-яА-яёЁ\s-]+$/,
    message: 'Только латинские, кириллические буквы, проблел и -'
  }
}

export const EMAIL_VALIDATION: UseValidationProps = {
  initialValue: '',
  validate: {
    validator: isEmail,
    message: 'Неверный формат почты'
  }
}

export const PASSWORD_VALIDATION: UseValidationProps = {
  initialValue: '',
  minLength: 6
}
