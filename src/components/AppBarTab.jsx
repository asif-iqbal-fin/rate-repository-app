import { View, StyleSheet, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
  tab:{
    paddingVertical: 20,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  tabText:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  }
});

const AppBarTab = ({title}) => {
    return(
        <View>
            <Pressable style={styles.tab}>
                <Text style={styles.tabText}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default AppBarTab;