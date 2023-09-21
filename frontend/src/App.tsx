import { MoviesProvider } from './contexts/MoviesContext'

import Main from './components/Main'

function App() {
  return (
    <MoviesProvider>
      <Main />
    </MoviesProvider>
  )
}
export default App
