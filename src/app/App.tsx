import { SnackbarProvider } from 'notistack'
import React from 'react'
import RouterApp from '../routes'

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <RouterApp />
    </SnackbarProvider>
  )
}

export default App