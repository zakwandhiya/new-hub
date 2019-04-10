import React, { Component } from 'react';
import { StyleSheet , ScrollView} from 'react-native';
import { Container, Content, Card, CardItem, Body  , Spinner} from 'native-base';
import axios from 'axios';

import SingleBerita  from './singleBerita';


export default class Berita extends Component {
  dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare elit sed commodo congue. Nullam augue sapien, eleifend et semper sed, lacinia non sem. Donec sit amet tellus sed tortor vestibulum viverra ac eget purus. In condimentum ipsum at dictum accumsan. Praesent non augue volutpat, molestie quam et, tempus magna. Ut et nulla sem. Suspendisse in nulla mi. Aenean ullamcorper cursus sollicitudin. Nunc feugiat enim mattis, tincidunt enim id, lacinia libero.';
  
  state = { beberapaberita : [] };
  
  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => { 
          this.setState({beberapaberita : response.data})
        })
  }

  renderBerita(){
    return this.state.beberapaberita.map(berita => 
        <SingleBerita 
          key={berita.title}
          // album={album}
        />
    );
  }

  render() {

    if(this.state.beberapaberita.length === 0){
      return (

      <Container>

        <Spinner color='blue'/>
      </Container>
      )
    }
    return (
      // <Container>
      <ScrollView>

        {this.renderBerita()}
      </ScrollView>

      // </Container>
    );
  }
}
