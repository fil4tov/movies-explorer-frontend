import { type ChangeEvent, useEffect, useRef, useState } from 'react'
import { type $Keys } from 'utility-types'

export type UseValidationProps = {
  initialValue: string
  required?: boolean
  maxLength?: number
  minLength?: number
  regExp?: {
    match: RegExp
    message: string
  }
  validate?: {
    validator: (value: string) => boolean
    message: string
  }
}

type Options = {
  validateOnMount?: boolean
}

type Validity = Partial<Record<ValidityKeys, string>>
type ValidityKeys = $Keys<Omit<UseValidationProps, 'initialValue'>>

export const useValidation = ({
  initialValue,
  validate,
  maxLength,
  required,
  minLength,
  regExp
}: UseValidationProps,
{
  validateOnMount
}: Options = {}) => {
  const ref = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState('')
  const [isValid, setIsValid] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
    validateValue(value)
  }

  const validateValue = (value: string) => {
    let validity: Validity = {}

    const changeValidityMessage = (key: ValidityKeys, value: string) => {
      validity = { ...validity, [key]: value }
    }

    if (required ?? ref.current?.required) {
      const message = value.length ? '' : 'Обязательное поле'
      changeValidityMessage('required', message)
    }

    if (minLength) {
      const isValid = value.length && value.length >= minLength
      const message = isValid ? '' : `Минимальная длина ${minLength}`
      changeValidityMessage('minLength', message)
    }

    if (maxLength) {
      const isValid = value.length <= maxLength
      const message = isValid ? '' : `Максимальная длина ${maxLength}`
      changeValidityMessage('maxLength', message)
    }

    if (validate) {
      const { validator, message: userMessage } = validate
      const isValid = validator(value)
      const message = isValid ? '' : userMessage
      changeValidityMessage('validate', message)
    }

    if (regExp) {
      const { match, message: userMessage } = regExp
      const isValid = value.match(match)
      const message = isValid ? '' : userMessage
      changeValidityMessage('regExp', message)
    }

    logErrors(validity)
  }

  const logErrors = (validity: Validity) => {
    const errors = Object.values(validity).filter(Boolean)
    errors.length
      ? makeInvalid(errors[0])
      : makeValid()
  }

  const makeValid = () => {
    setIsValid(true)
    setError('')
  }

  const makeInvalid = (error: string) => {
    setError(error)
    setIsValid(false)
  }

  // Форсим валидацию только при первом рендере
  const renderRef = useRef(0)
  if (validateOnMount && !renderRef.current) {
    validateValue(initialValue)
    renderRef.current++
  }

  const set = (value: string) => {
    setValue(value)
    validateValue(value)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return {
    register: {
      value,
      onChange,
      ref
    },
    value,
    error,
    isValid,
    set
  }
}
