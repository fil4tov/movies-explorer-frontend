import { APP_ROUTES } from 'core/config'
import account from 'assets/images/account.svg'
import { HeaderLink } from 'components/Header/components'

export const getHeaderNavs = () => {
  const unauthorizedNav = (
    <nav className="header__links">
      <HeaderLink to={APP_ROUTES.SIGN_UP}>
        Регистрация
      </HeaderLink>
      <HeaderLink to={APP_ROUTES.SIGN_IN} className="header__link_type_button">
        Войти
      </HeaderLink>
    </nav>
  )

  const authorizedNav = (
    <nav className="header__links header__links_mode_auth">
      <HeaderLink to={APP_ROUTES.MOVIES}>
        Фильмы
      </HeaderLink>
      <HeaderLink to={APP_ROUTES.SAVED_MOVIES}>
        Сохранённые фильмы
      </HeaderLink>

      <HeaderLink to={APP_ROUTES.PROFILE} className="header__link_type_account">
        Аккаунт
        <span className="header__account-icon">
          <img src={account} alt="Иконка профиля" />
        </span>
      </HeaderLink>
    </nav>
  )

  const drawerNav = (
    <nav className="header__drawer-links">
      <HeaderLink to={APP_ROUTES.HOME} className='header__link_type_menu'>
        Главная
      </HeaderLink>
      <HeaderLink to={APP_ROUTES.MOVIES} className='header__link_type_menu'>
        Фильмы
      </HeaderLink>
      <HeaderLink to={APP_ROUTES.SAVED_MOVIES} className='header__link_type_menu'>
        Сохранённые фильмы
      </HeaderLink>
      <div className="header__drawer-profile">
        <HeaderLink
          to={APP_ROUTES.PROFILE}
          className="header__link_type_account header__link_type_menu"
        >
          Аккаунт
        </HeaderLink>
        <span className="header__account-icon">
          <img src={account} alt="Иконка профиля" />
        </span>
      </div>
    </nav>
  )

  return {
    drawerNav,
    authorizedNav,
    unauthorizedNav
  }
}
