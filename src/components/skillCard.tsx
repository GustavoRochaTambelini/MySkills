import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface SkillProps extends TouchableOpacityProps{
    skill:string
}

export function SkillCard({ skill, ...res }: SkillProps){
    return(
        <TouchableOpacity 
            style={styles.buttomSkill}
            {...res}
        >
             <Text style={styles.textSkill}>
                 {skill}
             </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttomSkill:{
        backgroundColor:'#363636',
        padding:15,
        alignItems:'center',
        borderRadius: 30,
        marginVertical:10  
    },
    textSkill:{
        color:'#FFF',
        fontSize:20,
        fontWeight:'bold'
    }
});