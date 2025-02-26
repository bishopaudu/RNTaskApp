import { View, StyleSheet, Text } from "react-native";
import Divider from "./divider";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfilePicStack from "./profilePicStack";

export default function TaskCard({items}) {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.borderStrip,{backgroundColor: items.category == 'team'?"#b7894c":'lightblue'}]} />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <View style={styles.detailsRow}>
          <View>
            <Text style={styles.title}>{items.name}</Text>
            <Text style={styles.description} numberOfLines={1} 
              ellipsizeMode="tail">{items.description}</Text>
          </View>
          <Ionicons name="checkmark-circle" size={24} color="blue" />
        </View>

        <Divider />

        <View style={styles.footerRow}>
          <Text style={styles.date}>{items.date}</Text>
          <ProfilePicStack />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "white",
    overflow: "hidden", 
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  borderStrip: {
    width: 10, 
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: "100%", 
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
});
