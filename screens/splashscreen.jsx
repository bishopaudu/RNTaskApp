import {View,Text,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import intro_anim from '../assets/animations/intro_anim.json'
import { useEffect} from 'react'
import LottieView from 'lottie-react-native'

export  default function  SplashScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        const timerNavigate = setTimeout(() =>navigation.navigate('Home'),3000)
        return () => clearTimeout(timerNavigate)
    }, [navigation])
    
    return (
        <View style={styles.container}>
            <LottieView source={intro_anim} 
            autoPlay={true} 
            loop={false}
            style={{width:200,height:200}}/>
            <Text style={styles.mainText}>Personal Todo App</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    mainText:{
        fontSize:25,
       // fontFamily:'serif',
        fontWeight:'bold'
    }

})