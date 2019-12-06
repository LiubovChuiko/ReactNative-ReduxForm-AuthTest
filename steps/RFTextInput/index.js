import PropTypes from 'prop-types';
import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './styles';

const RFTextInput = ({label, type,
  input: { onBlur, onChange, onFocus, value },
  meta: { error, touched, valid },
  disabled,
}) => ( 
  <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      onFocus={onFocus}
      editable={!disabled}
      selectTextOnFocus={!disabled}
      value={value}
      secureTextEntry={ type === 'password' ? true : false}
      style={[
        styles.rootInput,
        {
          color: disabled ? 'gray' : 'black',
          borderBottomColor: !valid && touched ? 'red' : 'gray'
        },
      ]}
    />
    {touched && !valid && <Text style={styles.rootError}>{error}</Text>}
  </View>
);

RFTextInput.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
  }).isRequired,
  disabled: PropTypes.bool,
}

RFTextInput.defaultProps = {
  disabled: false,
};

export default RFTextInput;
