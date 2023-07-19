import { useState } from 'react';

import {
  ImageBackground,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Platform,
} from 'react-native';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import backgroundImage from '../../assets/img/bg.jpg';
import styles from './commonStyles';

import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [avatarWidth, setavatarWidth] = useState(0);
  const onLAvatarLayout = evt => {
    const { width } = evt.nativeEvent.layout;
    setavatarWidth(width);
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    navigation.navigate('Home');
  };

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ImageBackground source={backgroundImage} style={styles.bgImage}>
          <View style={styles.layout}>
            <View
              onLayout={onLAvatarLayout}
              style={[
                styles.avatarContainer,
                {
                  transform: [{ translateY: avatarWidth / -2 }],
                },
              ]}
            >
              <Image style={styles.avatar} />
            </View>
            <Text style={{ ...styles.title, marginTop: 92 }}>реєстрація</Text>
            <RegistrationForm submitHandler={handleSubmit} />
            <View style={styles.accountPrompt}>
              <Text style={styles.accountPromptText}>Вже є акаунт?</Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>увійти</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
