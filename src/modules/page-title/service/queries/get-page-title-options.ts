import { SharedLib } from '@shared/index'
import { queryOptions } from '@tanstack/react-query'
import { PageTitleApi } from '@modules/page-title'

export const getPageTitleOptions = (pageName: string) =>
  queryOptions({
    queryKey: [SharedLib.Enums.QueryKeys.PageTitle],
    queryFn: () => PageTitleApi.getPageTitle(pageName),
  })
