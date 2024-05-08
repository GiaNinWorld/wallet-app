import { Pressable } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding: ${RFValue(15)}px;
    padding-top: ${RFValue(30)}px;
`;

export const ContentHeader = styled.View`
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(25)}px;
    margin-top: ${RFValue(40)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM}
`;

export const Description = styled.Text`
    font-size: ${RFValue(35)}px;
    margin-top: ${RFValue(40)}px;
    margin-bottom: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.URBANIST_BLACK};
`;

export const ContentBody = styled.View`
    margin-bottom: ${RFValue(20)}px;
`;

export const ContentFooter = styled.View`
    margin-top:  ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
`;

export const ButtonFooter = styled(Pressable)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TitleFooter = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.URBANIST_MEDIUM};
`;
