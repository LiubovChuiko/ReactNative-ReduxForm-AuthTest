import React, { Component } from "react";
import {Image, View, TouchableOpacity, Text, SafeAreaView, Picker} from "react-native";
import { Field, Fields, reduxForm } from 'redux-form';
import { Ionicons } from '@expo/vector-icons';

import validate from "./validation";
import styles from "./styles";
import RFTextView from "./RFTextInput";


class Step1FormView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    nextStep = async (values) => {
        const { next, saveState } = this.props;
        saveState( {email: `${values.Email}`, password: `${values.Password}`} );
        next();
    };

    goBack() {
        const { back } = this.props;
        // Go to previous step
        back();
    }


    render() {
        const { handleSubmit,
            submitFailed,
            submitSucceeded,
            submitting,
            valid } = this.props;
        return (<SafeAreaView style={styles.container}>

                <View style={styles.AppbarStyle}>
                    <Text style={styles.AppbarText}>Signup</Text>
                </View>

                <View style={styles.WrapStatus}>
                    <View style={styles.StatusBar}></View>
                </View>

                <View style={styles.container}>

                    <Field
                        component={RFTextView}
                        name="Email"
                        label="EMAIL REQUIRED"
                    />

                    <Field
                        label="PASSWORD"
                        name="Password"
                        component={RFTextView}
                        type="password"
                    />
                    <Field
                        label="CONFIRM PASSWORD"
                        name="Confirmpassword"
                        component={RFTextView}
                        type="password"
                    />

                </View>

                <View style={[styles.BotContainer, {borderTopWidth: 1, borderTopColor: '#999'}]}>

                    <View style={styles.ButLeft}>
                        <TouchableOpacity>
                            <Text style={styles.DisableBut}>
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

    }
}


const step1 = reduxForm({
    form: 'step1',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
})(Step1FormView);


export default step1;