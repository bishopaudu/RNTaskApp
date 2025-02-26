import {View,Text,FlatList,StyleSheet, ScrollView,TouchableOpacity} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import UserDetails from '../components/userdetails';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskProgressCard from '../components/taskProgressCard';
import TaskCard from '../components/taskCard';
import testdata from '../utils/testData';
import { useState,useContext} from 'react';
import TaskModal from '../components/taskModal';
import { TaskContext } from '../context/taskContext';

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const { tasks } = useContext(TaskContext);

    return (
        <SafeAreaView style={styles.container}>
                  <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

            <View style={styles.appbarRow}>
                <UserDetails/>
                <View style={styles.iconRow}>
                    <View style={styles.iconbg}>
                    <AntDesign name="calendar" size={24} color="black" />
                    </View>
                    <View style={styles.iconbg}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View style={styles.progressMenuRow}>
                <Text style={styles.rowMenuStyle}>on Progress(12)</Text>
                <Text style={[styles.rowMenuStyle,{color:"#007BFF"}]}>View more</Text>
            </View>
            <View>
           {/* <TaskProgressCard/>*/}
           <FlatList
           horizontal
           data={testdata}
           renderItem={({item}) => <TaskProgressCard items = {item}/>}
           keyExtractor={(item) => item.id}
           showsHorizontalScrollIndicator={false}
           pagingEnabled
           snapToAlignment='center'
           contentContainerStyle={{gap:10}}
           nestedScrollEnabled={true}
           />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
                <Text style={styles.rowMenuStyle}>Completed</Text>
                <Text style={[styles.rowMenuStyle,{color:"#007BFF"}]}>View more</Text>
            </View>
            <View style={{marginTop:10}}>
            <FlatList
            contentContainerStyle={{gap:10}}
            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <TaskCard items = {item}/>}
            pagingEnabled
            nestedScrollEnabled={true}
            scrollEnabled={false}
            />
            </View>
          
            </ScrollView>
            <TouchableOpacity style={styles.createTaskButton} onPress={() => setModalVisible(true)}>
                <Ionicons name="add" size={30} color="white" />
                <Text style={styles.buttonText}> Create New Task</Text>
       
      </TouchableOpacity>

      {/* Task Modal */}
      <TaskModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f9fbfc',
        padding:20
        
    },
    appbarRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    iconRow:{
        flexDirection:'row',
        gap:10
    },
    mainText:{
        fontSize:14,
        fontFamily:'serif',
        fontWeight:'bold'
    },
    iconbg:{
        //backgroundColor:'lightblue',
        width:40,
        height:40,
       justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        borderColor:'gray',
        borderWidth:1
    },
    progressMenuRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:40
    },
    scrollContainer: {
        flexGrow: 1, 
      },
      createTaskButton: {
        flexDirection: "row",
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: "blue",
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    
      rowMenuStyle:{
        fontSize:20,
        fontWeight:"bold"
      }

})