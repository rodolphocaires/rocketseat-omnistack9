import React, { useState, useEffect } from 'react';
import { ScrollView, AsyncStorage, Image, StyleSheet, SafeAreaView } from 'react-native';

import logo from '../assets/logo.png';

import SpotList from '../components/SpotList';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(_techs => {
            const techsArray = _techs.split(',').map(t => t.trim());
            setTechs(techsArray);
        })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <ScrollView>
                {techs.map(tech => (
                    <SpotList key={tech} tech={tech} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,
    }
})