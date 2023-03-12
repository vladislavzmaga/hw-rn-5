import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export const MapScreen = ({ route, navigation }) => {
    const [location, setLocation] = useState({ route });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            const coords = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };
            setLocation(coords);
        })();
    }, []);

    // console.log('location----->', location);

    // console.log('route.params.location', route.params.location);
    // const { longitude, latitude } = route.params.location;

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        ...location,

                        // longitude: longitude,
                        // latitude: latitude,
                        // longitude: location.longitude,
                        // latitude: location.latitude,
                        longitudeDelta: 0.01,
                        latitudeDelta: 0.01,
                    }}
                    showsUserLocation={true}
                >
                    {location && (
                        <Marker
                            title="Travel photo"
                            coordinate={{
                                ...location,

                                // longitude: location.longitude,
                                // latitude: location.latitude,
                            }}
                            description="Hello"
                        />
                    )}
                </MapView>
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
    mapStyle: {
        width: '100%',
        heigh: '100%',
    },
});
