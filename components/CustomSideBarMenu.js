
import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
  render(){
    //console.log("props...")
    //console.log(this.props)
    return(
      <View style={{flex:1}}>
        <Text>Custom Side Bar Menu</Text>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text style={{color:"blue", fontSize:20, textAlign:"center"}}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  
  drawerItemsContainer:{
    flex:0.8,marginTop:70,backgroundColor:"#abcdef"
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    backgroundColor:"orange"
  },
  
})