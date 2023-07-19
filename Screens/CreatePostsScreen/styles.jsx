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
    position: 'relative',
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: 'rgba(232, 232, 232,1)',
    backgroundColor: 'rgba(246, 246, 246,1)',
  },
  cameraIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255,0.5)',
  },

  imagePreview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  loadPhotoLabel: {
    marginTop: 8,
    fontFamily: FONT_NAME,
    fontSize: 16,
    color: 'rgba(189, 189, 189,1)',
  },

  inputContainer: {
    gap: 16,
  },

  input: {
    borderBottomWidth: 1,
    paddingVertical: 16,
    fontFamily: FONT_NAME,
    fontSize: 16,
    borderBottomColor: 'rgba(232, 232, 232,1)',
    color: 'rgba(33, 33, 33,1)',
  },

  geoIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingVertical: 16,
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
