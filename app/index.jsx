import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
//import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="h-full">
       
      <ScrollView  contentContainerStyle={{height: '100%'}}>
      <ImageBackground source={images.redribbon} resizeMode="top" className="">
      <View className="w-full justify-center items-center h-full px-4">
      <Text className="text-7xl">CSC</Text>
      <Text className="text-2xl font-bold text-center">Care & Support Centers</Text>
      <Text className="text-3xl font-pnormal text-red-800 font-pbold mb-2">NACO</Text>
      <Image
        source={images.home}
        className="w-full"
        resizeMode='contain'
      />


<CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />



          {/* <Link href="/sign-in" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Go</Link> */}
          
         </View>
         </ImageBackground>
      </ScrollView>
     
    </SafeAreaView>
    // <View className="flex-1 items-center justify-center bg-red">
    //   <Text className="text-3xl font-medium font-pblack">CSC</Text>
    //   <StatusBar style="auto" />
    //   <Link href="/home" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-pnormal">Go to Profile</Link>
    // </View>
  );
}

export default Welcome;