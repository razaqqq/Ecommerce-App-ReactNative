import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Avatar } from "react-native-paper"
import ContactListItem from "../components/ContactListItem"
import FooterChat from "../components/FooterChat"
import { colors } from "../styles/styles"





const ContactList = () => {

    const contactListData = [
        {
            "image": "data:image/jpeg;base64,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",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "data:image/jpeg;base64,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",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "data:image/jpeg;base64,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",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFRUXGRUXFRcWFxcYGhYZGxgaGhYVGBUYHigjGB0lGxgXITEiJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGxAQGy4mHyUrKy8tLS0tLSstLS0yLS0rLS0tLTUtLS0tLS0tLS0tLS0tLSstKy0rLS0tLS0tLS03Lf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQFBgcCAQj/xAA9EAACAQIDBAcHAQcDBQAAAAAAAQIDEQQhMQUSQVEGE2FxgZHBByIyobHR8EIjUmJykqLxssLhFCQzQ4L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAlEQEBAAIBAwQBBQAAAAAAAAAAAQIRAxIhMQQiQVETFEJhkeH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAHirUUU5SaSSu23ZJcW29APZWx2PpUY71WpGEecml5X1OddLvaZut08HZ86rX+iL+r8jmmO2lVrSc6spTk+Mm2/noSO5Ven+Ai7ddfX4YTa87F7ZvSrB18qdeF3wleD8FK1/A/Ok5PU+Rnp5jQ/UqBwnop07xGGajKTqUtNyb0/llrH6dh2HYG36OLhvUpZr4oPKUe9cV2ogZUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5qTSTbdks23wS1ZxLp700qYqcqVJ7tCLdkv/Zb9cvql6nSPaPjHS2fW3XZz3YeEmlL+25w3Z+BlWqqK43d+VtR4m0ybulaEZSfu6mQwuyq0r2pSb52dvobbs/ZlKlwTl+8/TkbbgUmjNl6jvqRsx9NNbtcxn0YxDV+qnla3uvPLPQp4zZFWnnKnJXz+FrXhmrdp2qFLLMq16GpH58p8JnBhflxN0mtbJ9/YX9k7WqYepGdOVpR0a5cU+a7DetqYenPKcU+9fR8PA1Lbmwo04b9Ju3FPh3PkWcfPMvKrk9PcfDsfRDpLDGUm7btSFlUj3rKS7H8rGfOFezXaUqWNpK+VR9XJc1LKP8Adus7qXMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANL9q0W8JCK41Y/6Js5vsKjuScuNrfc6/0wwSq0Yp/pnF/Jr1Oa4vDbkpJFfJ4X8M7pIVG2bHsqpLd558vkavhsdSp235q5s2ztvYb4esSlyMcxyl3puueOtM/Rll2lXHtrKxPTxkXmtOaKG09t0IfFJLmdblVyWXbXMdF7359Shi0pQlF8Uy3tDbuG4TsmUKVWEneErr8z7SMMMpfDvLkxs1tU2Ds5wxNCotFVpP8Avid2OcbKwifV89+KXfvJnRzdPDzs/IACXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVemO3Y01Khu3m4Kas1fKWT3dbXWpo3SzecV1btv2d+SaXozPe0+harTqqLcurcYqPPeus/zUwGOj1lKldO+4lJJ53j7rXhYqyvlpww7S/bVX/0UF+0vKS1k5Sv32inZeCIMPLDSn+z3lK/uuWcZNcFI23D7DqL4cJRnfi5q/8A9XX3L9LZDs3Vp0Ka+JRpwUrPnvNWT7lw1KfyY681onHd/DzsXF1JQcbNW1Nf25K+86ragsslq+XeblsSKbeXCxReDTk4Oyd24txjJJ58Jd5RjqXa/KXWmj4bE4OL3ZUZ9YnbdnvNrjnBLL5lrCKjOcalC0JJq6Tya4q3o0jZ6uyMToqeGmr/ABWcX4rdf1Kk9kyg7zhCL/geXlZGjrm/9Z/x3XfX9Mxica6PUSja8Xvu+llln528TdOh223i6DqtWtOUNLXtbNK7yzOc7ajUbo7iUlGMXNPO6bla3j9EdE6E4VU8Mkla8pytybea80y3G+7TPyYzo3/LPgAtZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGq9O7xhTmkmryg78LpST8428TQcDiE4xcsvfqWXL3rnYNoYONWnKnPR+a7UcX2tBUcVVpXe7Co9187oqzx81o4s/EbhDHQjTysU8LWdWdpPLWxrFbFtzW9NRhFJ2f6n9l6lPbe0FOKlSqNSX6ou307jHOO3s33kk7un4HCLeysu0p4jCJzayy4nLMD00xNGTjN9YufFEVbpRia0nuycE+T4Hf6fLwr/AFGPnbo8NozpSab3op8dfMY/FQmrriarg8dFU92pJpvVvi+35nmjV3E7S3oXVn2cvAj8bq8k0zPXuNSKVrOHa292crR8bo6nsahKFGEZ/Fa8v5pPel82znXs83a+LnKSuowbjyupxs/nfwOpGzHHV28/kz3OkAB2qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjftXwLpYl1FkqiU13pJPxuv7jshqvtE2A8Vhm4f+Slecf4l+qPkrrtSCZdVyKWFWJUJKbg3HdkuTWkrPXLh2DYmysZLErDzqRjF7yjPdTjfde7w4uy8TF7PxPVytK+uavbO+ptdXFJbs7qz7cvEpy3OzXhZl3bBS6A4nq579WhNpRcI9UrSdveUnws8k8yXE+z+pBtrE04QW5d9XGPFqpfgsrW72R7P6TUow3ak60eHuydrdmf0I9q9I6U42g5P+KrJ+r7Tjbvoy35aQ9i4ipWnGdW1GLdrJXkle1lwK1ddXS3I3vJ310iZ6ttC1OU1o8r/X5mr1JSqVLRzeSLMN1XyWTw6z7IsG1CrVasnuQj3rOX1idEMX0a2THC4anRjbJXk1+qTzlLz9DKFrLQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeamj7mejF43b2Fg9yWIpKbulDfTk3/KswPzrtZWnJ9pnth1IYiHVzyefYYra9K7l3swdOrOnK8XZld93Zo743bc6/Re3w1nu8n8+6yRJS6K01uznVlxTWWXH5WszXF0qq5b17rj+dxHX6RTknFX5ff08iOnL7ddeP0zvSDEwhFQptNPVcsrxZi9lO0u16mKU5Te9J3bfkZrZtGxNsxmkSXK7r9FbNq71KnLnCD84osnMtldM62H6qM4wnh7Ri3G6qU+F3dtTV+6y7rnQdnbSpVoqVOafZxXNNcDuXajKWVcABLkAAAAAAAAAAAAAAAAAAAAAAAAAAAA+NgfSLE4iFOO9OSiubdjXtu9LIUrxpWnPS+sV5fE/vxNC2ltWpWbdSTb4XenYlw8CZBa6fdIquL/YYebp0t735K6c0k7+F7ZeZrNDDRw8bU1Zv4pP4pd75dh7p1LTi3we6y1tal7rKOXK45SfDVwY43G35YLEZ3MRi6GZl2VMVSfA4mXdbcezXcRFpnyjFtl+rHmj3RpRWhZ1Kujus4KhoZyhGyMZhKZkoFWVXYzUX6ct6NuxolwWNlFpxbT1unZ3Xb4keHjbMhw0XfweneuZbwXdqj1E1I3fZnTKvCynaou21/wCpeptWzulNCpq3TfKen9WnnY5XHT8+hLCb455l+mZ2qMk1dO65o+nJMBtmtQd6c2lfNap96eRuWyOmVOp7tZbkuazi/VEaG0gjo14zV4yUlzTv9CQgAAAAAAAAAAAAAAAAAAAIq+JhC2/JRu7LeaV3yVz7iK8YRc5O0Yq7ZyHpNtqpipe892MW9xLSL9X2kyDp+1Nu0KCvOd3wjHNv7eJou3+ldSt7sfcg+Ceb/mZrEcTve7J+99Ty3zJ0JZVbkdaXHiuTPMn+ZI835/niSIKqu731Ml1nWU1z0fgUXk9Mi7gIe9bg9O/8+pTz47x39LuDLWWvtisRhyhI22ts5vtMNtDZklmlkYpm33FgqlC7I4UEmXa8GlmijTbvoy2VxYv0WW8KrvuIsJhZS0Rsezdk2V3+eBxlk6mKs17r7vr/AJIKeq7s/FmV21FQglxk7eWf2MZCWbemi8lyNPpp7dsnqb7tJon2c/8AgjjVtxPkrX8/A0Mybft+X7wpvgQqa7u0J+oF7CY+pTleE3F9jsdB6OdKI1koVbRnpfRN+hzBE1Gq+3zGh28GsdDNuddF0pu84LJ/vR9WjZzgAAAAAAAAAAAAAAAixNZQhKctIpyfclcDRvaJtl3VCLyjZztxeqXbZZ+JotST0LW1cQ6tSVR6yk2/PTMpuodweXbTLsCq2ylpwb9fuem+XofJ5rP88AG9Z3t5aCUuP53ZFdTcWoybtwfFckSVLcXl3fIDzJ2yf+SSnN+WZHLgvx+RBOdrWfH8z8wN72fJVqamrZ5Ncmtfv4nzEUkldms7G2i4NrSM34JmdknL4jy+bj6MnqcPJ14sZjsLCXwohexVup2zMr1Kjmj6sTf3Svqq7Spgt2GTWZmI145EMaMeOpX2pUjCDly+begm7dIysk3WI6RY7fqZPKCsu18fzsMdRqNLg+P+WVq1S7z11Z7T7dPM9bDHpmnkZ5dWW16nPLMb35n5laEuXH5Eu/33+XkdOU17Z2fqeo1Ozt7yq6jyzR76y+V8+4JS73n3ntPhbP6leFTLh9vA+UZ3V/L0+VwM3sLaDo1YVE9Hmr6rRo7FTmmk1mmk13PQ4RGpnf8AOR13oZjOswkG9Y3g/DT5WIqGcAByAAAAAAAAAAAGudPcVuYSSWs2oer+SNjNJ9qNVKjSjfNyk7d0f+fmTBzmcms08r6ciJ1Uu7tIZVMzxUnfLL84HQszqJPh9iN1MyrRqOScX8UfmuD/ADkfJVbp65AWqqTVs+d+084PEb14yvdZX5/crU691nmRVHZ760Av4h2dnmuH2IalTml9ySnXUlZ9y7uRFUp2XYB5oVLOzf8Ag2HZu0brcl8S+F81y7zU5y4N25SJ6VR6Sea0kvkV8nHM5qrOPkuF3G5dYyRxSV9DE7L2mn7s/iXz7u0kxe0Pe18jzM8LhdV6mGczm4ySr5WMBtvH7ztdWj5X5njG4+ysm7tZ9iMPv73dfN8zX6bi17qx+p5f2xNBcW82eoZkcpLQ9X7O7U2MaxvHuFTtfyZW3j6prgBMquup5dfX5FWpV4EMKt5W5AZGrVyjFfq17tXx5XPXWZ25cfQxjxd5SlfKPurvevoiWhVu7/nkEsn1h0z2X4m9KrB8JRkvFW9Dk1Ore/Zl9/mdD9lVf9tVjzhfykvuyKh00AHIAAAAAAAAAAAcw9q+LtXow5U2/wCqVv8AaATBzytLn4+h863K4B0K+NrW3aqXw69seJJOpaSa0kfQBBWk07o9XbPgAUpWy5ZFmniNOKAA+VKakm1pydzHzjJfC01yfoz4AENor4Za8Oa8SeljpPPJtL4s/pxAObjL5dY5WeEPXOTtfjm3rJlmDtxAOnL7B3PW9YAD0jzcACvXn3kFOtZNvtAApwrZqPL3n3syDr7kV+9P4exc/qABaotRilmbt7LsT/3sV+9Cf0v6ACjsYAOAAAAAAf/Z",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "data:image/jpeg;base64,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",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ttvh7Ok0Qi4gF2_UsSp6uAUx3NqAVbrKwQ&s",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzKSW6oW34tQywjRno_E7acrysu6oVOBNSLQ&s",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeW4_-8amVW_0juWu92yUn_f7ZROaVwO2OWQ&s",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGdKjrh-Z8L8IgKSN_hbzL2-wd5pPwGq7cg&s",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZ8NxX_nb1DSXMedjToDPN77o3ZVxD1iBPg&s",
            "name": "Anjay",
            "descriptions": "descriptions"
        },

    ]


    const alpahbetArray = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'x', 'w', 'y', 'z'
    ]

    return (
        <View
            style={{
                width: "100%",
                height: "100%",
        
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",

                }}
            >
                <View
                    style={{

                        flexDirection: "row",
                        justifyContent: "space-around",
                        backgroundColor: colors.color3,
                        height: 50,
         
                    }}
                >
                    <View
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Avatar.Icon
                            icon={"magnify"}
                            size={40}
                        />
                    </View>
                    <View
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                color: colors.color2,

                            }}
                        >Contact List</Text>
                    </View>
                    <View
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Avatar.Icon
                            size={40}
                            icon={"magnify"} />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        height: 60,
                        borderTopStartRadius: 40,
                        borderBottomStartRadius: 40,
                        borderTopEndRadius: 40,
                        borderBottomEndRadius: 40,
                        marginHorizontal: 20,
                        backgroundColor: colors.color1_light1,
                        marginVertical: 20
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Avatar.Icon
                            icon={"phone"}
                            size={40}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Avatar.Icon
                            size={40}
                            icon={"star"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Avatar.Icon
                            size={40}
                            icon={"account-group"}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        flex: 1,


                    }}
                >
                    <View

                    >
                        <ScrollView
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            style={{
                                paddingBottom: 100
                            }}

                        >
                            {
                                contactListData.map((contact, index) => (
                                    <ContactListItem
                                        image={contact.image}
                                        name={contact.name}
                                        description={contact.descriptions}
                                        index={index}

                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            width: 50
                        }}
                    >
                        {
                            alpahbetArray.map((alp, index) => (
                                <Text>{alp[index]}</Text>
                            ))
                        }
                    </View>
                </View>
                <View style={{ 
                    width: "100%",
                    height: 70,
                     }}/>
            </View>
            <FooterChat
                activeRoute="CONTACT-LIST"
            />
        </View>
    )

}

export default ContactList