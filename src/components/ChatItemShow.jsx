import { Image, View, TouchableOpacity } from "react-native"
import { Text } from "react-native-paper"
import { colors } from "../styles/styles"



const ChatItemShow = ({
    image,
    name,
    lastestMessage,
    time,
    MmessageSum,
    navigate
}) => {
    return (
        <TouchableOpacity
            onPress={() => navigate.navigate("CHAT", {
                "name": name, "image": image
            })}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    height: 80,
                    width: "100%",
                    marginBottom: 10,
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignSelf: "center"

                }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",

                    }}

                >
                    <Image
                        style={{
                            width: 70,
                            height: 70,
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
                            position: "absolute",
                            width: 25,
                            height: 25,
                            backgroundColor: colors.color1,
                            top: 0,
                            right: 0,
                            zIndex: 20,
                            borderRadius: 20,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        {
                            MmessageSum > 0 ? (<Text
                                style={{
                                    fontSize: 15,
                                    color: colors.color2,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                            >
                                {MmessageSum}
                            </Text>) : (<View></View>)
                        }
                    </View>
                </View>

                <View
                    style={{
                        width: 20
                    }}
                />

                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        alignSelf: "center"
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                color: colors.color7
                            }}
                        >{name}</Text>
                    </View>

                    <View>
                        <Text
                            style={{
                                fontSize: 16
                            }}

                            numberOfLines={1}
                        >{lastestMessage}</Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        alignContent: "flex-start",
                        marginTop: 10
                    }}
                >
                    <View>
                        <Text>{time}</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ChatItemShow