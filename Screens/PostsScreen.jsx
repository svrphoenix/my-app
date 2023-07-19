import { Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { MainPostsScreen, CommentsScreen, MapScreen } from './NestedPostsScreens';

const Nested = createStackNavigator();

const PostsScreen = ({ navigation }) => {
  return <Text>Posts</Text>;
};

PostsScreen.propTypes = {};

export default PostsScreen;
