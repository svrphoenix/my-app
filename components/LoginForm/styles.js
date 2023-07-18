import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  layout: {
    width: '100%',
    height: (Dimensions.get('window').height / 3) * 2,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
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

  focusedInput: {
    color: 'rgba(33, 33, 33, 1)',
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF',
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
