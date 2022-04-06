import React, { useEffect } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const MenuPage = (props) => {
    useEffect(() => {
        props.navigation.setOptions({title: props.route.params.name})
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <WebView source={{ uri: props.route.params.url }}
                style={{ flex: 1 }}
            />
        </View>
    );
}

export default MenuPage
