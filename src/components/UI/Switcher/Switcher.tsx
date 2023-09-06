import './Switcher.scss'

interface SwitcherProps {
  id: string
  checked: boolean
  onChange: () => void
  label?: string
}

export const Switcher = ({ id, label, checked, onChange }: SwitcherProps) => {
  return (
    <div className='switcher'>
      <input
        id={id}
        checked={checked}
        onChange={onChange}
        className='switcher__input'
        type="checkbox"
      />
      <label className='switcher__wrapper' htmlFor={id}>
        <span className='switcher__background'>
          <span className='switcher__circle' />
        </span>
        {label && <span className="switcher__label">{label}</span>}
      </label>
    </div>
  )
}
