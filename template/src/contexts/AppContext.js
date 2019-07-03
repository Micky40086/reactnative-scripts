import React, { Component } from 'react'

export const AppContext = React.createContext()

export class AppProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      demo: "init value"
    }
  }

  render() {
    return (
      <AppContext.Provider value={{
        demo: this.state.demo,
        updateDemo: (demo) => this.setState({demo})
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const AppCunsumer = AppContext.Consumer