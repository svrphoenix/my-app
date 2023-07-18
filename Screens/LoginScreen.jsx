import {
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Platform,
  Dimensions,
} from 'react-native';

import backgroundImage from '../assets/img/bg.jpg';
import styles from './commonStyles';

import LoginForm from '../components/LoginForm/LoginForm';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = values => {
    console.log(values);
    navigation.navigate('Home');
  };
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ImageBackground source={backgroundImage} style={styles.bgImage}>
          <View style={{ ...styles.layout, height: Dimensions.get('window').height * 0.6 }}>
            <Text style={styles.title}>увійти</Text>
            <LoginForm submitHandler={handleSubmit} />
            <View style={styles.accountPrompt}>
              <Text style={styles.accountPromptText}>Немає акаунту?</Text>
              <Pressable onPress={() => navigation.navigate('Registration')}>
                <Text style={styles.linkText}>зареєструватися</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
