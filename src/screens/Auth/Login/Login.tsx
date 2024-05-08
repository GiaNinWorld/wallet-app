import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../../components/Input';
import { Button } from '../../../components/Button';
import { ButtonSocialGoogle } from '../../../components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocial } from '../../../components/ButtonSocial/ButtonSocial';

import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
    ButtonSignUp,
    TitleButtonSignUp,
    ContentForgotPassword,
} from './styles';

export const Login: React.FC = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation()

    const handleCadastro = () => {
        navigation.navigate('Cadastro');
    }

    const handleRecuperarSenha = () => {
        navigation.navigate('RecuperarSenha');
    }

    return (
        <KeyboardAvoidingView
            behavior='position'
            enabled
        >
            <SafeAreaView>
                <Container>

                    <ContentHeader>
                        <Title>Seja bem vindo(a) {"\n"}a Wallet App</Title>

                        <Description>Entrar com</Description>

                        <ViewButton>
                            <ButtonSocialGoogle title='Google' />
                            <ButtonSocial iconName='facebook' title='Facebook' color='white' />
                        </ViewButton>

                    </ContentHeader>

                    <ContentBody>

                        <Input
                            leftIcon
                            autoCorrect={false}
                            autoCapitalize='none'
                            secureTextEntry={false}
                            iconLeftName='mail-outline'
                            keyboardType='email-address'
                            placeholder='Digite seu email'
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

                        <ContentForgotPassword>
                            {/* <ContentButtonForgotPassword onPress={() => { }}>
                                <ContentTitleForgotPassword>Esqueci minha senha</ContentTitleForgotPassword>
                            </ContentButtonForgotPassword> */}
                            <Button
                                title='Esqueci minha senha'
                                variant='transparent'
                                onPress={handleRecuperarSenha}
                                style={{
                                    alignItems: 'flex-end',
                                }}
                            />
                        </ContentForgotPassword>

                        <Button
                            title='Entrar'
                            variant='primary'
                            onPress={() => { }}
                            style={{ marginBottom: 20 }}

                        />

                    </ContentBody>

                    <ContentFooter>
                        <ButtonSignUp onPress={handleCadastro}>
                            <TitleButtonSignUp>Não tem cadastro? <TitleButtonSignUp style={{ color: theme.COLORS.GREEN1, fontFamily: theme.FONTS.URBANIST_BLACK, fontSize: RFValue(16) }}>Registre-se</TitleButtonSignUp> </TitleButtonSignUp>
                        </ButtonSignUp>
                    </ContentFooter>

                </Container>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}
