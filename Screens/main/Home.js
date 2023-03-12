import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';

import { PostsScreen } from './PostsScreen';
// import { User } from '../../components/user';

export const Home = ({ navigation }) => {
    console.log('navigation', navigation);
    return <PostsScreen />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
