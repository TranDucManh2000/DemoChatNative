import axios from "axios";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { styles } from "./LoginStyle";

const SignUp = ({ navigation }: any) => {
  interface datainter {
    name: string;
    tx: string;
    id: number;
  }
  const [datas, setdatas] = React.useState<datainter[]>([]);
  const [loading, setloading] = React.useState(0);
  const [ontext, setontext] = React.useState("");
  const [names, setname] = React.useState("");
  React.useEffect(() => {
    axios.get("https://627493bd345e1821b22d0bff.mockapi.io/send").then((e) => {
      const { data } = e;
      setdatas(data);
    });
  }, [loading]);
  setTimeout(() => {
    setloading(loading + 1);
  }, 5000);
  const ok = () => {
    axios
      .post("https://627493bd345e1821b22d0bff.mockapi.io/send", {
        name: names,
        tx: ontext,
      })
      .then((e) => {
        setloading(loading + 1);
      });
  };
  return (
    <View>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text style={{ color: "#000" }}>Have account ?</Text>
          <Text style={{ color: "blue" }}>Log in</Text>
        </View>
        <Text>
          {" "}
          <Button title="manh" onPress={() => setname("manh")} />
          <Button title="thieu" onPress={() => setname("thieu")} />
        </Text>
        <Text style={{ fontSize: 30 }}> La : {names}</Text>
        {datas.map((vl: any, index) => (
          <Text
            key={index}
            style={vl.name == "manh" ? { color: "red" } : { color: "blue" }}
          >
            {vl.name} : {vl.tx}
          </Text>
        ))}
        <TextInput
          onChangeText={(text: any) => {
            setontext(text);
          }}
          style={{ borderBottomWidth: 1, height: 50, marginBottom: 20 }}
        ></TextInput>
        <Button onPress={ok} title="Send" />
        <Button
          title="Go to Jane's profile"
          onPress={() => navigation.navigate("Login")}
        />
      </ScrollView>
    </View>
  );
};

export default SignUp;
