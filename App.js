import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity,Alert, SafeAreaView} from 'react-native'
import React, { useState } from 'react'


const App = () => {

  const [isNameActive, setIsNameActive] = useState(false)
  const [isReferralActive, setIsReferralActive] = useState(false)
  
  const handleNamePress = ()=>{
    setIsNameActive(true)
    setIsReferralActive(false)
  }
  const handleReferralPress =()=>{
    setIsReferralActive(true)
    setIsNameActive(false)
  }

  const [isFashionActive, setIsFashionActive] = useState(false)
  const [isGroceryActive, setIsGroceryActive] = useState(false)
  const [isElectronicsActive, setIsElectronicsActive] = useState(false)
  const [isOtherActive, setIsOtherActive] = useState(false)

  const handleFashionPress = () => {
    setIsFashionActive(true)
    setIsGroceryActive(false)
    setIsElectronicsActive(false)
    setIsOtherActive(false)
  };

  const handleGroceryPress = () => {
    setIsFashionActive(false)
    setIsGroceryActive(true)
    setIsOtherActive(false)
    setIsElectronicsActive(false)
  }

  const handleElectronicsPress = () => {
    setIsElectronicsActive(true)
    setIsOtherActive(false)
    setIsFashionActive(false)
    setIsGroceryActive(false)
  };

  const handleOtherPress = () => {
    setIsElectronicsActive(false)
    setIsOtherActive(true)
    setIsFashionActive(false)
    setIsGroceryActive(false)
  }

  const handlepress =()=>{
    Alert.alert('Registration Completed')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverContainer}>
        <Image
          style={styles.image}
          source={require('./src/asset/cover.jpg')} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Registration</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={[styles.text2, isNameActive && styles.active1]}
        onPressIn={handleNamePress}
          placeholder='Enter Store Name' />
        <TextInput style={[styles.text2,isReferralActive && styles.active1]}
        onPressIn={handleReferralPress}
          placeholder='Enter Referral Code(Optional)' />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text3}>Select Category</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button1,isFashionActive && styles.active]}
        onPress={handleFashionPress}>
          <Image style={styles.image1}
            source={require('./src/asset/fashion.jpeg')} />
          <Text style={styles.text4}>Fashion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button1,isGroceryActive && styles.active]}
        onPress={handleGroceryPress}>
          <Image style={styles.image1}
            source={require('./src/asset/grocery.jpeg')} />
          <Text style={styles.text4} >Grocery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button1, isElectronicsActive && styles.active]}
        onPress={handleElectronicsPress}>
          <Image style={styles.image1}
            source={require('./src/asset/computer.jpeg')} />
          <Text style={styles.text4}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button1,isOtherActive && styles.active]}
        onPress={handleOtherPress}>
          <Image style={styles.image1}
            source={require('./src/asset/other.jpeg')} />
          <Text style={styles.text4}>Other</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Pressable style={styles.registerButton} onPress={handlepress}>
          <Text style={styles.text5}>REGISTER</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  coverContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 280,
    width: '100%',
  },
  textContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  text1: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10
  },
  textInputContainer: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20
  },
  text2: {
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 5,
    borderColor: '#fff',
    borderWidth: 1,
    borderBottomColor: 'gray',
    color: 'gray'
  },
  active1: {
    borderBottomColor: 'yellow'
  },
  text3: {
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    marginTop: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 2,
    borderColor: '#fff',

  },
  active: {
    borderColor: 'yellow'
  },
  image1: {
    height: 50,
    width: 50,
  },
  text4: {
    fontSize: 10,
    marginTop: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
  },
  registerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  registerButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text5: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15
  },
})