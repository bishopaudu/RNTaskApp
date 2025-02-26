import { TaskProvider } from './context/taskContext';
import Navigation from './navigation';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
    <><StatusBar style="auto" /><TaskProvider><Navigation /></TaskProvider></>
  );
}

