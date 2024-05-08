import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins";

import { Anton_400Regular } from "@expo-google-fonts/anton";
import { Bangers_400Regular } from "@expo-google-fonts/bangers";
import { Michroma_400Regular } from "@expo-google-fonts/michroma";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";
import { ArchivoBlack_400Regular } from "@expo-google-fonts/archivo-black";
import { LeagueGothic_400Regular } from "@expo-google-fonts/league-gothic";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { DMSans_400Regular, DMSans_700Bold, DMSans_500Medium } from "@expo-google-fonts/dm-sans";
import { Urbanist_300Light, Urbanist_500Medium, Urbanist_900Black } from "@expo-google-fonts/urbanist";
import { Fredoka_400Regular, Fredoka_500Medium, Fredoka_600SemiBold } from "@expo-google-fonts/fredoka";
import { LexendExa_400Regular, LexendExa_600SemiBold, LexendExa_800ExtraBold, LexendExa_900Black } from "@expo-google-fonts/lexend-exa";
import { Antonio_300Light, Antonio_400Regular, Antonio_500Medium, Antonio_600SemiBold, Antonio_700Bold } from '@expo-google-fonts/antonio';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_800ExtraBold, Montserrat_900Black } from "@expo-google-fonts/montserrat";

import theme from '../src/styles/theme';
import { Routes } from './routes'

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSans_700Bold,
        DMSans_500Medium,
        DMSerifDisplay_400Regular,
        Urbanist_300Light,
        Urbanist_500Medium,
        Urbanist_900Black,
        Anton_400Regular,
        Antonio_300Light,
        Antonio_400Regular,
        Antonio_500Medium,
        Antonio_600SemiBold,
        Antonio_700Bold,
        ArchivoBlack_400Regular,
        Bangers_400Regular,
        BebasNeue_400Regular,
        Fredoka_400Regular,
        Fredoka_500Medium,
        Fredoka_600SemiBold,
        LeagueGothic_400Regular,
        LexendExa_400Regular,
        LexendExa_600SemiBold,
        LexendExa_800ExtraBold,
        LexendExa_900Black,
        LuckiestGuy_400Regular,
        Michroma_400Regular,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
    })

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    if (!fontsLoaded) {
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <StatusBar
                    style="dark"
                    translucent
                    backgroundColor="transparent"
                />
                <Routes />
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App;
