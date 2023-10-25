import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
import Button from "../../components/Button";
import { SYSTEMCOLOR } from "../../constant/Colors";
import Images from "../../constant/Image";
import { getData, storeData } from "../../services/Storage";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigation();
  const handlelogin = async () => {
    try {
      const storeDat = await storeData(`user_${email}`, {
        name: name,
        email: email,
        password: password,
        mode: "Light",
      });
      if (storeDat) {
        console.log(await getData(`user_${email}`));
        navigate.navigate("Login");
      }
      else{
          alert("Something went wrong");
      }
    } catch (e) {
      console.log("error",e);
    }
  };
  return (
    <View style={[styles.container]}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          <Image
            source={Images.LoginIcon}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <View style={styles.inputContainer}>
          {/* <Text>Email</Text> */}
          <TextInput
            placeholder="Name"
            onChangeText={setName}
            value={name}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            style={styles.textInput}
          />
          {/* <Text>Password</Text> */}
          <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            style={styles.textInput}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Button title="SignUp" pressHandler={handlelogin} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SYSTEMCOLOR,
  },
  logoContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.4,
    gap: 10,
  },
  bottomContainer: {
    flex: 0.3,
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    width: "80%",
    padding: 10,
    height: 50,
    borderRadius: 5,
  },

  inputItem: {
    width: "100%",
    alignItems: "center",
  },
});
