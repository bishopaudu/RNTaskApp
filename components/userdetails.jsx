import {View,Image,Text,StyleSheet} from 'react-native';
import user_avatar from '../assets/app_assets/user_avatar.png'


export default function UserDetails() {
    return (
        <View style={{flexDirection:'row',gap:10}}>
                <Image source={user_avatar} style={{width:40,height:40}} />
                <View>
                    <Text style={styles.greetText}>Hello,</Text>
                    <Text style = {styles.nameText}>Jasmine</Text>
                </View>
                </View>
    );
} 

const styles = StyleSheet.create({
    greetText:{
        color:'grey',
        fontSize:14
    },
    nameText:{
        color:'black',
        fontSize:16
    }
})