import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View
} from "react-native";
import Button from "../../components/Button";
import { SYSTEMCOLOR } from "../../constant/Colors";
import Images from "../../constant/Image";
import { getData, storeData } from "../../services/Storage";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigation();
  const handlelogin = async() => {
    const result =await getData(`user_${email}`);
    
    if(result){
      if(result.password === password){
        await storeData("USER",result);
        // alert(JSON.stringify(result));
        navigate.navigate("Dashboard");
      }else{
        // alert(JSON.stringify(result.name));
      }
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
         <Button title="SignUp" pressHandler={()=>{navigate.navigate("SignUp")}} />
         <Button title="Login" pressHandler={handlelogin} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:SYSTEMCOLOR,
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
    gap: 10,
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
