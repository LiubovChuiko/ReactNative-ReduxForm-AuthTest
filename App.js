import React, { Component } from "react";
import {  View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/index';
import styles from './GeneralStyles';

import AnimatedMultistep from "react-native-animated-multistep";

const initialState = {};
const store = createStore(allReducers);

import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";

const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },
  { name: "step 3", component: Step3 },
  { name: "step 4", component: Step4 }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  onNext = (values, state) => {
    const vals = store.getState();
    console.log("Next -> state", state);
  };
  onBack = () => {
    console.log("Back");
  };

  finish = state => {
    const props = this.props;
  };


  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <AnimatedMultistep
                steps={allSteps}
                onFinish={this.finish}
                animate={true}
                onBack={this.onBack}
                onNext={this.onNext}
            />
          </View>
        </Provider>
    );
  }
};

