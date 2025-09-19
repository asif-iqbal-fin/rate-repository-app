import { View, StyleSheet, Pressable, Text } from 'react-native';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  appbar:{
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#24292e',
    height: 100,
    paddingHorizontal: 16,
    paddingTop: 20,
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