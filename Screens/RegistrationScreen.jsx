import { useState } from 'react';

import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';

import backgroundImage from '../assets/img/bg.jpg';
import styles from './commonStyles';

export const RegistrationScreen = () => {
  const [avatarWidth, setavatarWidth] = useState(0);
  const onLAvatarLayout = evt => {
    const { width } = evt.nativeEvent.layout;
    setavatarWidth(width);
  };

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
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
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.fieldsContainer}>
              <TextInput style={styles.input} placeholder="Логін" />
              <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
              <View style={{ ...styles.fieldsContainer, position: 'relative' }}>
                <TextInput secureTextEntry style={styles.input} placeholder="Пароль" />
                <TouchableOpacity style={styles.passwordShow}>
                  <Text style={styles.passwordShowText}>показати</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
          <Pressable style={styles.btn}>
            <Text style={styles.btnLabel}>зареєструватися</Text>
          </Pressable>
          <View style={styles.accountPrompt}>
            <Text style={styles.accountPromptText}>Вже є акаунт?</Text>
            <Pressable>
              <Text style={styles.linkText}>увійти</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
