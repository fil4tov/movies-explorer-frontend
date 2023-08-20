import { Button, Divider, Input, Section, Switcher } from 'components/UI'
import { type FormEvent, useState } from 'react'
import './Search.scss'

export type FilterParams = {
  search: string
  onlyShorts: boolean
}

type SearchProps = {
  onSubmit: (params: FilterParams) => void
  initialSearch?: string
  initialShorts?: boolean
}

export const Search = ({ onSubmit, initialSearch, initialShorts }: SearchProps) => {
  const [search, setSearch] = useState(initialSearch ?? '')
  const [onlyShorts, setOnlyShorts] = useState(initialShorts ?? false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({ search, onlyShorts })
  }

  return (
    <Section
      className='search'
      containerClassName="search__container"
      paddingY="s"
      aria-label='Поиск'
    >
      <form onSubmit={handleSubmit} className="search__input-wrapper">
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search__input"
          placeholder="Фильм"
          noBorder
        />
        <Button
          disabled={!search}
          type='submit'
          className="search__button"
          borderRadius="s"
          color="blue"
        >
          Поиск
        </Button>
      </form>

      <Switcher
        id='switcher'
        checked={onlyShorts}
        onChange={() => setOnlyShorts(prev => !prev)}
        label="Только короткометражки"
      />

      <Divider className='search__divider' />
    </Section>
  )
}
