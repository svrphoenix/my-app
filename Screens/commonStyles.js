import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bgImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  layout: {
    width: '100%',
    height: (Dimensions.get('window').height / 3) * 2,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
  },

  avatarContainer: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(246, 246, 246, 1)',
    borderRadius: 16,
  },

  avatar: {
    width: '100%',
    height: '100%',
  },

  title: {
    marginVertical: 32,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    color: 'rgba(33, 33, 33, 1)',
  },

  fieldsContainer: {
    gap: 16,
  },

  input: {
    height: 50,
    paddingHorizontal: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'rgba(189, 189, 189, 1)',
    backgroundColor: 'rgba(246, 246, 246, 1)',
    borderWidth: 1,
    borderColor: 'rgba(232, 232, 232, 1)',
    borderRadius: 8,
  },

  passwordShow: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 16,
  },

  passwordShowText: {
    textTransform: 'capitalize',
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'rgba(27, 67, 113, 1)',
  },

  btn: {
    marginTop: 43,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: 'rgba(255, 108, 0, 1)',
    borderRadius: 100,
  },

  btnLabel: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: 'rgba(255, 255, 255, 1)',
  },

  accountPrompt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    marginTop: 16,
  },

  accountPromptText: {
    color: 'rgba(27, 67, 113, 1)',
  },

  linkText: {
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
  },
});

export default styles;
