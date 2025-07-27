import React,{useState,useEffect,useContext} from 'react';
import {View,Text,Button,FlatList} from 'react-native';

const posting = () => {
  const data = { 
    name:"sam",
    age:29,
    email:"sam@test.com",
    userInfo:"subway.silter.jions.com"
  }


const saveApi=async()=>{
  const url="http://localhost:3000/users/";

  let result = await fetch(url,{      
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)
    

  })
  result = await result.json();
 <View>     <button>     </button>   </View>
  console.warn(result);



}



  return (
    <View>  
      <Text> hey guys we posting detail at online server</Text>
      <Button  title='post api data' onPress={saveApi} />
    </View>
  )
}

export default posting