import React, { useState } from 'react';
import {TextInput, StyleSheet, SafeAreaView } from 'react-native';


const CalcularIdade = () => {
    const nascimento = new Date(DataNasc);
    const dataAtual = new Date();

    const ano = dataAtual.getFullYear() - nascimento.getFullYear();
    const mes = dataAtual.getMonth() - nascimento.getMonth();
    const dia = dataAtual.getDate() - nascimento.getDate();

    let calcularAno = ano;
    let calcularMes = mes < 0 ? mes + 12 : mes;
    let calcularDia = dia < 0 ? dia + 30 : dia;

    if (days < 0) calcularMes--;
    if (months < 0 || (mes === 0 && dia < 0)) calcularAno--;

    let categoria = '';
    if (calcularAno <= 19) {
      categoria = 'Jovens';
    } else if (calcularAno >= 20 && calcularAno <= 59) {
      categoria = 'Adultos';
    } else {
      categoria = 'Idosos';
    };

    setResultado({ano:calcularAno, mes:calcularMes, dia:calcularDia, categoria:categoria});

    return(
    <SafeAreaView>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setNascimento(text)} 
            value={nascimento}
            placeholder='AAAA-MM-DD'
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input:{
        height:40,
        margin:12,
        borderWidth: 3,
        borderColor: '#1C1C1C',
        padding:10
    },
})

export default CalcularIdade;