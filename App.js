import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <Image style={styles.container}
    source={{uri:'https://adimax.com.br/wp-content/uploads/2022/06/como-adestrar-cachorro-filhote.jpg'}}
    
    
    />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
});
