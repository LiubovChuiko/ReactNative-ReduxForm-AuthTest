import React, { Component } from "react";
import {Image, View, TouchableOpacity, TextInput, Text, SafeAreaView} from "react-native";

import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";

export class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getState } = this.props;
    const state = getState();
    //console.log("TCL: auth3Page -> componentDidMount -> state", state);
  }

  render() {
    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.AppbarStyle}>
                <Text style={styles.AppbarText}>Welcome!</Text>
            </View>

            <View style={styles.WrapStatus}>
                <View style={styles.StatusBar3}></View>
            </View>

            <View style={styles.container}>

               <View style={styles.IconBtn}>
                <Ionicons
                    name="ios-checkmark"
                    style={styles.CompleteIcon}
                />
               </View>

                <TouchableOpacity
                    style={styles.DashboardBut}
                    onPress={this.props.next}>
                    <Text style={[styles.UnableBut, {paddingTop: 8}]}>
                        Go to Dashboard
                        <Ionicons style={styles.IconStyle} name={"ios-arrow-round-forward"} />
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={[styles.BotContainer, {borderTopWidth: 0}]}>
            </View>

        </SafeAreaView>

    );
  }
}

export default Step3;
