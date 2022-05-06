import * as React from "react";
import SignUp from "./compoment/login/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./compoment/login/Login";
import { Image, StatusBar, Text, View } from "react-native";
import Messenger from "./compoment/messenger/Messenger";
import { styles } from "./compoment/login/LoginStyle";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  const messageTile = () => {
    return (
      <View
        style={{
          height: 80,
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
              source={{
                uri: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/279223457_1045663226159654_1811975233346403111_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=NyDWDIT2S8EAX81DjmK&_nc_ht=scontent.fhan5-8.fna&oh=00_AT8eXHlhtDocZSJ9cf-kQ_NTXMR09JfMTGtGzyvGsUKROA&oe=6279F4B3",
              }}
            />
            <Text
              style={{
                width: 15,
                height: 15,
                backgroundColor: "#31a24c",
                borderRadius: 10,
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            ></Text>
          </View>
          <Text style={{ fontSize: 18, marginLeft: 5 }}>Trần Mạnh</Text>
        </View>
        <View
          style={{
            marginRight: 20,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              width: 150,
            }}
          >
            <MaterialCommunityIcons
              name="phone-in-talk"
              size={20}
              color="black"
            />
            <FontAwesome name="video-camera" size={20} color="black" />
            <AntDesign name="exclamationcircle" size={20} color="black" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="s"
          component={Messenger}
          options={{ headerTitle: messageTile }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
