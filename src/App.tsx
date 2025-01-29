import { RootLayout } from './layout/layout'
import { Fifo } from './pages/fifo'
import { Login } from './pages/login'

function App() {
  return (
    <RootLayout>
      {/* <Login /> */}
      <Fifo />
    </RootLayout>
  )
}

export default App
