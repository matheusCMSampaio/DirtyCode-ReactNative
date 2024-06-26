import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Components/MyStack';
import MyTabs from './Components/MyTabs';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
