import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import {FOTOPERFIL} from '../../../../Imagens';

const StatusBarHeigth = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}> {name}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Image style={styles.image} source={FOTOPERFIL} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1cc7bb',
    paddingTop: StatusBarHeigth,
    flexDirection: 'row',
    paddingStart: 10,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItem: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
  },
  image: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
