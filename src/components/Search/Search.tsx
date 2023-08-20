import { Button, Divider, Input, Section, Switcher } from 'components/UI'
import './Search.scss'
import { type FormEvent, useState } from 'react'

export const Search = () => {
  const [value, setValue] = useState('')
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Section
      className='search'
      containerClassName="search__container"
      paddingY="s"
      aria-label='Поиск'
    >
      <form onSubmit={onSubmit} className="search__input-wrapper">
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          className="search__input"
          placeholder="Фильм"
          noBorder
        />
        <Button
          disabled={!value}
          type='submit'
          className="search__button"
          borderRadius="s"
          color="blue"
        >
          Поиск
        </Button>
      </form>

      <Switcher id='switcher' label="Короткометражки" />

      <Divider className='search__divider' />
    </Section>
  )
}
