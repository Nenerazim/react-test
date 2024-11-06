import { Link } from 'react-router-dom'
import clsx from 'clsx'

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  className?: string
  disabled?: boolean
  styleType?: 'primary' | 'secondary'
  label?: string
  to?: string
}
const style: Record<'primary' | 'secondary', string> = {
  primary:
    'bg-gray-100 text-white rounded-[0.75rem] p-2 text-sm text-center active:scale-95 transition duration-200 ease-in-out hover:bg-opacity-80',
  secondary: '',
}
export function Button(props: ButtonProps) {
  const {
    type = 'reset',
    disabled,
    styleType = 'primary',
    className,
    onClick,
    label,
    to,
  } = props

  const handleClick = () => {
    if (!disabled && onClick) {
      return onClick()
    }
    return null
  }

  if (to) {
    return (
      <Link to={to} className={clsx(className, style[styleType])}>
        {label}
      </Link>
    )
  }

  return (
    <button
      className={clsx(className, style[styleType])}
      disabled={disabled}
      onClick={handleClick}
      type={type}
    >
      {label}
    </button>
  )
}
