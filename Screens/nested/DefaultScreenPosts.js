import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import { User } from '../../components/user';
import { Publication } from '../../components/publications';
// import { Login } from '../auth/LoginScreen';

// import photo1 from '../../assets/images/post_1.png';
// import photo2 from '../../assets/images/post_2.png';

export const DefaultScreenPosts = ({ route, navigation }) => {
    const [posts, setPosts] = useState([]);
    console.log('navigation--->', navigation.navigate('Posts'));
    console.log('route--->', route);
    console.log('route.params Default Screen--->', route.params);

    useEffect(() => {
        if (route.params) {
            setPosts(prevState => [...prevState, route.params]);
        }
    }, [route.params]);
    // console.log('posts : ', posts);

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <User />
                <FlatList
                    data={posts}
                    keyExtractor={(item, indx) => indx.toString()}
                    renderItem={({ item }) => (
                        <Publication
                            key={item.id}
                            title={item.data.name}
                            place={item.data.place}
                            image={item.photo}
                            comments={item.comments}
                            location={item.location}
                            navigation={navigation}
                        />
                    )}
                />
            </View>
            {/* <Button
                title="go to map"
                onPress={() => navigation.navigate('Map')}
            />
            <Button
                title="go to Comments"
                onPress={() => navigation.navigate('Comments')}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 30,
        paddingHorizontal: 16,
    },
});
