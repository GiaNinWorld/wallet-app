import React from 'react'
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator, PressableProps } from 'react-native';

import { variants } from './Variant';
import { Container, Title, Content } from './style';

interface iButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'outline' | 'black' | 'transparent';
    style?: PressableProps['style'];
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
            {...rest}
            onPress={onPress}
            disabled={isLoading || disabled}
            style={[buttonStyle.button, style]}
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
