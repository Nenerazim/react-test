import clsx from 'clsx'
import { useState } from 'react'
import { Constants } from '@shared/lib'

type InputProps = {
  placeholder?: string
  label?: string
  value?: string
  onChange?: (event: string) => void
  className?: string
  disabled?: boolean
  type?: 'number'
  required?: boolean
  error?: string
}

export function Input(props: InputProps) {
  const {
    placeholder = 'Value',
    label,
    value = '',
    onChange,
    className,
    disabled = false,
    type,
    required = false,
    error,
  } = props

  const [currentValue, setValue] = useState(value)

  const textareaId = label
    ? `input-${label.replace(/\s+/g, '-').toLowerCase()}`
    : undefined

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    let replaceValue = newValue

    if (type) {
      replaceValue = newValue.replace(Constants.RegularConstant[type], '')
    }
    setValue(replaceValue)
    if (onChange) {
      onChange(replaceValue)
    }
  }

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={textareaId}
          className={clsx('mb-2 text-sm', { 'text-red-500': required && error })}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        className={clsx(
          'rounded-lg border border-gray-300 p-2 text-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300',
          { 'border-red-500': required && error },
          className,
        )}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        disabled={disabled}
      />
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  )
}
