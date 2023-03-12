import React from 'react';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const AuthStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

import { Login } from './Screens/auth/LoginScreen';
import { Registration } from './Screens/auth/RegistrationScreen';
import { PostsScreen } from './Screens/main/PostsScreen';
import { CreatePostsScreen } from './Screens/main/CreatePostsScreen';
import { ProfileScreen } from './Screens/main/ProfileScreen';
import { Home } from './Screens/main/Home';

// icons import
import { Feather, AntDesign } from '@expo/vector-icons';
import { GoToButton } from './components/goToButton';

function TextTitle(text) {
    return <Text style={styles.title}>{text}</Text>;
}

export const useRoute = isAuth => {
    // const navigation = useNavigation();

    if (!isAuth) {
        return (
            <AuthStack.Navigator initialRouteName="Registration">
                <AuthStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Registration"
                    component={Registration}
                />
                <AuthStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Login"
                    component={Login}
                />
                <AuthStack.Screen
                    component={Home}
                    name="Home"
                    options={{
                        headerTitleAlign: 'center',
                        headerShown: true,
                        headerTitle: () => TextTitle('Публікaції'),
                    }}
                />
            </AuthStack.Navigator>
        );
    }
    return (
        <MainTabs.Navigator
            initialRouteName="Posts"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: [{ display: 'flex' }, null],
                tabBarStyle: {
                    paddingHorizontal: 50,
                    paddingTop: 10,
                    paddingBottom: 10,
                    height: 60,
                },
                headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
                    backgroundColor: '#fff',
                },
                headerTitleAlign: 'center',
            }}
        >
            <MainTabs.Screen
                name="Posts"
                component={PostsScreen}
                options={({ navigation }) => ({
                    headerTitle: () => TextTitle('Публікaції'),
                    headerShown: true,
                    headerRight: () => (
                        <GoToButton screenName="Login" /> //TODO!!!
                        /*  <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.btn}
                            onPress={() => {
                                //navigation.navigate('Login');
                                // navigation.goBack();
                            }}
                        >
                            <Feather
                                name="arrow-left"
                                size={20}
                                color={'rgba(33, 33, 33, 0.8'}
                            />
                        </TouchableOpacity>*/
                    ),
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <Feather
                            name="grid"
                            style={focused && styles.focusNav}
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: 'rgba(33, 33, 33, 0.8)',
                })}
            />
            <MainTabs.Screen
                name="CreatePosts"
                component={CreatePostsScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () => TextTitle('Створити публікцію'),
                    headerLeft: () => (
                        <GoToButton screenName="Posts" />
                        /* <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.btn}
                            onPress={() => {
                                // navigation.navigate('Posts');
                                navigation.goBack();
                            }}
                        >
                            <Feather
                                name="arrow-left"
                                size={20}
                                color={'rgba(33, 33, 33, 0.8'}
                            />
                        </TouchableOpacity>*/
                    ),
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <AntDesign
                            name="pluscircle"
                            style={focused && styles.focusNav}
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: 'rgba(33, 33, 33, 0.8)',
                    // tabBarInactiveTintColor: '#FFF',
                    tabBarItemStyle: {
                        backgroundColor: '#FFF',
                        borderRadius: 20,
                    },
                })}
            />
            <MainTabs.Screen
                name="Profiler"
                component={ProfileScreen}
                options={({ navigation }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <AntDesign
                            style={focused && styles.focusNav}
                            name="user"
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: '#FF6C00',
                    tabBarInactiveTintColor: '#BDBDBD',
                })}
            />
        </MainTabs.Navigator>
    );
};

const styles = StyleSheet.create({
    focusNav: {
        paddingVertical: 7,
        paddingHorizontal: 28,
        borderRadius: 20,
        backgroundColor: '#FF6C00',
        color: '#fff',
    },
    focused: {
        backgroundColor: '#FFF',
        color: '#FF6C00',
    },
    title: {
        fontWeight: 'bold',
        color: '#212121',
        paddingHorizontal: 16,
        fontSize: 17,
    },
    btn: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        color: '#BDBDBD',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
    },
});
