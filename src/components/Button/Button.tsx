import React from 'react'
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator, PressableProps } from 'react-native';

import { variants } from './Variant';
import { Container, Title, Content } from './style';

interface iButtonProps {
    title: string;
    disabled?: boolean;
    isLoading?: boolean;
    onPress: () => void;
    style?: PressableProps['style'];
    iconName?: keyof typeof AntDesign.glyphMap;
    variant?: 'primary' | 'outline' | 'black' | 'transparent';
}

const Button: React.FC<iButtonProps> = ({
    title,
    onPress = () => { },
    iconName,
    isLoading,
    disabled,
    variant = 'primary',
    style,
    ...rest
}) => {

    const { COLORS } = useTheme();
    const buttonVariant = variants[variant];
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled

    return (
        <Container
            onPress={onPress}
            disabled={isLoading || disabled}
            style={[buttonStyle.button, style]}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator
                    color={COLORS.GRAY1}
                />
            ) : (
                <Content>
                    {iconName && (
                        <AntDesign
                            size={25}
                            name={iconName}
                            color={buttonStyle.icon.color}
                            style={{
                                marginRight: 15,
                            }}
                        />
                    )}
                </Content>
            )}
            <Title
                style={buttonStyle.title}
            >
                {title}
            </Title>
        </Container>
    )
}

export { Button }
