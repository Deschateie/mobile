import React, { Component } from 'react'
import { View, TouchableHighlight, Text, Image, StyleSheet, } from 'react-native';

export default class Main extends Component {


    render() {
        return (
            <View style={styles.mainView}>

                <View style={styles.header}>


                </View>

                <View style={styles.dados}>
                    <View style={styles.rowInfo}>
                        <Text style={styles.label}>Nome</Text>
                        <Text style={styles.textInfo}>Joe Dude</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.textInfo}>joedude@email.com</Text>
                    </View>
                </View>

                <View style={styles.widgets}></View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 15,
    },
    rowInfo: {
        marginBottom: 8
    },
    label: {
        color: '#ccc',
        fontSize: 12
    },
    textInfo: {
        color: '#333',
    }

})