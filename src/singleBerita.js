import React, { Component } from 'react';
import {  Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';


const singleBerita = (props) => {
  var namaPembuatBerita = 'nama pembuat berita'
  var KeteranganBerita = 'Keterangan'
  var judul = 'Judul Berita'
  var Isi = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed porta magna, in commodo nulla. Suspendisse a lorem vel eros venenatis ultricies. Proin porttitor tellus at dignissim rutrum. Curabitur pretium ex leo, a dapibus risus fringilla id. Nunc sed tristique elit. Integer vitae tempor eros. Vivamus non erat consequat,'
  // var creatorName = 'nama pembuat berita'
  // var creatorName = 'nama pembuat berita'

  
  return (
    <Card>
      <CardItem>
        <Left>
          <Image source={require('../assets/logo.png')} style={{height: 30, width: 30}}/>
          <Body>
            <Text >{namaPembuatBerita}</Text>
            <Text note>{KeteranganBerita}</Text>
          </Body>
          
          <Button transparent>
            <Icon active name="more" />
          </Button>
        </Left>
      </CardItem>

      <CardItem cardBody >
        <Left style={{flex : 1 , paddingHorizontal : 10}}>
          <Content style={{flex : 5}}>
            <Text >{judul}</Text>
            
            <Text note>{Isi}</Text>
          </Content>

          <Image source={require('../assets/logo.png')} style={{height: 100, width: 100 }}/>
        </Left>
        
      </CardItem>
      
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
        </Body>
        <Right>
          <Text>11h ago</Text>
        </Right>
      </CardItem>
    </Card>
  )
    
}

export default singleBerita;


