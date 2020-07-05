import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = {}

  render = () => (
    <View
      style={{
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 20,
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto",
        fontFamily: "System"
      }}
    >
      <View
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 20,
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderStyle: "solid",
          backgroundSize: "auto",
          fontFamily: "System"
        }}
      >
        <View
          style={{
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto",
            fontFamily: "System"
          }}
        >
          <View
            style={{
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderStyle: "solid",
              backgroundSize: "auto",
              fontFamily: "System"
            }}
          >
            <Image
              resizeMode="cover"
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/home-office-floating-shelves_ZVBuThT.jpg"
              }}
              style={{
                width: 300,
                height: 300,
                paddingRight: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                borderStyle: "solid",
                fontFamily: "System"
              }}
            />
            <View
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderStyle: "solid",
                backgroundSize: "auto",
                fontFamily: "System"
              }}
            >
              <View
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  fontSize: 20,
                  backgroundColor: "#F4F5F9",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderStyle: "solid",
                  backgroundSize: "auto",
                  fontFamily: "System"
                }}
              >
                <Text
                  style={{
                    paddingTop: 13,
                    overflow: "visible",
                    textAlign: "center",
                    verticalAlign: "baseline",
                    fontSize: 15,
                    color: "#000000",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    fontFamily: "System"
                  }}
                >
                  WELCOME TO THE MARKETPLACE!
                </Text>
              </View>
              <View
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  fontSize: 20,
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderStyle: "solid",
                  backgroundSize: "auto",
                  fontFamily: "System"
                }}
              >
                <Button
                  style={{
                    overflow: "visible",
                    textAlign: "center",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    borderStyle: "solid",
                    paddingLeft: 95,
                    paddingRight: 95,
                    fontFamily: "System",
                    borderWidth: 2,
                    backgroundColor: "#FD6F80"
                  }}
                  onPress={() => alert("Pressed!")}
                >
                  SIGN IN
                </Button>
                <View
                  style={{
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderStyle: "solid",
                    backgroundSize: "auto",
                    fontFamily: "System"
                  }}
                >
                  <View
                    style={{
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 20,
                      backgroundColor: "#F4F5F9",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignItems: "stretch",
                      alignContent: "stretch",
                      borderStyle: "solid",
                      backgroundSize: "auto",
                      fontFamily: "System"
                    }}
                  />
                  <View
                    style={{
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 20,
                      backgroundColor: "#F4F5F9",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignItems: "stretch",
                      alignContent: "stretch",
                      borderStyle: "solid",
                      backgroundSize: "auto",
                      fontFamily: "System"
                    }}
                  >
                    <Button
                      style={{
                        overflow: "visible",
                        textAlign: "center",
                        verticalAlign: "baseline",
                        fontSize: 20,
                        color: "#000000",
                        borderColor: "#504B56",
                        borderStyle: "solid",
                        borderWidth: 2,
                        paddingLeft: 95,
                        paddingRight: 95,
                        fontFamily: "System",
                        backgroundColor: "#504B56"
                      }}
                      onPress={() => alert("Pressed!")}
                    >
                      SIGN UP
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
