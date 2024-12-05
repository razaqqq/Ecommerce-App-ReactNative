


import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'react-native-gradients'
import { colors } from '../styles/styles'
import { useNavigation } from '@react-navigation/native'




const CallPage = ({route}) => {

  const {image, name} = route.params
  const navigation = useNavigation()

  console.log(name)

  const colorList = [
    {offset: '0%', color: colors.color1, opacity: '1'},
    {offset: '29%', color: colors.color1_light1, opacity: '1'},
    {offset: '67%', color: colors.color1_light2, opacity: '1'},
    {offset: '100%', color: colors.color4, opacity: '1'}
  ]
  

  return (
    <View
      style={[
        styles.mainContainer,

      ]}
    >

      <LinearGradient colorList={colorList} angle={90}/>

      <View
        style={{ 
          position:"absolute",
          top: 200,
          flexDirection: 'column',
          width: "100%",
          height: 300,
          
         }}
      >
         <Image
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 80,
                            zIndex: 10,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            
                        }}
                        source={{
                            uri: image
                        }} 
          />
          <View
            style={{ 
              width: "100%",
              height: 150,
              top: 20,
              alignItems: 'center'
             }}
          >
            <Text>{name}</Text>
          </View>
      </View> 

      <View
        style={{ 
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: 300,
          flexDirection: 'row',
          justifyContent: 'space-around'
         }}
      >
        <TouchableOpacity
          style={{ 
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: "center",
            alignItems: 'center'
           }}
           onPress={() => {
            navigation.goBack()
           } }
        >
          <Image
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 80,
                        zIndex: 10,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        bottom: 10
                        
                    }}
                    source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/9946/9946316.png"
                    }} 
            />
             <Text>Decline</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ 
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: "center",
            alignItems: 'center'
           }}
           onPress={() => {
            navigation.navigate("CALL-PAGE2", {
              "image": image, "name": name
            })
           }}
        >
          <Image
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 80,
                        zIndex: 10,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        bottom: 10
                    }}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleJO4sNUL_Kc0QUxmmsASXUDzwkc9EMTKjg&s"
                    }} 
            />
             <Text>Accept</Text>
        </TouchableOpacity>
       
      </View> 
      
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width:"100%",
    height: "100%",
  }
});

export default CallPage