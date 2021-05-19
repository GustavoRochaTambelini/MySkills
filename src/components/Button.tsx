import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
    title:string;
}

export function Button({ title,...res } : ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.buttom}
            activeOpacity={0.7}
            {...res}
        >
            <Text style={styles.textButtom}>{ title }</Text>
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    
    buttom:{
        backgroundColor:'#6959CD',
        padding:15,
        borderRadius:7,
        alignItems:'center',
        marginTop:20
        
    },
    textButtom:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold'
    }
});