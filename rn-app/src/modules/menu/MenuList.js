import React from 'react';
import { Linking, TouchableOpacity, StatusBar, View, Text, FlatList, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { GET_MENU } from '../../common/services/graphql';
import { ListStyles } from './styles';
import Theme from '../../theme';
import RouteNames from '../../routes/names';

const MenuListScreen = (props) => {
    const { loading, error, data } = useQuery(GET_MENU);
    console.log('get menu data ', data, loading);
    if (loading) {
        return <View style={[Theme.styles.flex_1, Theme.styles.col_center]}>
            <ActivityIndicator size={40} color={Theme.colors.primary} />
        </View>
    }
    return (
        <View style={ListStyles.container}>
            <StatusBar backgroundColor={'transparent'} />
            <FlatList
                style={ListStyles.listContainer}
                data={data?.menus || []}
                numColumns={1}
                keyExtractor={(item, idx) => idx}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={ListStyles.callItemContainer}
                            onPress={() => {
                                if (item.url) {
                                    props.navigation.navigate(RouteNames.MenuPage, { name: item.name, url: item.url });
                                }
                            }}
                        >
                            <Text style={ListStyles.name}>{item.name}</Text>
                            <Text style={ListStyles.title}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                }}
                ItemSeparatorComponent={() => <View style={ListStyles.spaceCol} />}
                ListFooterComponent={() => <View style={ListStyles.spaceCol} />}
            />
        </View>
    );
}

export default MenuListScreen
