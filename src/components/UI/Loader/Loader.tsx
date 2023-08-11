import './Loader.scss'

export const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading && (
        <div className="loader">
          <span className='loader__circle' />
        </div>
      )}
    </>
  )
}
