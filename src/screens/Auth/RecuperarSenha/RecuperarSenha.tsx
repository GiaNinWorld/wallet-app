import React from 'react';
import { useTheme } from 'styled-components';
import Input from '../../../components/Input';
import { KeyboardAvoidingView } from 'react-native';
import { Button } from '../../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    ContentHeader,
    Title,
    Description,
    ContentBody,
    ContentFooter,
    ButtonGoBack
} from './style'

export const RecuperarSenha = () => {
    const theme = useTheme();
    const navigation = useNavigation()

    const handleBackLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <KeyboardAvoidingView
            behavior='position'
            enabled
        >
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo(a) {'\n'} a App Wallet</Title>
                    <Description>Recuperar Senha</Description>
                </ContentHeader>

                <ContentBody>
                    <Input
                        leftIcon
                        iconLeftName='mail-outline'
                        placeholder='Digite seu email'
                    />

                    <Button
                        title='Recuperar'
                        onPress={() => { }}
                        style={{
                            marginTop: 40
                        }}
                    />

                    <ContentFooter>
                        <ButtonGoBack onPress={handleBackLogin}>
                            <Title style={{
                                fontSize: RFValue(15),
                                color: theme.COLORS.GRAY3,
                                fontFamily: theme.FONTS.URBANIST_MEDIUM
                            }}>Não quero recuperar minha senha.

                                <Title style={{
                                    color: theme.COLORS.GREEN1,
                                    fontFamily: theme.FONTS.URBANIST_BLACK,
                                    fontSize: RFValue(16)
                                }}>Voltar</Title>

                            </Title>
                        </ButtonGoBack>
                    </ContentFooter>
                </ContentBody>
            </Container>
        </KeyboardAvoidingView>
    )
}
