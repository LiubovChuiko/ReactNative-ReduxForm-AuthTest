import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  wrapInput: {
    width: screenWidth * 0.9,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
      left: 25,
  },
  rootError: {
    color: 'red',
  },
  label: {
    paddingTop: 20,
  },
  textInput_Style:
      {
        width: screenWidth * 0.29,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
      }
});

export default styles;
