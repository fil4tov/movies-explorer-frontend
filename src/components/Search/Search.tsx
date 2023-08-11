import { Button, Divider, Input, Section, Switcher } from 'components/UI'
import './Search.scss'

export const Search = () => {
  return (
    <Section className='search' containerClassName="search__container" paddingY="s">
      <div className="search__input-wrapper">
        <Input className="search__input" placeholder="Фильм" noBorder />
        <Button className="search__button" borderRadius="s" color="blue">
          Поиск
        </Button>
      </div>

      <Switcher id='switcher' label="Короткометражки" />

      <Divider className='search__divider' />
    </Section>
  )
}
