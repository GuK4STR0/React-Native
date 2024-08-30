import React from 'react';
import { StyleSheet, TextInput, SafeAreaView, View, Text} from 'react-native';
import CalcularIdade from './src/CalcularIdade';

const [nascimento, setNascimento] = useState('');
const [resultado, setResultado] = useState(null);

export default function App() {
  return (
    <View>
      <Text style={styles.title}>Grupo Etário</Text>
      <Input/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginTop:16,
    paddingVertical:8,
    borderWidth: 3,
    borderColor: '#1C1C1C',
    borderRadius: 6,
    backgroundColor:'#9ACD32',
    color:'#1C1C1C',
    textAlign:'center',
    fontSize:35,
    fontWeight: 'bold'
  },
});
