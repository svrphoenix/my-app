import { useState } from 'react';

import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import { Dimensions } from 'react-native';
import backgroundImage from '../assets/img/bg.jpg';
import styles from './commonStyles';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [focusedInput, setFocusedInput] = useState(null);

  const onLogin = () => {
    Alert.alert('Login credentials', `${email}  ${password}`);
  };

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ImageBackground source={backgroundImage} style={styles.bgImage}>
          <View style={{ ...styles.layout, height: Dimensions.get('window').height * 0.6 }}>
            <Text style={styles.title}>увійти</Text>

            <View style={styles.fieldsContainer}>
              <TextInput
                style={[styles.input, focusedInput === 'email' && styles.focusedInput]}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
              />
              <View style={{ ...styles.fieldsContainer, position: 'relative' }}>
                <TextInput
                  secureTextEntry={hidePassword}
                  style={[styles.input, focusedInput === 'password' && styles.focusedInput]}
                  placeholder="Пароль"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocusedInput('password')}
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
            <TouchableOpacity style={styles.btn} onPress={onLogin}>
              <Text style={styles.btnLabel}>увійти</Text>
            </TouchableOpacity>
            <View style={styles.accountPrompt}>
              <Text style={styles.accountPromptText}>Немає акаунту?</Text>
              <Pressable>
                <Text style={styles.linkText}>зареєструватися</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
