import React, { Component } from "react";
import { View, TouchableOpacity, SafeAreaView, Text} from "react-native";
import {Field, reduxForm} from "redux-form";
import { Picker } from 'react-native-picker-dropdown';

import RFDateView from "./RFDateInput";
import {ChonseSelect} from "react-native-chonse-select";
import {Ionicons} from "@expo/vector-icons";
import validate from "./validation";
import styles from "./styles";

const Genderdata = [
  {
    value:'0',
    label:'MALE'
  },
  {
    value:'1',
    label:'FEMALE'
  },
  {
    value:'2',
    label:'UNSPECIFIED'
  }
];

export class Step2FormView extends Component {
  constructor(props) {
    super(props);
    this.state = {gender: 'FEMALE', intVal: '1', howTo: ''};
    this.onValueChange = this.handleValueChange.bind(this);
  };

  componentDidMount() {
    const { getState } = this.props;
    const state = getState();
    //console.log("TCL: step2 -> componentDidMount -> state", state);
  };

  handleValueChange(howTo) {
    this.setState({ howTo })
  };

  nextStep = async (values, item) => {
    const { next, saveState } = this.props;
    const Birthday = `${values.Bday}`+'-'+`${values.Bmnth}`+'-'+`${values.Byear}`;
    saveState({ birthday: Birthday , gender: this.state.gender, howTo: this.state.howTo});
    next();
  };

  render() {
    const { handleSubmit,
      submitting,
      valid } = this.props;

    return (

        <SafeAreaView style={styles.container}>

          <View style={styles.AppbarStyle}>
            <Text style={styles.AppbarText}>Signup</Text>
          </View>

          <View style={styles.WrapStatus}>
            <View style={styles.StatusBar2}></View>
          </View>

          <View style={styles.container}>


            <Text>DAY OF BIRTH</Text>
            <View style={styles.BDayView}>

              <Field
                  component={RFDateView}
                  name="Bday"
                  placeholder="DD"
              />

              <Field
                  component={RFDateView}
                  name="Bmnth"
                  placeholder="MM"
              />

              <Field
                  component={RFDateView}
                  name="Byear"
                  placeholder="YYYY"
              />
            </View>


            <View style={styles.genderView}>
              <Text style={styles.genderLabel}>GENDER</Text>
              <ChonseSelect
                  height={40}
                  style={styles.genderSelect}
                  data={Genderdata}
                  initValue={this.state.intVal}
                  onPress={(item) => this.setState({ gender: item.label, intVal: item.value, valide: true })}
              />
            </View>


            <View style={{alignItems: 'center'}}>
              <Text style={styles.label}>WHERE DID YOU KNOW ABOUT US</Text>
              <Picker
                  selectedValue={this.state.howTo}
                  onValueChange={this.onValueChange}
                  prompt="Choose your answer"
                  mode="dialog"
                  style={styles.pickerBox}
                  textStyle={styles.textStyle}
              >
                <Picker.Item label="LinkedIn" value="linkedin" />
                <Picker.Item label="Djinni" value="djinni" />
                <Picker.Item label="Facebook" value="facebook" />
              </Picker>
            </View>

          </View>

          <View style={styles.BotContainer}>

            <View style={styles.ButLeft}>
              <TouchableOpacity onPress={this.props.back}>
                <Text style={styles.UnableBut}>
                  <Ionicons style={styles.IconStyle} name={"ios-arrow-round-back"} />
                  Back
                </Text>

              </TouchableOpacity>
            </View>

            <View style={styles.ButRight}>

              <TouchableOpacity
                  disabled={submitting}
                  onPress={handleSubmit(this.nextStep)}>
                <Text style={styles.UnableBut}>
                  Next
                  <Ionicons style={styles.IconStyle} name={"ios-arrow-round-forward"} />
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </SafeAreaView>
    )

  };
};

const step2 = reduxForm({
  form: 'step1',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(Step2FormView);

export default step2;
