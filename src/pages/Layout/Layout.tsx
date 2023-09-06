import { Outlet, useLocation } from 'react-router-dom'
import { Header, Footer } from 'components'
import { Suspense } from 'react'
import { APP_ROUTES } from 'core/config'
import { PageLoader } from 'components/UI'

export const Layout = () => {
  const location = useLocation()

  const isLoginPage = location.pathname === APP_ROUTES.SIGN_IN
  const isRegisterPage = location.pathname === APP_ROUTES.SIGN_UP
  const isProfilePage = location.pathname === APP_ROUTES.PROFILE
  const is404Page = !Object.values(APP_ROUTES).includes(location.pathname as any)

  const isHeaderVisible = !isLoginPage && !isRegisterPage && !is404Page
  const isFooterVisible = !isLoginPage && !isRegisterPage && !isProfilePage && !is404Page

  return (
    <>
      {isHeaderVisible && <Header />}
      <main className='main'>
        <Suspense fallback={<PageLoader isLoading />}>
          <Outlet />
        </Suspense>
      </main>
      {isFooterVisible && <Footer />}
    </>
  )
}
