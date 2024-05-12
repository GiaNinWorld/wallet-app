import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

export const Container = styled.View`
    padding: ${RFValue(15)}px;
    padding-top: ${RFValue(30)}px;
`;

export const ContentHeader = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ContentBody = styled.View``;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(25)}px;
    margin-top: ${RFValue(40)}px;;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: ${RFValue(40)}px;
    margin-bottom: ${RFValue(10)}px;
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ViewButton = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
`;


export const ContentFooter = styled.View`
    width: 100%;
`;

export const ButtonSignUp = styled(Pressable)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TitleButtonSignUp = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.URBANIST_MEDIUM};
    margin-top: ${RFValue(60)}px;
`;

export const ContentForgotPassword = styled.View`
    width: 100%;
`;

/* export const ContentButtonForgotPassword = styled(Pressable)`
    align-items: center;
    justify-content: flex-end;
`; */

/* export const ContentTitleForgotPassword = styled.Text`
    align-items: flex-end;
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.URBANIST_MEDIUM};
`; */
