import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Text, View } from 'react-native';
import styles from './styles';

const RFTextInput = ({label, type, placeholder,
  input: { onBlur, onChange, onFocus, value },
  meta: { error, touched, valid },
  disabled,
}) => ( 
  <View>
    <View styles={styles.wrapInput}>
      <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      onFocus={onFocus}
      editable={!disabled}
      selectTextOnFocus={!disabled}
      value={value}
      placeholder = {placeholder}
      style={styles.textInput_Style}
      style={[
        styles.textInput_Style,
        {
          color: disabled ? 'gray' : 'black',
          borderBottomColor: !valid && touched ? 'red' : 'gray'
        },
      ]}
    />
  </View>
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
