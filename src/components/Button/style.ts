import styled from "styled-components/native";
import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(Pressable)`
    width: 100%;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${({ theme }) => theme.COLORS.GREEN1};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text``;
