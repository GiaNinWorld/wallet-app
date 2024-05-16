import { Platform } from 'react-native';
import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: ${RFValue(10)}px;
    justify-content: space-between;
    margin-top: ${Platform.OS === 'ios' ? 0 : RFValue(25)}px;
`;

export const ContentHeader = styled.View`
    padding-left: ${RFValue(10)}px;
`;

export const Avatar = styled.Image`
    width: ${RFValue(56)}px;
    height: ${RFValue(56)}px;
    border-radius: ${RFValue(30)}px;
    margin-right: ${RFValue(10)}px;
`;

export const AppName = styled.Text`
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(29.8)}px;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.URBANIST_BLACK}
`;

export const Status = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.COLORS.GREEN1};
    font-family: ${({ theme }) => theme.FONTS.URBANIST_MEDIUM}
`;
