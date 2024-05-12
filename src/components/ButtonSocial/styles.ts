import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Fontisto } from '@expo/vector-icons';

export const Button = styled.TouchableOpacity.attrs(() => ({
    android: css`
    elevation: 11;
  `,
    ios: css`
    shadowColor: #000;
    shadowOffset: {
      width: 1;
      height: 3;
    };
    shadowOpacity: 0.3; /* Corrected to be unitless */
    shadowRadius: ${RFValue(5)}px; /* Corrected with pixels */
  `,
}))`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
  width: ${RFValue(140)}px;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(5)}px;
  box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  ${(props: { android: any; }) => props.android && props.android};
  ${(props: { ios: any; }) => props.ios && props.ios};
`;

export const IconSocial = styled(Fontisto)`
    font-size: ${RFValue(25)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    margin-left: ${RFValue(10)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
