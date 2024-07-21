import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image, StyleSheet } from "react-native";

import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";
// import { getCurrentUser, signIn } from "../../lib/appwrite";
// import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
//   const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
        router.replace("/home");
    //   Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex h-full px-4 my-6 items-center"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[150px] items-center"
          />

          {/* <Text className="text-2xl font-semibold text-white mt-10 font-psemibold items-center">
            Log in to CSC
          </Text> */}

          {/* <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[104px] items-center"
          /> */}

         <View className="w-full bg-white flex px-4 my-6 items-center rounded-md">


         <Image
            source={images.user}
            resizeMode="contain"
            className="w-[50px] h-[50px]"
            style={styles.icon}
          />


          <FormField
            // title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Username"
          />

        <Image
            source={images.password}
            resizeMode="contain"
            className="w-[50px] h-[50px]"
            style={styles.icon_pass}
          />

          <FormField
            // title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7 align-center"
            placeholder="Password"
          />

          <CustomButton
            title="Login"
            handlePress={submit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2 mb-4">
            <Text className="text-lg text-gray-100 font-pregular">
              Forget
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Password
            </Link>
          </View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        left:30,
        top:70,
        zIndex:99,
      width: 30,
      height: 30,
      resizeMode: 'contain', // Adjust the image's size mode as needed
    },
    icon_pass: {
        position: 'absolute',
        left:30,
        top:190,
        zIndex:99,
      width: 30,
      height: 30,
      resizeMode: 'contain', // Adjust the image's size mode as needed
    },
  });


export default SignIn;
