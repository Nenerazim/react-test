export type TBaseApiResponseThisPaginate<T> = {
  data: T
  message: string
  errors: string[]
  status: number
  page: number
  total: number
}
