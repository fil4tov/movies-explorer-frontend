import './PageLoader.scss'
import { Loader } from '../Loader/Loader'

type LoaderProps = {
  isLoading: boolean
  className?: string
}

export const PageLoader = ({ isLoading }: LoaderProps) => {
  return (
    <>
      {isLoading && (
        <div className="page-loader">
          <Loader isLoading={isLoading} />
        </div>
      )}
    </>
  )
}
