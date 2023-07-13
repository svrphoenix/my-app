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
} from 'react-native';
import { Dimensions } from 'react-native';
import backgroundImage from '../assets/img/bg.jpg';
import styles from './commonStyles';

export const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
      <ImageBackground source={backgroundImage} style={styles.bgImage}>
        <View style={{ ...styles.layout, height: Dimensions.get('window').height * 0.6 }}>
          <Text style={styles.title}>увійти</Text>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.fieldsContainer}>
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
            <Text style={styles.btnLabel}>увійти</Text>
          </Pressable>
          <View style={styles.accountPrompt}>
            <Text style={styles.accountPromptText}>Немає акаунту?</Text>
            <Pressable>
              <Text style={styles.linkText}>зареєструватися</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
