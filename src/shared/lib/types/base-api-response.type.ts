export type TBaseApiResponse<T> = {
  data: T
  message: string
  errors: string[]
  status: number
}
