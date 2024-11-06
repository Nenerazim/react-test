import { Outlet, ScrollRestoration } from 'react-router-dom'
import { SharedUi } from '@shared'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky inset-x-0 top-0 z-50 flex h-24 animate-slide-in-top items-center justify-between border-y border-gray-200 bg-white px-12 max-sm:flex-col max-sm:p-4">
        <h2>Some Company</h2>
        <SharedUi.Button label="Contact us" to="/form" className="w-40" />
      </header>
      <main className="flex flex-grow flex-col">
        <Outlet />
        <ScrollRestoration />
      </main>

      <footer className="flex h-48 w-full items-center justify-center border-t border-gray-200 bg-white">
        <h2>Some Company 2024</h2>
      </footer>
    </div>
  )
}
