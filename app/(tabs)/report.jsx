import { View, Text , StyleSheet, Link, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Report = () => {
  return (
    <View>
      <View className='h-3/5 bg-indigo-950' style={styles.header}>
                <Text className="mt-4"></Text>
        
        <Text className="text-white pl-8 mt-10 text-4xl font-pbold">Linked ART Center</Text> 

    </View>

    <View>
     
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        borderBottomRightRadius:120,
      resizeMode: 'contain', // Adjust the image's size mode as needed
    },
});



export default Report