import { View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  cardWrapper: {
    // paddingVertical: 12, // gap above and below
    backgroundColor: '#e1e4e8', // light background for contrast
  },
  card: {
    backgroundColor: '#ffffffff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 12,
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 6,
    marginRight: 16,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },
  description: {
    color: '#586069',
    marginBottom: 8,
    fontSize: 15,
  },
  languageBadgeWrapper: {
    marginTop: 4,
  },
  languageBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#0366d6',
    color: '#fff',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
    overflow: 'hidden',
    fontSize: 15,
    fontWeight: 'bold',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  statLabel: {
    color: '#586069',
    fontSize: 13,
    marginTop: 2,
  },
});

const RepositoryItem = (props) => (
  <View style={styles.cardWrapper}>
    <View style={styles.card}>
      {/* Top section: avatar and main info */}
      <View style={styles.topSection}>
        <Image
          source={{ uri: props.ownerAvatarUrl }}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.fullName}>{props.fullName}</Text>
          <Text style={styles.description}>{props.description}</Text>
          <View style={styles.languageBadgeWrapper}>
            <Text style={styles.languageBadge}>{props.language}</Text>
          </View>
        </View>
      </View>
      {/* Stats row */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{formatCount(props.stargazersCount)}</Text>
          <Text style={styles.statLabel}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{formatCount(props.forksCount)}</Text>
          <Text style={styles.statLabel}>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{props.reviewCount}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{props.ratingAverage}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>
    </View>
  </View>
);

function formatCount(count) {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace('.0', '') + 'k';
  }
  return count;
}

export default RepositoryItem;