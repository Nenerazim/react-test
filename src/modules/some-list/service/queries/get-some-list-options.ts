import { SomeListApi } from '@modules/some-list'
import { SharedLib } from '@shared/index'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useSomeListOptions = (limit: number) =>
  useInfiniteQuery({
    queryKey: [SharedLib.Enums.QueryKeys.SomeListCards],
    queryFn: ({ pageParam = 1 }) =>
      SomeListApi.getSomeListCards({ limit, page: pageParam }),
    getNextPageParam: ({ page, total }) => (page * limit < total ? page + 1 : undefined),
    initialPageParam: 1,
  })
