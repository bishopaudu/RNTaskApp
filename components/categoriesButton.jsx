import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CategoryButton({selectedCategory, setSelectedCategory }) {
    let sortdata = ['Personal', 'Team'];
    const [active, setActive] = useState(sortdata[0]);

    return (
        <View style={styles.mainContainer}>
            {
                sortdata.map((data, index) => {
                    let headerActive =data === selectedCategory;

                    return (
                        <TouchableOpacity
                            key={index}
                            style={[styles.buttonStyle, headerActive && { backgroundColor: "#007BFF" }]}
                            onPress={() => {
                                setSelectedCategory(data);
                                console.log(data);
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {data == 'Personal' ? (  
                                    <AntDesign name="user" size={24} color="black" />
                                ) : (
                                    <AntDesign name="team" size={24} color="black" />
                                )}
                                <Text style={[styles.textStyle, headerActive && styles.activeStyle]}>{data}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: "#eff5f7",
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    buttonStyle: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        flex: 1,
        justifyContent: 'space-between',
        borderRadius: 5,
        alignItems: 'center'
    },
    activeStyle: {
        color: '#FFF'
    },
    textStyle: {
        fontSize: 20,
    }
});
