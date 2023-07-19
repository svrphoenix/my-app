// import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

import { useState, useEffect } from 'react';

import styles from './styles';
import { ImageBackground } from 'react-native';

const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [photoURI, setPhotoURI] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationAddress, setLocationAddress] = useState('');
  const [postName, setPostName] = useState('');
  const [isEnabledPublish, setIsEnabledPublish] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      await ImagePicker.requestMediaLibraryPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocation(undefined);
      }
    })();
  }, []);

  useEffect(() => {
    setIsEnabledPublish(photoURI && postName && locationAddress);
  }, [photoURI, postName, locationAddress]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const getLocation = async () => {
    if (location !== undefined) {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      const address = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const { city, region, country } = address[0];

      setLocation({
        latitude,
        longitude,
      });

      setLocationAddress(`${city}, ${region}, ${country}`);
    }
  };

  const imageProcessing = image => {
    if (!image.canceled && image.assets.length > 0) {
      const uri = image.assets[0].uri;
      setPhotoURI(uri);
      // await ImagePicker.getPendingResultAsync();
      getLocation();
    }
  };

  const getCameraPhoto = async () => {
    const result = await ImagePicker.launchCameraAsync();
    imageProcessing(result);
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    imageProcessing(result);
  };

  const setInitialValues = () => {
    setPhotoURI(null);
    setPostName('');
    setLocationAddress('');
    if (location !== undefined) setLocation(null);
  };

  const publishPost = () => {
    setInitialValues();
    navigation.navigate('Posts');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <View style={styles.photoContainer}>
            {photoURI && <ImageBackground style={styles.imagePreview} source={{ uri: photoURI }} />}
            <TouchableOpacity style={styles.cameraIcon} onPress={getCameraPhoto}>
              <MaterialIcons name="camera-alt" size={24} color="rgba(189, 189, 189,1)" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={openGallery}>
            <Text style={styles.loadPhotoLabel}>
              {photoURI ? 'Редагувати фото' : 'Завантажте фото'}
            </Text>
          </TouchableOpacity>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{ ...styles.inputContainer, marginTop: 32 }}>
              <TextInput
                style={styles.input}
                placeholder="Назва..."
                placeholderTextColor="rgba(189, 189, 189,1)"
                value={postName.trimStart()}
                onChangeText={setPostName}
              />
              <View style={{ ...styles.inputContainer, position: 'relative' }}>
                <TextInput
                  style={{ ...styles.input, paddingLeft: 28 }}
                  placeholder="Місцевість..."
                  placeholderTextColor="rgba(189, 189, 189,1)"
                  value={locationAddress.trimStart()}
                  onChangeText={setLocationAddress}
                />
                <View style={styles.geoIcon}>
                  <Feather name="map-pin" size={24} color="rgba(189, 189, 189,1)" />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={
              isEnabledPublish
                ? {
                    ...styles.postBtn,
                    backgroundColor: 'rgba(255, 108, 0,1)',
                  }
                : { ...styles.postBtn, backgroundColor: 'rgba(246, 246, 246,1)' }
            }
            disabled={!isEnabledPublish}
            onPress={publishPost}
          >
            <Text
              style={
                isEnabledPublish
                  ? {
                      ...styles.postBtnLabel,
                      color: 'rgba(255, 255, 255,1)',
                    }
                  : { ...styles.postBtnLabel, color: 'rgba(189, 189, 189,1)' }
              }
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => {
            setInitialValues();
            navigation.goBack();
          }}
        >
          <Feather name="trash-2" size={24} color="rgba(189, 189, 189,1)" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

CreatePostsScreen.propTypes = {};

export default CreatePostsScreen;
