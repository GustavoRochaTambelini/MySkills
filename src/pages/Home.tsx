import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform, 
    FlatList 
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/skillCard';

interface SkillData {
    id: string,
    nome:string
}

export function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [saudacao, setSaudacao] = useState('');

    function handleAddNewSkill(){ 
        const data = {
            id: String(new Date().getTime()),
            nome: newSkill
        }      
        setMySkills(oldSkills => [...oldSkills, data]);           
    }

    function handleRemoveSkill(id:string){
        setMySkills(oldSkills => oldSkills.filter(
            skill => skill.id != id
        ));
    }

    useEffect(()=>{
        const horaAtual = new Date().getHours();

        if(horaAtual >= 6 && horaAtual < 12){
            setSaudacao('Good morning');
        }else if(horaAtual >= 12 && horaAtual < 18){
            setSaudacao('Good afternoon');
        }else{
            setSaudacao('Good night');
        }

    },[]);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Gustavo</Text>
            <Text style={styles.saudacao}>
                {saudacao}
            </Text>
            <TextInput 
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor='#555'
                onChangeText = {setNewSkill}
            />

            <Button title="Add" onPress ={handleAddNewSkill}/>
           
            <Text style={[styles.title, { marginVertical:40 }]}>My Skills</Text>

            <FlatList 
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard 
                        skill={item.nome}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
            />

        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121015',
        paddingVertical:50,
        paddingHorizontal:20
    },
    title:{
        color:'#FFF',
        fontSize:24,
        fontWeight: 'bold'
    },
    input:{
        backgroundColor:'#363636',
        marginTop:20,
        color:'#FFF',
        fontSize:18,
        padding: Platform.OS == 'ios' ? 20 : 10,
        borderRadius:5
    },
    saudacao:{
        color:'#FFF'
    }
});