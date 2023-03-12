import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Feather, MaterialIcons } from '@expo/vector-icons';
import { PostsScreen } from '../Screens/main/PostsScreen';
import { Login } from '../Screens/auth/LoginScreen';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ title, out }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => {
                    out ? navigation.goBack() : null;
                }}
            >
                <Feather
                    name="arrow-left"
                    size={20}
                    color={out ? '#FFF' : 'rgba(33, 33, 33, 0.8'}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => {
                    console.log('navigation', navigation);
                    // navigation.navigate('Login');
                }}
            >
                <MaterialIcons
                    name="logout"
                    size={20}
                    color={out ? '#BDBDBD' : '#FFF'}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        // height: 88,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.3)',
        paddingTop: 55,
        paddingBottom: 11,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    headerText: {
        fontWeight: '700',
        fontSize: 20,
        color: '#212121;',
        letterSpacing: 1,
    },
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
