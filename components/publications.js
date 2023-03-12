import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export const Publication = ({
    navigation,
    title,
    place,
    image,
    comments,
    location,
}) => {
    console.log(
        'data title:',
        title,
        'data place:',
        place,
        'data image:',
        image,
        comments,
        location
    );
    return (
        <View style={styles.publication}>
            <Image style={styles.img} source={{ uri: image }} />
            <Text style={styles.publicationTitle}>{title}</Text>
            {/* <Text style={styles.publicationTitle}>{place}</Text> */}
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                }}
            >
                <TouchableOpacity
                    style={styles.comments}
                    onPress={() =>
                        navigation.navigate('Comments', {
                            comments,
                            image,
                            title,
                        })
                    }
                >
                    <EvilIcons name="comment" size={24} color="#212121" />
                    <Text> {comments}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.location}
                    onPress={() => navigation.navigate('Map')}
                >
                    <EvilIcons name="location" size={24} color="#212121" />
                    <Text> {place}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    publication: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 35,
    },
    img: {
        width: '100%',
        height: 240,
        borderRadius: 8,
    },
    publicationTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        marginTop: 8,
        color: '#BDBDBD',
    },
    comments: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#BDBDBD',
    },
    location: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        justifyContent: 'flex-end',
        // textDecorationLine: 'underline',
        color: '#BDBDBD',
    },
});
