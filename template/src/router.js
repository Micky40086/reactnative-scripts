import { createAppContainer, createStackNavigator } from 'react-navigation'

import IndexScreen from './screens/index'
import WebScreen from './screens/web'

RouterStack = createStackNavigator({
  Index: {
    screen: IndexScreen
  },
  Web: {
    screen: WebScreen
  }
}, {
  navigationOptions: {
    header: null
  }
}, {
  initialRouteName: 'Index'
})

exports.Router = createAppContainer(RouterStack)
