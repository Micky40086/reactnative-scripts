import React, { Component } from 'react'
import { Router } from './router'
import { Config } from './config/config'
import { AppProvider } from './contexts/AppContext'

export default class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router />
      </AppProvider>
    )
  }
}
