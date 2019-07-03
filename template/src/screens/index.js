import React, { Component, useState, useContext } from 'react'
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'
import styled from 'styled-components'
import { AppContext } from '../contexts/AppContext'

function Index({ navigation, dispatch }) {
  const [count, setCount] = useState(0)
  const appContext = useContext(AppContext);

  onPress = (demo) => {
    appContext.updateDemo(demo)
  }

  return (
    <ContainerView>
      <Text>{count}</Text>
      <Text>{appContext.demo}</Text>
      <Button onPress={() => setCount(count + 1)} title="Plus Count" />
      <ConfigMessageText>{global.Config.MESSAGE}</ConfigMessageText>
      <Button onPress={() => this.onPress("Demo Context API")} title="change demo text" />
    </ContainerView>
  )
}

const ContainerView = styled.View`
  flex: 1
`

const ConfigMessageText = styled(props => <Text {...props} />)`
  color: red
`

export default Index