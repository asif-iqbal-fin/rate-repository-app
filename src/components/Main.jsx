import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { StrictMode } from 'react';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <StrictMode>
      <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
    </StrictMode>    
  );
};

export default Main;