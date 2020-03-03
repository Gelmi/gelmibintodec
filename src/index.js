import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export default function src() {
    const [value, changeValue] = React.useState('')

  return (
    <View style={styles.container}>
        <Text></Text>
        <TextInput 
            style={styles.input}
            value={value}  
            onChangeText={text => changeValue(text)}
            maxLength={8}  
            autoCompleteType="cc-number"
            keyboardType="number-pad"
            placeholder="00000000"
        />
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={styles.buttonText}>JORGE</Text>
        </TouchableOpacity>
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
    input: {
        height: 50,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 10        
    },
    button:{
        backgroundColor: '#4db6ac',
        width: '30%',
        height: 40,
        borderRadius: 4,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff'
    }
  });
  
