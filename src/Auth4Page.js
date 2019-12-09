import React, { Component } from "react";
import {View, Text, SafeAreaView} from "react-native";
import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";

export class Step4 extends Component {
  constructor(props) {
    super(props);
      //const { obj } = this.props;
    //this.state = {};
  }

    componentDidMount() {
        const { getState } = this.props;
        const state = getState();
        console.log("TCL: auth4Page -> componentDidMount -> state", state);
    }

  render(state) {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.AppbarStyle}>
                <Text style={styles.AppbarText}>That's all</Text>
            </View>

            <View style={styles.WrapStatus}>
                <View style={styles.StatusBar3}></View>
            </View>


      <View style={[styles.container]}>
        <Text style={{fontSize: 22, color: '#91bd3a'}}>Done</Text>
        <Ionicons style={styles.DoneIcon} name="ios-heart" />
      </View>

            <View style={[styles.BotContainer, {borderTopWidth: 0}]}>
            </View>

        </SafeAreaView>
    );
  }
}

export default Step4;
