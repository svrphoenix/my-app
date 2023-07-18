import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import styles from './styles';

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.photoContainer}>
            <TouchableOpacity style={styles.cameraIcon}>
              <MaterialIcons name="camera-alt" size={24} color="rgba(189, 189, 189,1)" />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loadPhotoLabel}>Завантажте фото</Text>
          </TouchableOpacity>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Назва..."
                placeholderTextColor="rgba(189, 189, 189,1)"
              />
              <TextInput
                style={styles.input}
                placeholder="Місцевість..."
                placeholderTextColor="rgba(189, 189, 189,1)"
              />
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.postBtn}>
            <Text style={styles.postBtnLabel}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.deleteBtn}>
          <Feather name="trash-2" size={24} color="rgba(189, 189, 189,1)" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

CreatePostsScreen.propTypes = {};

export default CreatePostsScreen;
