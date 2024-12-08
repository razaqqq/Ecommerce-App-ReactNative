



import { View, Text,Image, TouchableOpacity  } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'



const CallPage2 = ({route}) => {

    const navigate = useNavigation()

    const {image, name} = route.params

  return (
    <View
      style={{ 
        width: "100%",
        height: "100%",
        
       }}
    >
      <View
        style={{ 
          flexDirection: 'column',
          height: "100%",
          justifyContent: "space-around",
         }}
      >
        <View
          style={{ 
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            top: 50
           }}
        >
          <Text
            style={{ 
              fontSize: 48,
              marginBottom: 10
             }}
          >Anjay</Text>
          <Text
            style={{ 
              fontSize: 15
             }}
          >CALLING ...</Text>
        </View>
        <View
          style={{ 
            width: "100%",

            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginVertical: 30
           }}
        >
          <View
            style={{ 
              flexDirection: "row"
             }}
          >
            <View
              style={{ 
                flexDirection: "column"
               }}
            >
               <Icon size={50} source={"account-outline"} key="contacts"/>
               <Text>Contacts</Text>
            </View>
            <View style={{ 
              width: "15%"
             }} />
            <View
              style={{ 
                flexDirection: "column"
               }}
            >
              <Icon size={50} source={"plus"} key="add-call" />
              <Text>Add Call</Text>
            </View>
            <View style={{ 
              width: "15%"
             }} />
            <View
              style={{ 
                flexDirection: "column"
               }}
            >
              <Icon size={50} source={"volume-mute"} key={"mute"} />
              <Text>Mute</Text>
            </View>
          </View>
          <View style={{ height:20 }} />
          <View
            style={{ 
              flexDirection: "row"
             }}
          >
            <View
              style={{ 
                flexDirection: "column"
               }}
            >
               <Icon size={50} source={"account-outline"} key="contacts"/>
               <Text>Hold</Text>
            </View>
            <View style={{ 
              width: "15%"
             }} />
            <View
              style={{ 
                flexDirection: "column"
               }}
            >
              <Icon size={50} source={"plus"} key="add-call" />
              <Text>Record</Text>
            </View>
            <View style={{ 
              width: "15%"
             }} />
            <View
              style={{ 
                flexDirection: "column"
               }}
            >
              <Icon size={50} source={"volume-mute"} key={"mute"} />
              <Text>Note</Text>
            </View>
          </View>
          {/* <View
            style={{ 
              flexDirection: "row"
             }}
          >
            <View
              style={{ 
                flexDirection: "column"
               }}
            >
              <Icon size="50" source={"account-outline"} key={"hold"} />
              <Text>Hold</Text>
            </View>
            <View
               style={{ 
                flexDirection: "column"
               }}
            >
              <Icon size="50" source={"account-outline"} key={"record"} />
              <Text>Record</Text>
            </View>
            <View
               style={{ 
                flexDirection: "column"
               }}
            >
              <Icon size="50" source={"account-outline"} key={"note"} />
              <Text>Note</Text>
            </View>
          </View> */}
        </View>
       
        <View
          style={{ 
            width: "100%",
            flexDirection: "row",
            justifyContent: "center"
           }}
        >
          <Icon size={50} source={"volume-high"} key={"volume-heigh"} />
          <View style={{
            width: "10%"
          }}/>
          <TouchableOpacity 
            onPress={() => navigate.goBack()}
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
          </TouchableOpacity>
          <View style={{ width: "10%" }} />
          <Icon size={50} source={"navigation"} key={"navigation"} />
        </View>
      </View>
    </View>
  )
}

export default CallPage2