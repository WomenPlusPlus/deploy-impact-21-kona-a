import React from 'react';
import { View, Text } from 'react-native';

export default function Solo ({route}) {
    console.log(route.params)
    const item = route.params

    return (
        <View>
            <Text>
                {item.Name}
            </Text>
        </View>
    )

}