import { Outlet } from 'react-router'

export function RootLayout() {
  return (
    <main className='flex h-screen justify-center items-center'>
      {' '}
      <Outlet />
    </main>
  )
}
