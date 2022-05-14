import { Fragment } from 'react'
import { GlobalStyle } from './assets/styles/global-styles.js'
import { Home } from './pages/Home'

function App() {
  return (
    <Fragment>
        <GlobalStyle />
        <Home />
    </Fragment>
  )
}

export default App
