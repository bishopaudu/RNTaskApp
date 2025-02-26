import { useState } from "react";
import { 
  View, Text, Modal, TextInput, TouchableOpacity, StyleSheet 
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from '@expo/vector-icons';
import CategoryButton from "./categoriesButton";
import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

export default function TaskModal({ visible, onClose }) {
const [selectedCategory, setSelectedCategory] = useState("Personal");
const {addTask} = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleAddTask = () => {
    console.log('calling handleAddTask');
    console.log(taskName, taskDescription, selectedDate, selectedTime,selectedCategory);
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      name: taskName,
      category:selectedCategory,
      description: taskDescription,
      date: selectedDate ? selectedDate.toDateString() : null,
      time: selectedTime ? selectedTime.toLocaleTimeString() : null,
    };
    console.log(newTask);

    addTask(newTask);
    setTaskName("");
    setTaskDescription("");
    setSelectedDate(null);
    setSelectedTime(null);
    onClose();
  };


  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{backgroundColor: "#ccc", width: "50%", height: 5,alignSelf:"center",borderRadius: 10,marginBottom:20}}/>

          <Text style={styles.label}>Task Title</Text>
          <TextInput 
            style={styles.input} 
            value={taskName} 
            onChangeText={setTaskName} 
            placeholderTextColor={"#ccc"}  
            placeholder="Add task name"  
            
          />
                      <CategoryButton selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />


          <Text style={styles.label}>Description</Text>
          <TextInput 
            style={[styles.input,{minHeight: 100, textAlignVertical: "top"}]} 
            value={taskDescription} 
            placeholder="Add Descriptions" 
            placeholderTextColor={"#ccc"} 
            onChangeText={setTaskDescription} 
            multiline={true} 
            numberOfLines={4} 
          />

          {/* Date and Time Inputs */}
          <View style={styles.dateTimeRow}>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity 
                onPress={() => setShowDatePicker(true)} 
                style={styles.dateTimeInput}
              >
                <AntDesign name="calendar" size={20} color="gray" />
                <Text style={selectedDate ? styles.selectedText : styles.placeholderText}>
                  {selectedDate ? selectedDate.toDateString() : "dd/mm/yyyy"}
                </Text>
                
              </TouchableOpacity>
            </View>

            <View style={styles.dateTimeContainer}>
              <Text style={styles.label}>Time</Text>
              <TouchableOpacity 
                onPress={() => setShowTimePicker(true)} 
                style={styles.dateTimeInput}
              >
                <AntDesign name="clockcircleo" size={20} color="gray" />
                <Text style={selectedTime ? styles.selectedText : styles.placeholderText}>
                  {selectedTime ? selectedTime.toLocaleTimeString() : "hh:mm"}
                </Text>
                
              </TouchableOpacity>
            </View>
          </View>

          {/* Date Picker */}
          {showDatePicker && (
            <DateTimePicker 
              value={selectedDate || new Date()} 
              mode="date" 
              display="default" 
              onChange={(_, date) => {
                setShowDatePicker(false);
                if (date) setSelectedDate(date);
              }} 
            />
          )}

          {/* Time Picker */}
          {showTimePicker && (
            <DateTimePicker 
              value={selectedTime || new Date()} 
              mode="time" 
              display="default" 
              onChange={(_, time) => {
                setShowTimePicker(false);
                if (time) setSelectedTime(time);
              }} 
            />
          )}

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={[styles.buttonText, {color:"#007BFF"}]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
              <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end", 
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: "100%",
    minHeight: "50%", 
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
   backgroundColor: "#eff5f7",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  dateTimeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap:5,
    marginTop: 10,
  },
  dateTimeContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  dateTimeInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   backgroundColor: "#eff5f7",
    borderRadius: 5,
    padding: 10,
  },
  placeholderText: {
    color: "#aaa",
  },
  selectedText: {
    color: "#000",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
