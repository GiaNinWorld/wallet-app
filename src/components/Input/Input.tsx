import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { RFValue } from "react-native-responsive-fontsize";
import { TextInputProps, TouchableOpacity } from 'react-native';

import { Container, InputContainer, IconContainer } from './styles'

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconLeftName?: keyof typeof Ionicons.glyphMap;
    iconSize?: number;
    iconColor?: string;
    secureTextEntry?: boolean;
}

const Input: React.FC<InputProps & TextInputProps> = ({
    rightIcon,
    leftIcon,
    iconLeftName,
    iconSize = 25,
    iconColor,
    secureTextEntry = false,
    ...rest }) => {
    const { COLORS } = useTheme();

    const [secury, setSecury] = useState(secureTextEntry);

    return (
        <Container>
            {leftIcon && (
                <IconContainer
                    style={{
                        marginRight: RFValue(5),
                        borderTopLeftRadius: RFValue(5),
                        borderBottomLeftRadius: RFValue(5),

                    }}
                >
                    <Ionicons
                        name={iconLeftName}
                        size={iconSize}
                        color={iconColor || COLORS.GRAY2}
                    />
                </IconContainer>
            )}

            <InputContainer
                secureTextEntry={secury}
                underLineColorAndroid='transparent'
                style={leftIcon && rightIcon ? {}
                    : leftIcon ? {
                        borderTopRightRadius: RFValue(5),
                        borderBottomRightRadius: RFValue(5),
                    } : rightIcon ? {
                        borderTopLeftRadius: RFValue(5),
                        borderBottomLeftRadius: RFValue(5),
                    } : {
                        borderTopLeftRadius: RFValue(5),
                        borderBottomLeftRadius: RFValue(5),
                        borderTopRightRadius: RFValue(5),
                        borderBottomRightRadius: RFValue(5),
                    }}
                {...rest}
            />

            {rightIcon && (
                <TouchableOpacity onPress={() => setSecury(!secury)}>
                    <IconContainer
                        style={{
                            marginLeft: RFValue(5),
                            borderTopRightRadius: RFValue(5),
                            borderBottomRightRadius: RFValue(5),
                        }}
                    >
                        <Ionicons
                            name={secury ? 'eye-outline' : 'eye-off-outline'}
                            size={iconSize}
                            color={iconColor || COLORS.GRAY2}
                        />
                    </IconContainer>
                </TouchableOpacity>
            )}
        </Container>
    )
}

export default Input
