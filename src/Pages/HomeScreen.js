import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Profiledata } from '../Redux_folder/Actions/action';

const HomeScreen = () => {
  const ProfileDetail = useSelector(state => state)
  console.log(ProfileDetail)
  const dispatch = useDispatch();

  const CallActions=async()=>{
    let obj = {
      name:'satish',
      email:'satishkashyap0423@gmail.com',
      phoneno:'8427300969'
    }
   let a  = await dispatch(Profiledata(obj))
   console.log(a)
  }
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity onPress={()=>CallActions()} style={{width:'50%', borderRadius:30, justifyContent:'center', alignItems:'center',  height:50, backgroundColor:'#000'}}>
            <Text style={{color:'#fff'}}>Call Action</Text>
          </TouchableOpacity>
       
    </SafeAreaView>
  )
}

export default HomeScreen