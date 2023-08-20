import './SectionTitle.scss'

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className='section__title'>
      {title}
    </h2>
  )
}
