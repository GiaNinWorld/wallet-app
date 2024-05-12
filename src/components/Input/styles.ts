import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    height: ${RFValue(55)}px;
    margin-bottom: ${RFValue(5)}px;
`;

export const IconContainer = styled.View`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    justify-content: center;
    align-items: center;

    /* margin-right: ${RFValue(3)}px;
    border-top-left-radius: ${RFValue(5)}px;
    border-bottom-left-radius: ${RFValue(5)}px; */
    background-color: ${({ theme }) => theme.COLORS.GRAY5};
`;

export const InputContainer = styled.TextInput`
    flex: 1;
    font-size: ${RFValue(14)}px;
    padding: 0 ${RFValue(10)}px;
    /* border-top-left-radius: ${RFValue(5)}px;
    border-bottom-left-radius: ${RFValue(5)}px;
    border-top-right-radius: ${RFValue(5)}px;
    border-bottom-right-radius: ${RFValue(5)}px; */
    background-color: ${({ theme }) => theme.COLORS.GRAY5};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
