import React, { Component } from 'react';
import { StyleSheet, View, FlatList,Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import db from '../config';

export default class notificationScreen extends Component{
    constructor(){
        super()
        this.state={
            user_id:firebase.auth().currentUser.email,
            all_notifications:[]
        }
        this.notificationsref=null
    }
    getNotifications = ()=>{
         this.requestref=db.collection('all_notifications')
         .where('notification_status','==','unread')
         .where('tarageted_user_id','==',this.state.user_id)
         .onSnapshot((sanpshot)=>{
             var all_notifications=[]
             sanpshot.docs.map((doc)=>{
                 var notification=doc.data()
                notification['doc_id']=doc.id
                all_notifications.push(notification)
             })
             this.setState({all_notifications:all_notifications})
         })
    }
    componentDidMount(){
        this.getNotifications()
    }

    keyExtractor = (item, index) => index.toString()
    
    renderItem = ({item,index}) =>{
        return (
            <ListItem
              key={index}
              leftElement={<Icon name="book" type="font-awesome" color ='#696969'/>}
              title={item.book_name}
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              subtitle={item.message}
              bottomDivider
            />
        )
     }
    render(){
        return(
          <View style={styles.container}>
            <View style={{flex:0.1}}>
              <MyHeader title={"Notifications"} navigation={this.props.navigation}/>
            </View>
            <View style={{flex:0.9}}>
              {
                this.state.all_notifications.length === 0
                ?(
                  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:25}}>You have no notifications</Text>
                  </View>
                )
                :(
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state. all_notifications}
                    renderItem={this.renderItem}
                  />
                )
              }
            </View>
          </View>
        )
      }
}

const styles = StyleSheet.create({
    container : {
      flex : 1
    }
  })