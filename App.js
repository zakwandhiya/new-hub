/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Container, Header, Content, Tab, Tabs , Footer , Button, Icon  , FooterTab} from 'native-base';
import IDE from './src/ide';
import INSPIRASI from './src/inspirasi';
import BERITA from './src/berita';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
      <Header hasTabs />
      <Tabs>
        <Tab heading="IDE">
          <IDE />
        </Tab>
        <Tab heading="INSPIRASI">
          <INSPIRASI />
        </Tab>
        <Tab heading="BERITA">
          <BERITA />
        </Tab>
      </Tabs>
      <Footer>
          <FooterTab>
            <Button active>
              <Icon active name="home" />
            </Button>
            <Button>
              <Icon name="alert" />
            </Button>
            <Button >
              <Icon name="add" />
            </Button>
            <Button >
              <Icon name="chatboxes" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
