import React from 'react'
import { View, TouchableHighlight, Text, Image, StyleSheet, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const logo = require('../images/logo.png');

const Login = props => {

    return (
        <View style={styles.mainView}>
            <View style={styles.logo}>
                <Image style={{ width: 250, height: 70 }} source={logo} />
            </View>
            <View style={styles.form}>
                <View style={{ flex: 1, padding: 10 }}>

                    <View style={{ flex: 2 }}>

                        <View style={styles.formInput}>
                            <TextInput
                                value={props.email}
                                onChangeText={texto => props.modificaEmail(texto)}
                                style={{ fontSize: 20, height: 45 }}
                                placeholder='E-mail'
                                placeholderTextColor='#ccc'
                            />
                        </View>
                        <View style={[styles.formInput, { marginTop: 10 }]}>
                            <TextInput
                                onChangeText={texto => props.modificaSenha(texto)}
                                value={props.senha}
                                style={{ fontSize: 20, height: 45 }}
                                placeholder='Senha'
                                placeholderTextColor='#ccc'
                            />
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Button title="Acessar" color='#115E54' onPress={() => false} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(Login);






const styles = StyleSheet.create({


    mainView: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flex: 3
    },
    formInput: {
        borderRadius: 5, borderWidth: 1, borderColor: '#b9d696'
    }
})