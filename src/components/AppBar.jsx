import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'space-around',
    // ...
  },
  appbar:{
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#24292e',
    height: 100,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  tab:{
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 1,
    backgroundColor: '#24292e',
  },
  tabText:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffffff',
  }
});

const AppBar = () => {
  return (
    <View style={styles.appbar}>
        <AppBarTab title='Repositories'/>
    </View>
  );
};

export default AppBar;