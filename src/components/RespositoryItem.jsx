import { View, StyleSheet,StatusBar,Text } from 'react-native';

const styles = StyleSheet.create({
    container:{
       flex: 1,
       marginTop: StatusBar.currentHeight || 0, 
    },
});

const RepositoryItem = (props) => {
    return(
        <View style={styles.container}>
            <Text>Full name: {props.fullName}</Text>
            <Text>Description: {props.description}</Text>
            <Text>Language: {props.language}</Text>
            <Text>Stars: {props.stargazersCount}</Text>
            <Text>Forks: {props.forksCount}</Text>
            <Text>Reviews: {props.reviewCount}</Text>
            <Text>Rating: {props.ratingAverage}</Text>
        </View>
    )
}

export default RepositoryItem;