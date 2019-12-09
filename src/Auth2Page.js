import React, { Component } from "react";
import { View, TouchableOpacity, SafeAreaView, Text} from "react-native";
import {Field, reduxForm} from "redux-form";
import {Ionicons} from "@expo/vector-icons";
import { connect } from 'react-redux';

import RFDateView from "../FormComponents/RFDateInput";
import CircleSwitchBoxes from "../FormComponents/RFSwitchBoxes";
import RFPickerListView from "../FormComponents/RFPickerList";

import validate from "./validation";
import styles from "./styles";

const PickerList = [
  {
    id: 1,
    name: 'Facebook',
    checked: false,
  },
  {
    id: 2,
    name: 'LinkedIn',
    checked: false,
  },
  {
    id: 3,
    name: 'Djinni',
    checked: false,
  },
];

const DefList = {
    name: 'Select your answer',
    checked: false,
}

export class Step2FormView extends Component {
  constructor(props) {
    super(props);
    this.state = {gender: 'FEMALE', intVal: '1', howTo: ''};
    this.onValueChange = this.handleValueChange.bind(this);
  };

  componentDidMount() {
    const { getState } = this.props;
    const state = getState();
    //console.log("TCL: auth2Page -> componentDidMount -> state", state);
  };

  handleValueChange(howTo) {
    this.setState({ howTo })
  };

  nextStep = async (values) => {
    const { next, saveState } = this.props;
    const Birthday = `${values.Bday}`+'-'+`${values.Bmnth}`+'-'+`${values.Byear}`;
    saveState({ birthday: Birthday , gender: `${values.Gender}`, howTo: `${values.How}`});
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


            <Text style={{marginBottom: 10}}>DATE OF BIRTH</Text>
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


            <Field
                label="GENDER"
                name="Gender"
                component={CircleSwitchBoxes}
                data={['MALE', 'FEMALE', 'UNSPECIFIED']}
            />

            <Field
                type="HOW DID YOU KNOW ABOUT US"
                name="How"
                component={RFPickerListView}
                defaultList={DefList}
                list={PickerList}
            />


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

const mapStateToProps = (state) => {
  //console.log('state to props - ', state);
  const Bdate = state.form.user.values.Bday+'-'+state.form.user.values.Bmnth+'-'+state.form.user.values.Byear;
  console.log('state values Bday - ', state.form.user.values);
  return {
    initialValues: {
      BirhdayDate: 'Bdate',
    }
  }
};

//const Step2 = (connect(mapStateToProps)(reduxForm({
//    form: 'user',
//    destroyOnUnmount: false,
//    forceUnregisterOnUnmount: true,
//    validate,
//})(Step2FormView)))

const Step2 = reduxForm({
  form: 'user',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Step2FormView);

export default Step2;
