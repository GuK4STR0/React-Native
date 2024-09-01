import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

const CalcularIdade= ()=>{
const [nascimento, setNascimento] = useState('');
const [resultado, setResultado] = useState(ano=0,mes=0,dia=0,categoria='');

const CalculadoraIdade = () => {
    
    if (!nascimento) {
    alert('Por favor, insira uma data válida.');
    return;
  }
    const nascimento = new Date(nascimento);
    const dataAtual = new Date();

    let ano = dataAtual.getFullYear() - nascimento.getFullYear();
    let mes = dataAtual.getMonth() - nascimento.getMonth();
    let dia = dataAtual.getDate() - nascimento.getDate();

    if (days < 0) {
      mes--;
      days += 30;
    }
    if (months < 0){
      ano--;
      mes += 12;
    }

    let categoria = '';
    if (calcularAno <= 19) {
      categoria = 'Jovens';
    } else if (calcularAno >= 20 && calcularAno <= 59) {
      categoria = 'Adultos';
    } else {
      categoria = 'Idosos';
    };

    setResultado({ano: ano, mes: mes, dia: dia, categoria:categoria});

    return(
    <SafeAreaView style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setNascimento(text)} 
            value={nascimento}
            placeholder='AAAA-MM-DD'
            />
            <Button title="Calcular sua Idade" onPress={CalculadoraIdade} />
              <View style={styles.resultContainer}>
                <Text style={styles.resultText}>
                  Idade: {resultado.ano} anos, {resultado.mes} meses, e {resultado.dia} dias
                </Text>
                <Text style={styles.resultText}>Categoria: {resultado.categoria}</Text>
              </View>
        </SafeAreaView>
    );
};
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 'auto',
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
  },
})

export default CalcularIdade;