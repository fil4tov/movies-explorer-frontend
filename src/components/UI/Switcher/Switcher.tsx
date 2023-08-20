import './Switcher.scss'

interface SwitcherProps {
  id: string
  label?: string
}

export const Switcher = ({ id, label }: SwitcherProps) => {
  return (
    <div className='switcher'>
      <input className='switcher__input' type="checkbox" id={id} />
      <label className='switcher__wrapper' htmlFor={id}>
        <span className='switcher__background'>
          <span className='switcher__circle' />
        </span>
        {label && <span className="switcher__label">{label}</span>}
      </label>
    </div>
  )
}
