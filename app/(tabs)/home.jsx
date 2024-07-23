import { View, Text , StyleSheet, Link} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
 
  <View>
        <View className='h-1/3 bg-indigo-950' style={styles.header}>
                <Text className="mt-4"></Text>
        
       <Text className="text-white mt-12 pl-8  text-2xl">Hello,</Text> 
        <Text className="text-white pl-8 mt-4 text-5xl font-pbold">Username</Text> 

        
     


    </View>

    <View className="flex flex-row">

      <Text className="w-24 h-24 mt-8 ml-4 rounded-lg bg-white items-center font-pbold shadow-2xl shadow-indigo-500/50 hover:shadow-md justify-center pt-4" style={styles.box}> ICTC to ART pending linkage</Text>

       <Text className="w-24 h-24 mt-8 ml-4 rounded-lg bg-white items-center font-pbold shadow-2xl shadow-indigo-500/50 justify-center pt-6" style={styles.box}> Newly Initiated</Text>
     
       <Text className="w-24 h-24 mt-8 ml-4 rounded-lg bg-white items-center font-pbold justify-center shadow-2xl shadow-indigo-500/50 pt-6" style={styles.box}> Newly Initiated</Text>
     
    </View>

     <View className="flex flex-row">

      <Text className="w-24 h-24 mt-8 ml-4 rounded-lg bg-white items-center font-pbold shadow-lg justify-center pt-4" style={styles.box}> ICTC to ART pending linkage</Text>

       <Text className="w-24 h-24 mt-8 ml-4 rounded-lg bg-white items-center font-pbold shadow-lg justify-center pt-6" style={styles.box}> Newly Initiated</Text>
     
       <Text className="w-24 h-24 mt-8 ml-4 rounded-lg bg-white items-center font-pbold justify-center shadow-lg pt-6" style={styles.box}> Newly Initiated</Text>
     
    </View>

     <View className="flex flex-row">

      <Text className="w-24 h-24 mt-8 ml-4 rounded-lg bg-white items-center font-pbold shadow-lg justify-center pt-4" style={styles.box}> ICTC to ART pending linkage</Text>

       <Text className="w-24 h-24 mt-8 ml-4 rounded-lg bg-white items-center font-pbold shadow-lg justify-center pt-6" style={styles.box}> Newly Initiated</Text>
     
       <Text className="w-24 h-24 mt-8 ml-4 rounded-lg bg-white items-center font-pbold justify-center shadow-lg pt-6" style={styles.box}> Newly Initiated</Text>
     
    </View>

    </View>
   

    
  )
}



const styles = StyleSheet.create({
    header: {
        borderBottomRightRadius:120,
      resizeMode: 'contain', // Adjust the image's size mode as needed
    },

    box:{
        display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign:"center",
            verticalAlign:"center",
        fontSize:14,

    },
});


export default Home
