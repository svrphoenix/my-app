import { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Pressable, Alert } from 'react-native';

import { Formik, ErrorMessage } from 'formik';
import { registrationValidationSchema } from '../../validation/yupValidation';

import styles from './styles';
import { inputs } from '../../constants/constants';

const { LOGIN, EMAIL, PASSWORD } = inputs;

const RegistrationForm = ({ submitHandler }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <Formik
      initialValues={{ [LOGIN]: '', [EMAIL]: '', [PASSWORD]: '' }}
      validationSchema={registrationValidationSchema}
      onSubmit={submitHandler}
    >
      {({ handleSubmit, handleChange, values }) => (
        <>
          <View style={styles.fieldsContainer}>
            <TextInput
              name={LOGIN}
              style={[styles.input, focusedInput === LOGIN && styles.focusedInput]}
              placeholder="Логін"
              value={values[LOGIN]}
              onChangeText={handleChange(LOGIN)}
              onFocus={() => setFocusedInput(LOGIN)}
              onBlur={() => setFocusedInput(null)}
            />
            <ErrorMessage name={LOGIN} style={{ color: 'rgba(255,0,0,1)' }} component={Text} />
            <TextInput
              name={EMAIL}
              style={[styles.input, focusedInput === EMAIL && styles.focusedInput]}
              placeholder="Адреса електронної пошти"
              value={values[EMAIL]}
              onChangeText={handleChange(EMAIL)}
              onFocus={() => setFocusedInput(EMAIL)}
              onBlur={() => setFocusedInput(null)}
              keyboardType="email-address"
            />
            <ErrorMessage name={EMAIL} style={{ color: 'rgba(255,0,0,1)' }} component={Text} />
            <View style={{ ...styles.fieldsContainer, position: 'relative' }}>
              <TextInput
                name={PASSWORD}
                secureTextEntry={hidePassword}
                style={[styles.input, focusedInput === PASSWORD && styles.focusedInput]}
                placeholder="Пароль"
                value={values[PASSWORD]}
                onChangeText={handleChange(PASSWORD)}
                onFocus={() => setFocusedInput(PASSWORD)}
                onBlur={() => setFocusedInput(null)}
              />
              <ErrorMessage name={PASSWORD} style={{ color: 'rgba(255,0,0,1)' }} component={Text} />

              <TouchableOpacity
                style={styles.passwordShow}
                onPress={() => {
                  setHidePassword(state => !state);
                }}
              >
                <Text style={styles.passwordShowText}>{hidePassword ? 'показати' : 'сховати'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnLabel}>зареєструватися</Text>
          </TouchableOpacity>
        </>
      )}
    </Formik>
  );
};

export default RegistrationForm;
