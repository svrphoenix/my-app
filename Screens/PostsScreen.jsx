import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255,1)',
  },
});

const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Posts Test String</Text>
    </View>
  );
};

PostsScreen.propTypes = {};

export default PostsScreen;
