import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Container, Drawer } from 'components/UI'
import { APP_ROUTES } from 'core/config'
import { cn } from 'utils/helpers'
import { HeaderLink } from './components'
import { getHeaderNavs } from './helpers'
import { useAuthContext } from 'core/providers'
import logo from 'assets/images/logo.svg'
import burger from 'assets/images/burger.svg'
import close from 'assets/images/close.svg'
import './Header.scss'

export const Header = () => {
  const location = useLocation()
  const { isAuth, isLoading } = useAuthContext()
  const { drawerNav, authorizedNav, unauthorizedNav } = getHeaderNavs()
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const isHomePage = location.pathname === APP_ROUTES.HOME

  const onToggleMenu = () => {
    setIsMenuOpened(prev => !prev)
  }

  const onCloseMenu = () => {
    setIsMenuOpened(false)
  }

  return (
    <header className={cn(['header'], {
      header_color_blue: isHomePage
    })}>
      <Container className="header__container">
        <HeaderLink to={APP_ROUTES.HOME} className="header__link_type_logo">
          <img src={logo} alt="Логотип" />
        </HeaderLink>

        {!isLoading && (isAuth ? authorizedNav : unauthorizedNav)}

        {isAuth && (
          <>
            <Button onClick={onToggleMenu} className="header__burger-button">
              {isMenuOpened
                ? <img className="header__burger-icon" src={close} alt="Закрыть меню" />
                : <img className="header__burger-icon" src={burger} alt="Открыть меню" />}
            </Button>

            <Drawer
              isOpen={isMenuOpened}
              onClose={onCloseMenu}
              blockScrollOnOpen
              closeOnOverlay
              hideOnDesktop
              className='header'
            >
              {drawerNav}
            </Drawer>
          </>
        )}
      </Container>
    </header>
  )
}
