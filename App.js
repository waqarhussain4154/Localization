import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {strings} from './Lozalization'
export default class App extends Component {
  componentDidMount(){
   
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Text> {strings.language} </Text>
      </View>
    )
  }
}
