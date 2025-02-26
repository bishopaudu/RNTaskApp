import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import team_icon from "../assets/app_assets/team_icon.png";
import Divider from "./divider";
import ProgressBar from "./progressbar";
import ProfilePicStack from "./profilePicStack";


export default function TaskProgressCard({items}) {
    const {width} = Dimensions.get('screen')
    return (  
        <View style={[styles.mainContainer, {width: width * 0.7, overflow: "hidden", paddingTop: 20, gap: 20}]}>
            <View style={{paddingHorizontal: 20,}}>
            <View style={styles.detailsRow}>
                <View>
                <Text style={styles.title}>{items.title}</Text>
                    <Text style={styles.taskTitle}>{items.date}</Text>
                </View>
                <View style={styles.iconBg}>
                    <Image source={team_icon} style={{ width: 30, height: 30 }} />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
            <Divider/>
            </View>
            <View style={{ marginTop:15 }}>
                <Text style={{color:"#ccc",fontSize:16}}>Description :</Text>
                <View style={{marginTop:10}}>
                <Text style={styles.description} numberOfLines={1} 
              ellipsizeMode="tail">{items.description}</Text>
              </View>
                <View style={styles.progressDetails}>
                    <View>
                        <Text style={styles.subtitle}>Teams :</Text>
                        <ProfilePicStack/>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Progress :</Text>
                        <ProgressBar progressValue={items.progress}/>
                    </View>
                </View>
            </View>

            </View>
           
            <View style={{backgroundColor:items.category == "team" ? "#b7894c" : "lightblue", width: '100%', height: 6, marginTop:10}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "white",
        borderRadius: 20,
        marginTop: 20,
    },
    detailsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
         //padding: 20,
    },
    taskText: {
        fontWeight: "bold",
    },
    taskDate: {
        fontSize: 14,
    },
    iconBg: {
        backgroundColor: "#b7894c",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    progressDetails:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
      },
      description: {
        fontSize: 16,
        color: "#666",
        fontWeight: "bold",
      },
      subtitle:{
        fontSize:16,
        color:"#ccc"
      }
});
