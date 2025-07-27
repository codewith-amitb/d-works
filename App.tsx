import React,{useState,useEffect} from 'react';
import {View,Text,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      

    <Stack.Navigator>
    <Stack.Screen  name='logins stage' component={login}/>
     <Stack.Screen name='Home Stage' component={home}/>
     
    </Stack.Navigator>

   </NavigationContainer>
  );
};


const home=()=>{
return(

<View>
  <Text>  details here the place    </Text>
  

<Text style={{fontSize:15, color:'green'}} >  Home Page bhaina </Text>

<Text>   </Text>
</View>

);
};



const login=(props)=>{
  return(
  
  <View>
  <Text style={{fontSize:29, color:'yellow'}}>  Login Page bhaina</Text>
  
<Button title='go back' onPress={()=>props.navigation.navigate('Home Stage')}/>
<Text style={{fontSize:22}}> i am the one     </Text>
  
  <Button style = {{fontStyle:22}}>   </Button>
  <Text >  here the swasti vahini  </Text>    
  </View>
  
  );
  };
  
export default App;
