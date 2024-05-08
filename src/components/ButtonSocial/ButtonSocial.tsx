import React from 'react'
import { Button, IconSocial, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons';

interface Props extends RectButtonProps {
    title: string;
    iconName: React.ComponentProps<typeof Fontisto>["name"];
    color: string;
}

const ButtonSocial: React.FC<Props> = ({ title, iconName, color, ...rest }) => {
    return (

        <Button {...rest}>

            <IconSocial name={iconName} color={color} />
            <Title>{title}</Title>
        </Button>

    )
}

export { ButtonSocial };
