import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from "react-native";
import { stylesmesager } from "./StylesMesager";

const Messenger = () => {
  const [textsend, settextsend] = useState("");
  const [loading, setloading] = useState(0);
  const [acc, setacc] = useState("2");
  interface datacomment {
    comment: string;
    ac: string;
    id: number;
  }
  const [datacomment, setdatacomment] = useState<datacomment[]>([]);

  React.useEffect(() => {
    axios
      .get("https://627493bd345e1821b22d0bff.mockapi.io/commens")
      .then((e) => {
        const { data } = e;
        setdatacomment(data);
      });
  }, [loading]);
  // setTimeout(() => {
  //   setloading(loading + 1);
  // }, 5000);
  const onSend = () => {
    axios
      .post("https://627493bd345e1821b22d0bff.mockapi.io/commens", {
        comment: textsend,
        ac: acc,
      })
      .then((e) => {
        setloading(loading + 1);
        settextsend("");
      });
  };
  const logac = () => {
    alert("Vừa Đổi Tài Khoản");
    if (acc == "1") {
      setacc("2");
    } else {
      setacc("1");
    }
  };
  return (
    <View style={{ height: "100%" }}>
      <ScrollView>
        {datacomment.map((vl: any, index) => (
          <>
            <View
              style={vl.ac == 2 ? { display: "none" } : stylesmesager.vewget}
              key={index}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  marginLeft: 10,
                  marginTop: 15,
                }}
                source={{
                  uri: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/279223457_1045663226159654_1811975233346403111_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=NyDWDIT2S8EAX81DjmK&_nc_ht=scontent.fhan5-8.fna&oh=00_AT8eXHlhtDocZSJ9cf-kQ_NTXMR09JfMTGtGzyvGsUKROA&oe=6279F4B3",
                }}
              />
              <Text style={stylesmesager.textget}>{vl.comment}</Text>
            </View>
            <View
              style={vl.ac == 1 ? { display: "none" } : stylesmesager.vewsend}
            >
              <Text style={stylesmesager.textsend}>{vl.comment}</Text>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  marginRight: 10,
                  marginTop: 15,
                  display: "none",
                }}
                source={{
                  uri: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/279223457_1045663226159654_1811975233346403111_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=NyDWDIT2S8EAX81DjmK&_nc_ht=scontent.fhan5-8.fna&oh=00_AT8eXHlhtDocZSJ9cf-kQ_NTXMR09JfMTGtGzyvGsUKROA&oe=6279F4B3",
                }}
              />
            </View>
          </>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          bottom: 0,
          zIndex: 2,
          height: 50,
          alignItems: "center",
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <AntDesign
                onPress={logac}
                name="pluscircle"
                size={32}
                color="black"
              />
              <AntDesign name="github" size={32} color="black" />
              <TextInput
                value={textsend}
                style={{
                  borderWidth: 1.2,
                  borderRadius: 15,
                  width: 210,
                  height: 32,
                  color: "black",
                  textAlign: "center",
                }}
                placeholder="  ...Sen mesager"
                onChangeText={(text: any) => {
                  settextsend(text);
                }}
              />
              <Ionicons onPress={onSend} name="send" size={32} color="black" />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Messenger;
