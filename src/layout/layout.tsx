interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return <main className='flex h-screen justify-center items-center'>{children}</main>
}
