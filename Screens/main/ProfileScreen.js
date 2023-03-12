import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageBackground,
    FlatList,
} from 'react-native';
import { Publication } from '../../components/publications';
// import { PostsScreen } from './PostsScreen';

// import photo1 from '../../assets/images/post_1.png';
// import photo2 from '../../assets/images/post_2.png';
// import photo3 from '../../assets/images/post_3.png';
/*
const POSTS = [
    {
        id: '45k6-j54k-4jth',
        title: 'Dnipro',
        image: '../../assets/images/post_2.png',
        comments: '',
        location: 'Dnipro, Ukraine',
    },
    {
        id: '4116-jfk5-43rh',
        title: 'Poltava',
        image: '../../assets/images/post_1.png',
        comments: '',
        location: 'Poltava, Ukraine',
    },
    {
        id: '4d16-5tt5-4j55',
        title: 'Kyiv',
        image: '../../assets/images/post_3.png',
        comments: '',
        location: 'Kyiv, Ukraine',
    },
    {
        id: 'LG16-ant5-0J25',
        title: 'Lviv',
        image: '../../assets/images/post_1.png',
        comments: '',
        location: 'Lviv, Ukraine',
    },
];
*/

export const ProfileScreen = ({ route, navigation }) => {
    const [posts, setPosts] = useState([]);
    console.log('route params ProfileScreen---->', route.params);
    useEffect(() => {
        if (route.params) {
            setPosts(prevState => [...prevState, route.params]);
        }
    }, [route.params]);

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bgImg}
                source={require('../../assets/images/bg-montaine.jpeg')}
            >
                <View style={styles.containerWhite}>
                    <View style={styles.avatar}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/images/avatar.png')}
                        ></Image>
                    </View>
                    <Text style={styles.textUser}>Natali Romanova</Text>
                    <View style={styles.main}>
                        <FlatList
                            data={posts}
                            keyExtractor={(item, indx) => indx.toString()}
                            renderItem={({ item }) => (
                                <Publication
                                    // key={item.id}
                                    title={item.data.name}
                                    place={item.data.place}
                                    image={item.photo}
                                    comments={0}
                                    location={item.location}
                                    navigation={navigation}
                                />
                            )}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        lineHeight: 19,
    },
    bgImg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textUser: {
        color: '#212121',
        fontFamily: 'Roboto-Regular',
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        letterSpacing: 0.01,
        marginBottom: 33,
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 30,
        paddingHorizontal: 16,
    },
    containerWhite: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        bottom: 0,
        marginTop: 147,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
    },
    avatar: {
        alignItems: 'center',
        marginBottom: 92,
    },
    img: {
        position: 'absolute',
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
});
