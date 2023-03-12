import { StyleSheet, Text, View, Image } from 'react-native';

export const User = () => {
    return (
        <View style={styles.user}>
            <Image
                style={styles.img}
                source={require('../assets/images/avatar.png')}
            />
            <View style={styles.userText}>
                <Text style={styles.name}>Natali Romanova</Text>
                <Text style={styles.email}>email@example.com</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    user: {
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        marginBottom: 30,
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 16,
    },
    userText: {
        marginLeft: 8,
        justifyContent: 'center',
    },
    name: {
        fontFamily: 'Roboto',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#212121',
    },
    email: {
        fontFamily: 'Roboto',
        fontSize: 11,

        color: '#rgba(33, 33, 33, 0.8)',
    },
});
