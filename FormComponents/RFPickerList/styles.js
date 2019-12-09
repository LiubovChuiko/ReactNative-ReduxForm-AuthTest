import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
  },
  picker: {
    width: screenWidth * 0.9,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pickerLabel: {
    marginTop: 4,
    color: '#666',
  },
  scrollWrap: {
    backgroundColor: '#303030',
    margin: 5,
    borderRadius: 10,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  selectionLabel: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectionLabelText: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 4,
  },
  optionsLabel: {
    marginTop: 5,
    marginBottom: 10,
    paddingBottom: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  optionsLabelText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 4,
  },
});

export default styles;
