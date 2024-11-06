import { SharedApi } from '@shared'
import { FormLib } from '@modules/form'

export const createForm = async (form: FormLib.TFormEntity) =>
  SharedApi.baseClient.post<unknown, unknown, FormLib.TFormEntity>(`/v1/form`, form)
