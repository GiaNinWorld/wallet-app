import React from 'react'
import { Button, IconGoogle, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'

import PngGoogle from '../../assets/google.png'

interface Props extends RectButtonProps {
    title: string
}

const ButtonSocialGoogle: React.FC<Props> = ({ title, ...rest }) => {
    return (

        <Button {...rest}>

            <IconGoogle
                source={PngGoogle}
                resizeMode="contain"
            />
            <Title>{title}</Title>
        </Button>

    )
}

export { ButtonSocialGoogle };
