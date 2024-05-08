import React from 'react'
import { useTheme } from 'styled-components';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from "react-native-responsive-fontsize";

import Input from '../../../components/Input'
import { Button } from '../../../components/Button'
import {
    Container,
    ContentHeader,
    Title,
    Description,
    ContentBody,
    ContentFooter,
    ButtonFooter,
    TitleFooter,
} from './style'

export const Cadastro = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <KeyboardAvoidingView
            behavior='position'
            enabled
        >
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo(a) {"\n"}a Wallet App</Title>
                    <Description>CADASTRO</Description>
                </ContentHeader>

                <ContentBody>
                    <Input
                        leftIcon
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='default'
                        placeholder='Digite seu nome'
                        iconLeftName='person-outline'
                    />

                    <Input
                        leftIcon
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        placeholder='Digite seu email'
                        iconLeftName='mail-outline'
                    />

                    <Input
                        leftIcon
                        rightIcon
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='default'
                        placeholder='Digite sua senha'
                        iconLeftName='lock-closed-outline'
                    />

                    <Button
                        title='Cadastrar'
                        onPress={() => { }}
                        style={{
                            marginTop: RFValue(50),
                        }}
                    />

                </ContentBody>

                <ContentFooter>
                    <ButtonFooter
                        onPress={handleLogin}
                    >
                        <TitleFooter>Já possui conta? <TitleFooter style={{ color: theme.COLORS.GREEN1, fontFamily: theme.FONTS.URBANIST_BLACK, fontSize: RFValue(16) }}>Faça login</TitleFooter></TitleFooter>
                    </ButtonFooter>
                </ContentFooter>
            </Container>
        </KeyboardAvoidingView>
    )
}
