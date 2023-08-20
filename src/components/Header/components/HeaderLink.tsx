import { type LinkProps, NavLink } from 'react-router-dom'
import { cn } from 'utils/helpers'

export const HeaderLink = ({
  to,
  className,
  children,
  ...rest
}: LinkProps) => (
  <NavLink
    to={to}
    className={({ isActive }) => (
      cn(['header__link', className], {
        header__link_type_active: isActive
      })
    )}
    {...rest}
  >
    {children}
  </NavLink>
)
