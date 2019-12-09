import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import RadioButton from '../RFRadio';

class CircleCheckArray extends Component {
  static propTypes = {
    data: PropTypes.array,
    label: PropTypes.string,
    input: PropTypes.shape({
      onChange: PropTypes.func,
      value: PropTypes.string,
    }),
    withDataLabel: PropTypes.bool,
  }

  static defaultProps = {
    data: ['Data 1', 'Data 2'],
    label: 'Data Label',
    withDataLabel: true,
    disabled: false,
  }

  toggleSwitchValue = (value) => {
    const { input: { onChange } } = this.props;
    onChange(value);
  }


  getMarkedState = (spec) => {
    const { input: { value } } = this.props;
    return spec === value;
    //console.log('spec - ', spec);
  }

  render() {
    const { initial,
      data, label, input: { value }, meta: { error, touched, valid },
      withDataLabel,
    } = this.props;

    return (
      <View style={{alignItems: 'center'}}>
        {withDataLabel && <Text style={styles.label}>{label}</Text>}
        <View style={[styles.container, withDataLabel && { flexDirection: 'row' }]}>
        {data.map((specs, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            <RadioButton
              plain
              onClick={() => this.toggleSwitchValue(specs)}
              initial={value === specs}
              label={data[index]}
            />
          </View>
        ))}
        </View>
        {touched && !valid && <Text style={{color: 'red'}}>{error}</Text>}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  item: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  label: {
    marginTop: 5,
    marginRight: 15,
    fontSize: 15,
  },
});

export default CircleCheckArray;
export { RadioButton };
