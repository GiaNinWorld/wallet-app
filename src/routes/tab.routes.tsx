import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import theme from '../styles/theme';
import { Config } from '../screens/Tab/Config';
import { Carteira } from '../screens/Tab/Carteira';
import { Relatorio } from '../screens/Tab/Relatorio';
import { Notificacao } from '../screens/Tab/Notificacao';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName='Carteira'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: theme.COLORS.GRAY3,
                tabBarActiveTintColor: theme.COLORS.GREEN1,
                tabBarStyle: {
                    paddingBottom: RFValue(7),
                    backgroundColor: theme.COLORS.GRAY6,
                },

            }}
        >
            <Screen
                name='Carteira'
                component={Carteira}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: RFValue(7),
                            }}
                        >
                            <Ionicons
                                name={focused ? 'card' : 'card-outline'}
                                color={focused ? theme.COLORS.GREEN1 : theme.COLORS.GRAY3}
                                size={RFValue(23)}
                            />
                        </View>
                    )
                }}
            />
            <Screen
                name='Relatorio'
                component={Relatorio}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: RFValue(7),
                            }}
                        >
                            <Ionicons
                                name={focused ? 'bar-chart' : 'bar-chart-outline'}
                                color={focused ? theme.COLORS.GREEN1 : theme.COLORS.GRAY3}
                                size={RFValue(23)}
                            />
                        </View>
                    )
                }}
            />
            <Screen
                name='Notificacao'
                component={Notificacao}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: RFValue(7),
                            }}
                        >
                            <Ionicons
                                name={focused ? 'notifications' : 'notifications-outline'}
                                color={focused ? theme.COLORS.GREEN1 : theme.COLORS.GRAY3}
                                size={RFValue(23)}
                            />
                        </View>
                    )
                }}
            />
            <Screen
                name='Config'
                component={Config}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: RFValue(7),
                            }}
                        >
                            <Ionicons
                                name={focused ? 'ellipsis-vertical' : 'ellipsis-vertical-outline'}
                                color={focused ? theme.COLORS.GREEN1 : theme.COLORS.GRAY3}
                                size={RFValue(23)}
                            />
                        </View>
                    )
                }}
            />
        </Navigator>
    )
}
