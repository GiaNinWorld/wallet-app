import styled from "styled-components/native";
import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding: ${RFValue(15)}px;
    padding-top: ${RFValue(30)}px;
`;

export const ContentHeader = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(25)}px;
    margin-top: ${RFValue(40)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(30)}px;
    margin-bottom: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.URBANIST_BLACK};
`;

export const ContentBody = styled.View`
    margin-top: ${RFValue(80)}px;
`;

export const ContentFooter = styled.View`
    margin-top: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
`;

export const ButtonGoBack = styled(Pressable)`
    align-items: center;
    justify-content: center;
`;
