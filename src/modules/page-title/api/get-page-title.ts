import { SharedApi, SharedLib } from '@shared'
import { AxiosResponse } from 'axios'
import { PageTitleLib } from '@modules/page-title'

type TGetPageTitleResponse =
  SharedLib.Types.TBaseApiResponse<PageTitleLib.TPageTitleEntity>

export const getPageTitle = async (pageName: string) => {
  const { data: response } = await SharedApi.baseClient.get<
    TGetPageTitleResponse,
    AxiosResponse<TGetPageTitleResponse>,
    TGetPageTitleResponse
  >(`/v1/page-title/${pageName}`)
  return response.data
}
