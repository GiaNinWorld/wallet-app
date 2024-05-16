import React from 'react';

import {
    Container,
    ContentHeader,
    Avatar,
    AppName,
    Status,
} from './styles';

export const Header = () => {
    return (
        <Container>
            <ContentHeader>
                <AppName>Wallet</AppName>
                <Status>Ativo</Status>
            </ContentHeader>
            <Avatar source={{ uri: 'https://github.com/GiaNinWorld.png' }} />
        </Container>
    )
}
