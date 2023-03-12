import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export const GoToButton = ({ screenName }) => {
    const navigation = useNavigation();
    const login = 'Login';
    // const posts = 'Posts';

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={() => {
                navigation.navigate(screenName);
            }}
        >
            <Feather
                name={screenName == login ? 'log-out' : 'arrow-left'}
                size={20}
                color={'rgba(33, 33, 33, 0.8'}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#fff',
        color: '#BDBDBD',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
    },
});
