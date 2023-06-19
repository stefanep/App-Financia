import {View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
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
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttontab}>
              <View style={styles.buttonedictor}>
                <View style={{padding: 8, backgroundColor: isFocused ? "#98ebe1" : "transparent", borderRadius: 100, }}>
                  <Icon name={options.tabBarIcon} size={34} color={isFocused ? "#029685" : "#000"}/>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderRadius: 99,
    flexDirection: 'row',
    marginBottom: Platform.OS === 'ios' ? 38 : 24,
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    gap: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.2,
    textShadowRadius: 3.80
  },
  buttontab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonedictor:{
    alignItems: 'center',
    padding: 10,
  },
});
