import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
    Button,
    Dimensions,
} from 'react-native';

export const CommentsScreen = ({ route }) => {
    const [windowWidth, setWindowWidth] = useState(
        Dimensions.get('window').width
    );

    const [allComments, setAllComments] = useState([]);

    const [comment, setComment] = useState('');

    const commentHandler = comment => setComment(comment);

    console.log('route', route.params);
    const { comments, image, title } = route.params;

    // const { login, avatarImage } = useSelector(state => state.auth);

    return (
        <View style={styles.container}>
            <Text>CommentsScreen</Text>

            <View style={{ width: windowWidth - 16 * 2 }}>
                <FlatList
                    removeClippedSubviews={false}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View
                            style={{
                                ...styles.container,
                                width: windowWidth - 16 * 2,
                            }}
                        >
                            <Image
                                style={styles.commentImage}
                                source={{ uri: image }}
                            />
                        </View>
                    }
                    ListFooterComponent={
                        <View style={{ width: '100%', marginBottom: 32 }}>
                            <TextInput
                                value={comment}
                                style={styles.input}
                                placeholder="Leave a comment"
                                cursorColor={'#BDBDBD'}
                                placeholderTextColor={'#BDBDBD'}
                                // onChangeText={}
                            ></TextInput>
                            <TouchableOpacity
                                style={styles.sendButton}
                                onPress={() => {
                                    console.log(' Your comment has been send');
                                }}
                            >
                                <Text style={{ width: 34, height: 34 }}>
                                    Send
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                    contentContainerStyle={{ width: windowWidth - 16 * 2 }}
                    data={allComments}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                ...styles.commentWrapper,
                                width: windowWidth - 28 - 16 * 3,
                            }}
                        >
                            <Image
                                // source={{ uri: item.commentAvatar }}
                                style={styles.commentAvatarImage}
                            />
                            <View
                                style={{
                                    ...styles.textWrapper,
                                }}
                            >
                                <Text style={styles.commentText}>
                                    {item.comment}
                                </Text>
                                <Text style={styles.commentDate}>
                                    {item.date} | {item.time}
                                </Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentImage: {
        height: 240,
        width: '100%',
        marginBottom: 31,
        borderRadius: 8,
    },
    commentWrapper: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    textWrapper: {
        padding: 16,
        backgroundColor: '#00000008',
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },

    commentAvatarImage: {
        width: 28,
        height: 28,
        marginRight: 16,
        borderRadius: 16,
        resizeMode: 'cover',
    },
    commentText: {
        fontSize: 13,
        lineHeight: 18,
        color: '#212121',
    },
    commentDate: {
        marginTop: 8,
        fontSize: 10,
        lineHeight: 12,
        color: '#BDBDBD',
    },
    input: {
        marginTop: 7,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 15,
        width: '100%',
        height: 50,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 100,
    },
    sendButton: {
        position: 'absolute',
        top: 15,
        right: 8,
    },
});
