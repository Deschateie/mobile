import React, { Component } from 'react'
import { View, TouchableHighlight, Text, Image, StyleSheet, } from 'react-native';
import { Actions } from 'react-native-router-flux';


const logo = require('../images/logo.png');
const home = require('../images/home.png');

export default class Main extends Component {


    render() {
        return (
            <View style={styles.mainView}>

                <View style={styles.menu}>
                    <TouchableHighlight style={styles.buttonHeader} onPress={this.onPress} >
                        <Text style={styles.txtBtn}> Eventos </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={this.onPress} >
                        <Text style={styles.txtBtn}> Cadastrar-se </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonHeader} onPress={() => Actions.login() } >
                        <Text style={styles.txtBtn}> Login </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={this.onPress} >
                        <Text style={[styles.txtBtn, styles.btnGreen]}> Converse agora </Text>
                    </TouchableHighlight>

                </View>

                <View style={styles.div1}>
                    <Image style={{ width: 250, height: 70 }} source={logo} />
                    <Text style={styles.txtLogo}>O deschateie é uma plataforma que visa em apoiar ,
                            tratar e aproximar pessoas que estão em depressão ou anciedade</Text>
                </View>
                <View style={styles.div2}>
                    <Text style={styles.txtT1}>Pessoas em primeiro lugar</Text>
                    <Text style={styles.txtT2}>Bem estar de usuários é a nossa motivação</Text>
                    <Text style={styles.txtT2}>No Deschateie você nunca esta só.</Text>
                    <Image style={styles.imgDiv2} source={home} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    txtLogo: {
        color: "#fff",
        width: 320,
        marginTop: 20,
        fontSize: 18
    },
    logo: {},
    div1: {
        flex: 1,
        backgroundColor: '#058F69',
        padding: 15

    },
    div2: {
        padding: 15,
        flex: 1,
        backgroundColor: '#fff'
    },
    imgDiv2: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    menu: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#b9d696',
        alignItems: 'center',
    },
    buttonHeader: {
    },
    txtBtn: {
        color: '#fff',

    },
    btnGreen: {
        backgroundColor: '#182822',
        padding: 10,
        borderRadius: 4
    },
    txtT1: {
        fontSize: 20
    },
    txtT2: {
        fontSize: 16,
        color: '#484848',

    }
})

//#b9d696
//#182822