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
  Alert,
} from 'react-native';

import backgroundImage from '../assets/img/bg.jpg';
import styles from './commonStyles';
import inputs from './constants';

const { LOGIN, EMAIL, PASSWORD } = inputs;

const RegistrationScreen = () => {
  const [avatarWidth, setavatarWidth] = useState(0);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [focusedInput, setFocusedInput] = useState(null);

  const onLAvatarLayout = evt => {
    const { width } = evt.nativeEvent.layout;
    setavatarWidth(width);
  };

  const onRegister = () => {
    Alert.alert('Registration credentials', `${login}  ${email}  ${password}`);
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

            <View style={styles.fieldsContainer}>
              <TextInput
                style={[styles.input, focusedInput === LOGIN && styles.focusedInput]}
                placeholder="Логін"
                value={login}
                onChangeText={setLogin}
                onFocus={() => setFocusedInput(LOGIN)}
                onBlur={() => setFocusedInput(null)}
              />
              <TextInput
                style={[styles.input, focusedInput === EMAIL && styles.focusedInput]}
                placeholder="Адреса електронної пошти"
                value={email}
                keyboardType="email-address"
                onChangeText={setEmail}
                onFocus={() => setFocusedInput(EMAIL)}
                onBlur={() => setFocusedInput(null)}
              />
              <View style={{ ...styles.fieldsContainer, position: 'relative' }}>
                <TextInput
                  secureTextEntry={hidePassword}
                  style={[styles.input, focusedInput === PASSWORD && styles.focusedInput]}
                  placeholder="Пароль"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocusedInput(PASSWORD)}
                  onBlur={() => setFocusedInput(null)}
                />
                <TouchableOpacity
                  style={styles.passwordShow}
                  onPress={() => {
                    setHidePassword(state => !state);
                  }}
                >
                  <Text style={styles.passwordShowText}>
                    {hidePassword ? 'показати' : 'сховати'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.btn} onPress={onRegister}>
              <Text style={styles.btnLabel}>зареєструватися</Text>
            </TouchableOpacity>
            <View style={styles.accountPrompt}>
              <Text style={styles.accountPromptText}>Вже є акаунт?</Text>
              <Pressable>
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
