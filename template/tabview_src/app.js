import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Router } from './router'
import { Config } from './config/config'

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Router />
      </PaperProvider>
    )
  }
}
