import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  rootInput: {
    width: screenWidth * 0.9,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    height: 40,
    padding: 10,
  },
  rootError: {
    color: 'red',
  },
  label: {
    paddingTop: 20,
  },
});

export default styles;
