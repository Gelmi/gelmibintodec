import React, { Fragment, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, StatusBar } from 'react-native';

// import { Container } from './styles';

export default function src() {
    const [value, changeValue] = React.useState('');
    const [decimal, changeDecimal] = React.useState(0);
    const [warning, handleWarning] = React.useState(false);
    const [full, handleFull] = React.useState(false);
    const [help, handleHelp] = React.useState(false);

    const toBin = (value) => {
        let decimal = 0;
        var i;
        if(value.length == 8 && warning == false){
            for(i = 0; i<8; i++){
                let digit = value.charAt(i);
                decimal = decimal + (digit*(Math.pow(2,7-i)));
            }
            changeDecimal(decimal);
        }
    }

    const checkNum = (stringo) => {
        for(var j = 2; j<10; j++){
            if(stringo.includes(j)){
                handleWarning(true);
                break;
            } else { 
                handleWarning(false);
            }
        }
    }

    const checkFull = (stringo) => {
        if (stringo.length==8 && warning==false){
            handleFull(true);
        } else {
            handleFull(false);
        }
    }

/*  useEffect(() => {
        for(var j = 2; j<10; j++){
            if(value.includes(j)){
                handleWarning(true);
            } else { 
                handleWarning(false);
            }
        }
    },[value]);
 */

    useEffect(() => {
        checkFull(value);
    })   

  return (
    <View style={styles.container}>
        
        <View style={{ backgroundColor: '#4db6ac', height: 60, width: "100%", position: 'absolute', top: 0, marginTop: StatusBar.currentHeight, justifyContent: 'center', elevation: 8}}>
            <Text style={{ color: 'black',fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>Binário para Decimal</Text>
        </View>
        <Text>
            Digite o numero binário (8 digitos):
        </Text>
        <TextInput 
            style={warning ? styles.entryInputWarning : styles.entryInput}
            value={value}  
            onChangeText={text => (changeValue(text), checkNum(text))}
            maxLength={8}  
            autoCompleteType="cc-number"
            keyboardType="number-pad"
            placeholder="00000000"
        />
        {warning ? <Text style={{color: 'red', fontSize: 12}}>Voce digitou algo diferente de 0 ou 1!</Text> : <Fragment/>}
        <TouchableOpacity
            style={full ? styles.button : styles.buttonGrey}
            onPress={() => toBin(value)}
           disabled={full ? false : true}
        >
            <Text style={styles.buttonText}>Converter</Text>
        </TouchableOpacity>
        <Text>
            Resultado: 
        </Text>
        <TextInput 
            style={styles.resultInput}
            value={String(decimal)}  
            autoCompleteType="cc-number"
            keyboardType="number-pad"
            placeholder="00000000"
            editable={false}
        />
        <TouchableOpacity
            style={{ position: "absolute", bottom: "1%" }}
            onPress={() => handleHelp(true)}
        >
            <Text>Ajuda</Text>
        </TouchableOpacity>
        { help ? 
            <View style={{ position: "absolute", width: "100%", height: "100%", elevation: 9, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ backgroundColor: "black", position: "absolute", width: "100%", height: "100%", elevation: 9, opacity: 0.6 }}/>
                <View
                    
                    style={{ width:'70%', height: '20%', position:"absolute", elevation: 10, backgroundColor:'#fafafa', justifyContent: 'center', alignItems: 'center', borderRadius: 3, }}
                >
                    <Text
                        style={{ textAlign: 'center', width: '70%' }}
                    >Voce precisa digitar os 8 digitos para conseguir converter o número</Text>
                    <TouchableOpacity
                        style={{position: 'absolute', top: "4%", right: "3%", width: '6%'}}
                        onPress={() => handleHelp(false)}
                    >
                        <Text style={{ color: 'grey', textAlign: 'center'}}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
            :
            <Fragment/>
        }
        
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
    entryInput: {
        height: 50,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 10,
        marginTop: 5      
    },
    entryInputWarning: {
        height: 50,
        width: '80%',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 10,
        marginTop: 5           
    },
    button:{
        backgroundColor: '#4db6ac',
        width: '30%',
        height: 40,
        borderRadius: 4,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        elevation: 8
    },
    buttonGrey:{
        backgroundColor: 'grey',
        width: '30%',
        height: 40,
        borderRadius: 4,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        elevation: 2
    },
    buttonText: {
        color: '#fff'
    },
    buttonTextGrey: {
        color: '#fff'
    },
    resultInput: {
        height: 50,
        width: '40%',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 10,
        color: 'gray',
        marginTop: 5      
    },
  });
  
