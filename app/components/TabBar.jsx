import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../../assets/icons';

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabBar}>
          {state.routes.map((route, index) => {
            
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

                const isFocused = state.index === index;
                const iconColor = isFocused ? '#5F61D5' : '#24333D'
                
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
              <TouchableOpacity
                key={route.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tabBarItem}
              >
                {
                  icons[route.name]({color : iconColor})
                }
              </TouchableOpacity>
            );
          })}
        </View>
      );
}

export default TabBar

const styles = StyleSheet.create({
    tabBar: {
        height: 'auto',
        position: 'absolute',
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        margin: 24,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 10},
        shadowOpacity: 0.1,
        shadowRadius: 10
    },
    tabBarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})