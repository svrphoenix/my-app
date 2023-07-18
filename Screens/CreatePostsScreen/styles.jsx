import { StyleSheet } from 'react-native';
import { FONT_NAME } from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: 'rgba(255, 255, 255,1)',
    flex: 1,
    justifyContent: 'space-between',
  },
  photoContainer: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: 'rgba(232, 232, 232,1)',
    backgroundColor: 'rgba(246, 246, 246,1)',
  },
  cameraIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255,1)',
  },

  loadPhotoLabel: {
    marginTop: 8,
    fontFamily: FONT_NAME,
    fontSize: 16,
    color: '#BDBDBD',
  },

  inputContainer: {
    marginTop: 32,
    gap: 16,
  },

  input: {
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingBottom: 15,
    fontFamily: FONT_NAME,
    fontSize: 16,
    borderBottomColor: 'rgba(232, 232, 232,1)',
    color: 'rgba(33, 33, 33,1)',
  },

  postBtn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 32,
    borderRadius: 100,
    backgroundColor: 'rgba(246, 246, 246,1)',
  },

  postBtnLabel: {
    textAlign: 'center',
    fontFamily: FONT_NAME,
    fontSize: 16,
    lineHeight: 19,
    color: 'rgba(255, 255, 255,1)',
  },

  previewImage: {
    height: 240,
    borderRadius: 8,
  },

  deleteBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(246, 246, 246,1)',
  },
});

export default styles;
