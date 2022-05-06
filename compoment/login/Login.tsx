import * as React from "react";
import { View, Text, Button, ScrollView } from "react-native";

const Login = ({ navigation }: any) => {
  return (
    <View>
      <ScrollView>
        <Text>Chon de</Text>
        <Button
          title="manh"
          onPress={() => navigation.navigate("SignUp", { name: "Home" })}
        />
        <Button
          title="Thieu"
          onPress={() => navigation.navigate("SignUp", { name: "Home" })}
        />
      </ScrollView>
    </View>
  );
};

export default Login;
