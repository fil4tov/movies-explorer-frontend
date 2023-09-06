import { Button, Divider, Input, Section, Switcher } from 'components/UI'
import { type FormEvent, useRef, useState } from 'react'
import './Search.scss'

export type FilterParams = {
  search: string
  onlyShorts: boolean
}

type SearchProps = {
  onSubmit: (params: FilterParams) => void
  onToggleSwitcher: (params: FilterParams) => void
  initialSearchParams?: FilterParams
}

export const Search = ({ onSubmit, onToggleSwitcher, initialSearchParams }: SearchProps) => {
  const [search, setSearch] = useState(initialSearchParams?.search ?? '')
  const [onlyShorts, setOnlyShorts] = useState(initialSearchParams?.onlyShorts ?? false)
  const onlyShortsRef = useRef(initialSearchParams?.onlyShorts ?? false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({ search, onlyShorts })
  }

  const handleToggleSwitch = () => {
    setOnlyShorts(prev => !prev)
    onlyShortsRef.current = !onlyShortsRef.current
    onToggleSwitcher({ search, onlyShorts: onlyShortsRef.current })
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
        onChange={handleToggleSwitch}
        label="Только короткометражки"
      />

      <Divider className='search__divider' />
    </Section>
  )
}
