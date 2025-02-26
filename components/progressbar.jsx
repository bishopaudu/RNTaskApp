import { AnimatedCircularProgress} from "react-native-circular-progress"
import{View,Text,StyleSheet} from 'react-native'
export default function ProgressBar({progressValue}){
    return (
        <View style={styles.mainContainer}>
            <AnimatedCircularProgress
        size={30}
        width={5}
        fill={progressValue}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#ccc"/>
        <Text>
            {progressValue}%
        </Text>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:10
    }
}
)