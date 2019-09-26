import explorar from './assets/explorar.png';

import { StyleSheet, Image, View, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image source ={explorar}/>
    </View>


    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
        
  },
});
