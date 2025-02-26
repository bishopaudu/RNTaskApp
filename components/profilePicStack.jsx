import {View,Image,Dimensions} from 'react-native'
import { profilePics } from '../utils/profilePicsData'
export default function ProfilePicStack() {

    const {width} = Dimensions.get('screen')
    return (
        <View style={{ flexDirection: "row",  }}>
                    {
                      profilePics.map((img, index, data) => (
                        <View key={index} style={{ width: 20, aspectRatio: 1, borderRadius: 100, marginLeft: -3, }}>
                           <Image source={img} style={{width:30, height:30}} />
                        </View>


                      ))
                    }
                  </View>
    )
}

