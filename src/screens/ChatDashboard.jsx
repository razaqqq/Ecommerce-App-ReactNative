import { SafeAreaView, ScrollView, Touchable, TouchableOpacity, View } from "react-native"
import { Avatar, Text } from "react-native-paper"
import ChatItemShow from "../components/ChatItemShow"

import { colors } from "../styles/styles"
import FooterChat from "../components/FooterChat"
import { useNavigation } from "@react-navigation/native"



const ChatDashboard = () => {
    console.log(`Chat Dasboard Page Logging`)

    const navigate = useNavigation()

    const chats = [
        {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp3Z1hXfTVTKtbw3vE75-rtfr1ZCFcPSw4A&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        },
        {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQKMd6abmLwIBJ9TC_wODdQm7bSO_mqv33g&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1rfaSvgGFtKcA_PM-YswzkFlmcqYBZsw8A&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtxSvqIKGN_mACTeaA7BvO_Zgh2HQdJFIQg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqUYMt0cm8d5FGfHatDLYWCvNh3xRSn3Zag&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6P1TjiCc7wXkgCT0nmvoKYjNk2YxCksqYA&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCC6kKS4nOKjep3xDbK52VwrjW9N9K7sdUuFbpPloh98cEWkSeoOWvH5UY1ep4HOvMsA&usqp=CAU",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1ZSXhRSlL1iyp9PamppPrziWGlc51aRx1Q&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuh2w-gAUAEZASW5O1QPZaUIrtEPEQPWN1tg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazGKny1CSlH3XZGzdceONvBwSZqNVKklLnA&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        },
        {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp3Z1hXfTVTKtbw3vE75-rtfr1ZCFcPSw4A&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        },
        {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQKMd6abmLwIBJ9TC_wODdQm7bSO_mqv33g&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1rfaSvgGFtKcA_PM-YswzkFlmcqYBZsw8A&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtxSvqIKGN_mACTeaA7BvO_Zgh2HQdJFIQg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqUYMt0cm8d5FGfHatDLYWCvNh3xRSn3Zag&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6P1TjiCc7wXkgCT0nmvoKYjNk2YxCksqYA&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCC6kKS4nOKjep3xDbK52VwrjW9N9K7sdUuFbpPloh98cEWkSeoOWvH5UY1ep4HOvMsA&usqp=CAU",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1ZSXhRSlL1iyp9PamppPrziWGlc51aRx1Q&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuh2w-gAUAEZASW5O1QPZaUIrtEPEQPWN1tg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazGKny1CSlH3XZGzdceONvBwSZqNVKklLnA&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        },

    ]



    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: colors.color2,
                flexDirection: "column",
                flex: 1,

            }}
        >

            <ScrollView
                horizontal={false}
                style={{
                    marginBottom: 50
                }}
            >
                <View
                    style={{
                        width: "100%",
                        height: 50,
                        backgroundColor: colors.color3,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignSelf: "center",
                        paddingHorizontal: 10

                    }}

                >
                    <View
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            flex: 1
                        }}
                    >
                        <Avatar.Icon
                            size={50}

                            color={colors.color2}
                            icon={"dots-vertical"}
                            style={{


                                backgroundColor: colors.transparentCustom
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 2,
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                color: colors.color2
                            }}
                        >
                            ChatDasboard
                        </Text>
                    </View>
                    <View
                        style={{

                            flex: 1,

                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center",

                        }}
                    >
                        <Avatar.Icon
                            size={50}
                            color={colors.color2}
                            icon={"plus"}
                            style={{
                                backgroundColor: colors.transparentCustom,


                                alignSelf: "flex-end"
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        height: 50,
                        width: "auto",
                        backgroundColor: colors.color1,
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginVertical: 20,
                        marginHorizontal: 20,
                        paddingHorizontal: 5
                    }}
                >
                    <Avatar.Icon
                        icon={"magnify"}
                        size={50}
                        color={colors.color2}
                        style={{
                            backgroundColor: colors.transparentCustom,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            color: colors.color2
                        }}
                    >Search</Text>
                </View>
                <View
                    style={{
                        width: "auto",
                        height: "auto",
                        marginTop: 20,
                        marginHorizontal: 20,
                        marginBottom: 30

                    }}
                >
                    {
                        chats.map((chat, index) => (
                            <ChatItemShow
                                image={chat.image}
                                MmessageSum={chat.mMessageSum}
                                lastestMessage={chat.lastestMessage}
                                name={chat.name}
                                time={chat.time}
                                navigate={navigate}
                            />
                        ))
                    }
                </View>
            </ScrollView>

            <FooterChat activeRoute="CHAT-DASHBOARD" navigate={navigate} />



        </View>
    )
}


export default ChatDashboard