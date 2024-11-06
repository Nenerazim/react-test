import { SharedUi, SharedLib } from '@shared'
import Youtube from 'react-lazyload-youtube'
import 'react-lazyload-youtube/dist/index.css'
import { SomeListService } from '@modules/some-list'
import { useQuery } from '@tanstack/react-query'
import { PageTitleService } from '@modules/page-title'
import { SomeListCard } from './ui'

export function HomePage() {
  const { data: pageTitle } = useQuery(
    PageTitleService.Queries.getPageTitleOptions('main'),
  )
  const {
    data: someListCards,
    fetchNextPage,
    hasNextPage,
  } = SomeListService.Queries.useSomeListOptions(4)
  const items = someListCards?.pages.flatMap((page) => page?.data) || []

  return (
    <main className="flex flex-col">
      <section className="flex h-[21erm] items-start justify-between bg-gray-10 p-16 max-lg:block max-sm:p-8">
        <div className="mb-16 w-[35vw] max-lg:w-full max-lg:px-20">
          <h1>{pageTitle?.title ?? 'Loading ...'}</h1>
          <p className="text-base">{pageTitle?.description ?? 'Loading ...'}</p>
        </div>
        <div className="mb-20 flex aspect-video w-full max-w-[530px] justify-center max-lg:mx-auto">
          <Youtube
            imgSize="hqdefault"
            width="100%"
            height="100%"
            videoId={
              pageTitle?.videoUrl.match(SharedLib.Constants.RegularConstant.youtube)?.[1]
            }
          />
        </div>
      </section>

      <section className="p-16 max-sm:p-8">
        <h1 className="mb-12">Also very important title</h1>
        <div className="grid grid-cols-4 gap-12 max-xl:grid-cols-3 max-lg:grid-cols-2">
          {items.map(({ title, description, id }) => (
            <SomeListCard title={title} description={description} key={id} />
          ))}
          {hasNextPage && (
            <SharedUi.Button
              className="col-span-4 mx-auto w-40 max-xl:col-span-3 max-lg:col-span-2"
              label="Show more"
              onClick={async () => fetchNextPage()}
            />
          )}
        </div>
      </section>

      <section className="flex h-[17erm] flex-col items-center bg-gray-10 p-16 max-sm:p-8">
        <h1>Less important title</h1>
        <SharedUi.Button className="w-40" label="Contact us" to="/form" />
      </section>
    </main>
  )
}
