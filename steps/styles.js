import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'stretch',
  },
  BotContainer: {
    width: screenWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    position: 'relative',
    bottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  ButLeft: {
    width: screenWidth * 0.5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    paddingLeft: 10,
  },
  ButRight: {
    width: screenWidth * 0.5,
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
  },
  UnableBut: {
    padding: 15,
    fontSize: 16,
    color: '#2089dc',
  },
  DisableBut: {
    padding: 15,
    fontSize: 16,
    color: '#ccc',
  },
  IconStyle: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
  },
  AppbarStyle: {
    position: 'absolute',
    top: 20,
    width: screenWidth,
    height: 85,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  AppbarText: {
  color: '#2089dc',
  paddingTop: 30,
  fontSize: 20,
},
  WrapStatus: {
    width: screenWidth,
    position: 'absolute',
    top: 90,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  StatusBar: {
   width: '33%',
   height: 4,
   backgroundColor: '#2089dc',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  StatusBar2: {
    width: '66%',
    height: 4,
    backgroundColor: '#2089dc',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  StatusBar3: {
    width: '100%',
    height: 4,
    backgroundColor: '#2089dc',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  BDayView: {
    width: screenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 5,
    marginBottom: 10,
    padding: 5,
  },
  IconBtn: {
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: '#91bd3a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CompleteIcon: {
    fontSize: 75,
    marginTop: 5,
    color: '#fff',
  },
  DashboardBut: {
    top: 25,
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#2089dc',
    borderRadius: 10,
    alignItems: 'center',
  },
  pickerBox: {
    width: screenWidth * 0.9,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 20,
    borderRadius: 10
  },
  textStyle: {
    color: '#666',
  },
  rootError: {
    color: 'red',
  },
  label: {
    paddingTop: 20,
  },
  genderView: {
    width: screenWidth * 0.9,
    alignItems: 'center',
  },
  genderLabel: {
    paddingTop: 20,
    marginBottom: 10,
  },
  genderSelect: {
    width: screenWidth * 0.9,
    marginLeft: 10,
    marginBottom: 10,
  },
  DoneIcon: {
    fontSize: 75,
    marginTop: 5,
    color: 'red',
  },
});
