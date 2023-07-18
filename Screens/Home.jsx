import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PropTypes from 'prop-types';
import ProfileScreen from './ProfileScreen';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen/CreatePostsScreen';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  const navigateOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: 'rgba(255,255,255,1)',
      borderBottomWidth: 1,
      borderColor: 'rgba(229, 229, 229,1)',
    },
    headerTintColor: 'rgba(33, 33, 33,1)',
    headerTitleStyle: {
      fontFamily: 'Roboto',
      lineHeight: 22,
      letterSpacing: -0.408,
      fontWeight: 500,
      fontSize: 17,
    },
    tabBarShowLabel: false,
    tabBarStyle: {
      display: 'flex',
      height: 83,
      paddingTop: 9,
      paddingBottom: 22,
      paddingHorizontal: 82,
      borderTopWidth: 1,
    },
  };

  return (
    <Tab.Navigator initialRouteName="Posts" screenOptions={navigateOptions}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: 'Публікації',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate('Login')}
            >
              <Feather name="log-out" size={24} color="rgba(189, 189, 189, 1)" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => <Feather name="grid" size={24} color="rgba(33, 33, 33, 1)" />,
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 16 }} onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} color="rgba(189, 189, 189, 1)" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => <Feather name="plus" size={24} color="rgba(33, 33, 33, 1)" />,
          tabBarStyle: { display: 'none' },
          tabBarItemStyle: {
            borderRadius: 20,
            backgroundColor: 'rgba(255, 108, 0,1)',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Профіль',
          tabBarStyle: { display: 'none' },
          tabBarIcon: () => <Feather name="user" size={24} color="rgba(33, 33, 33, 1)" />,
        }}
      />
    </Tab.Navigator>
  );
};

Home.propTypes = {};

export default Home;
