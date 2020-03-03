import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class DrawerNavigationContent extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.setState({ currentRouteName: route });
    this.props.navigation.dispatch(navigateAction);
  };

  logoutUser = () => {
    console.warn("logout pressed");
  };

  state = {
    currentRouteName: "Home"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.UserDetail}>
          <Text style={styles.text}>Vignesh</Text>
          <Text style={styles.text}>vignesh@gmail.com</Text>
          <Text style={styles.text}>+1234567890</Text>
        </View>
        <View style={{ paddingVertical: RFValue(10) }}>
          <TouchableOpacity
            style={styles.row}
            onPress={this.navigateToScreen("Home")}
          >
            {this.state.currentRouteName === "Home" ? (
              <View style={styles.active} />
            ) : null}
            <Text style={styles.heading}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={this.navigateToScreen("Profile")}
          >
            {this.state.currentRouteName === "Profile" ? (
              <View style={styles.active} />
            ) : null}
            <Text style={styles.heading}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={this.navigateToScreen("Coupon")}
          >
            {this.state.currentRouteName === "Coupon" ? (
              <View style={styles.active} />
            ) : null}
            <Text style={styles.heading}>Coupon {"&"} Offers </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={this.navigateToScreen("Recharge")}
          >
            {this.state.currentRouteName === "Recharge" ? (
              <View style={styles.active} />
            ) : null}
            <Text style={styles.heading}>FSP Recharge</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={this.navigateToScreen("Purchase")}
          >
            {this.state.currentRouteName === "Purchase" ? (
              <View style={styles.active} />
            ) : null}
            <Text style={styles.heading}>Purchase History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={this.navigateToScreen("Logout")}
          >
            {this.state.currentRouteName === "Logout" ? (
              <View style={styles.active} />
            ) : null}
            <Text style={styles.heading}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // #2d3e8e
  container: {
    justifyContent: "center"
  },
  UserDetail: {
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(50),
    backgroundColor: "#ffec00"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: RFValue(15),
    fontWeight: "bold",
    paddingVertical: RFValue(5),
    color: "#404040"
  },
  heading: {
    fontSize: RFValue(17),
    fontWeight: "bold",
    paddingVertical: RFValue(10),
    paddingLeft: RFValue(20),
    color: "#404040"
  },
  active: {
    backgroundColor: "#2D3E8E",
    width: RFValue(13),
    height: RFValue(13),
    marginRight: -RFValue(14)
  }
});
