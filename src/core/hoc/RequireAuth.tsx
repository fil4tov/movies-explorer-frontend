import { useAuthContext } from 'core/providers'
import { type LazyExoticComponent, type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { APP_ROUTES } from 'core/config'
import { PageLoader } from 'components/UI'

type RequireAuthProps = {
  component: LazyExoticComponent<() => ReactNode>
}

export const RequireAuth = ({ component: Component }: RequireAuthProps) => {
  const { isLoading, isAuth } = useAuthContext()

  if (isLoading) {
    return <PageLoader isLoading={isLoading} />
  }

  return isAuth ? <Component /> : <Navigate to={APP_ROUTES.SIGN_IN} replace />
}
