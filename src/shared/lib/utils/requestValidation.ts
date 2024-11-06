export type ValidatorData = {
  val: string | number | boolean | File | undefined
  listValues: unknown
}

export type ValidationResult = string | undefined

type Validator = (data: ValidatorData) => ValidationResult

export const file = (customMessage?: string): Validator => {
  const message = customMessage ?? 'The uploaded file is not valid'
  return ({ val }: ValidatorData) => {
    if (val) {
      return val instanceof File && val.size > 0 ? undefined : message
    }
    return undefined
  }
}

export const required = (customMessage?: string): Validator => {
  const message = customMessage ?? 'This field is required'
  return ({ val }: ValidatorData) => {
    const stringedVal = String(val ?? '')
    return stringedVal && stringedVal.length ? undefined : message
  }
}

export const minLength = (min: number, customMessage?: string): Validator => {
  const message = customMessage ?? `Minimum length is ${min} characters`
  return ({ val }: ValidatorData) => {
    const stringedVal = String(val ?? '')
    return stringedVal && stringedVal.length >= min ? undefined : message
  }
}

export const maxLength = (max: number, customMessage?: string): Validator => {
  const message = customMessage ?? `Maximum length is ${max} characters`
  return ({ val }: ValidatorData) => {
    const stringedVal = String(val ?? '')
    return stringedVal && stringedVal.length <= max ? undefined : message
  }
}

export const email = (customMessage?: string): Validator => {
  const message = customMessage ?? 'Enter a valid email address'
  const emailRegExp =
    /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|[\x01-\x09\x0B\x0C\x0E-\x7F])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21-\x5A\x53-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])+)\])$/i
  return ({ val }: ValidatorData) => {
    const stringedVal = String(val ?? '')
    return emailRegExp.test(stringedVal) ? undefined : message
  }
}

export const sameAs = (key: string, customMessage?: string): Validator => {
  const message = customMessage ?? 'Values must match'
  return ({ val, listValues }: ValidatorData) =>
    String(val ?? '') === String((listValues as Record<string, unknown>)?.[key] ?? '')
      ? undefined
      : message
}

export const checked = (customMessage?: string): Validator => {
  const message = customMessage ?? 'This field is required'
  return ({ val }: ValidatorData) => (val ? undefined : message)
}

export const onlyLetters = (customMessage?: string): Validator => {
  const message = customMessage ?? 'This field can only contain letters'
  const lettersRegex = /^[а-яА-Яa-zA-Z]+$/
  return ({ val }: ValidatorData) => {
    const stringedVal = String(val ?? '')
    return lettersRegex.test(stringedVal) ? undefined : message
  }
}

export const isInteger = (customMessage?: string): Validator => {
  const message = customMessage ?? 'The value must be an integer'
  return ({ val }: ValidatorData) => (Number.isInteger(Number(val)) ? undefined : message)
}

export const notLessThan = (value: number, customMessage?: string): Validator => {
  const message = customMessage ?? `The value must be at least ${value}`
  return ({ val }: ValidatorData) => (Number(val) >= value ? undefined : message)
}

export const validate = <T>(data: T, rules: Partial<Record<keyof T, Validator[]>>) => {
  const errors: Partial<Record<keyof T, string | undefined>> = {}
  let isValid = true

  for (const key in rules) {
    const fieldRules = rules[key]
    for (const rule of fieldRules ?? []) {
      const error = rule({
        val: (data as Record<string, string | number | boolean | File | undefined>)[key],
        listValues: data,
      })
      if (error) {
        errors[key] = error
        isValid = false
        break
      }
    }
  }

  return { isValid, errors }
}
