import { SharedApi, SharedLib } from '@shared'
import { AxiosResponse } from 'axios'
import { SomeListLib } from '@modules/some-list'

type TGetSomeListResponse = SharedLib.Types.TBaseApiResponseThisPaginate<
  SomeListLib.TSomeListEntity[]
>

export const getSomeListCards = async (query?: SharedLib.Types.TPaginateQueryItems) => {
  const { data } = await SharedApi.baseClient.get<
    TGetSomeListResponse,
    AxiosResponse<TGetSomeListResponse>,
    TGetSomeListResponse
  >('/v1/some-list', { params: query })
  return data
}
