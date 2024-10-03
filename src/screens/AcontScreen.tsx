import { Card } from "@/components/cards/card";
import { AccessibilityIcon, BellIcon, GestureIcon, LanguageIcon, MoonIcon, QuestionIcon, SearchIcon, TermsIcon } from "@/components/Icon/Icon";
import ScrollBox from "@/components/ScrollBox/ScrollBox";
import { CText } from "@/components/Text";
import { colors } from "@/constants/colors";
import React from "react";
import { TextInput, StyleSheet, View, Dimensions, TouchableOpacity, Image} from "react-native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

export default function ConfigScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.waveContainer}>
        <Svg height="150" width={width} style={styles.wave}>
          <Path
            d="M44.6371 45.6168L-6 92.6782V150H416V0L311.411 57.5739C287.235 70.8823 258.29 72.3633 232.882 61.5919L155.247 28.6799C144.135 23.9691 132.189 21.5414 120.119 21.5414H105.907C83.1759 21.5414 61.2872 30.1424 44.6371 45.6168Z"
            fill="#2D3250"
          />
        </Svg>
      </View>

      <View style={styles.inputContainer}>
      <TouchableOpacity>
        <Image source={{uri: 'https://via.placeholder.com/100'}} style={styles.profile}></Image>
      </TouchableOpacity>
      </View>

      <View style={styles.Viewcard}>

        <Card.Root height={"6%"} >
          <View style={styles.cards}>
          <CText.Sub>Privacy and security</CText.Sub>
          <LanguageIcon style={styles.icon} />
          </View>
        </Card.Root>

        <Card.Root height={"6%"}>
          <View style={styles.cards}>
          <CText.Sub>Sharing between profiles</CText.Sub>
          <AccessibilityIcon style={styles.icon} />
          </View>
        </Card.Root>

        <Card.Root height={"6%"}>
          <View style={styles.cards}>
          <CText.Sub>Your activity</CText.Sub>
          <BellIcon style={styles.icon} />
          </View>
        </Card.Root>

        <Card.Root height={"6%"}>
          <View style={styles.cards}>
          <CText.Sub>Your activity</CText.Sub>
          <MoonIcon style={styles.icon} />
          </View>
        </Card.Root>

        <Card.Root height={"6%"}>
          <View style={styles.cards}>
          <CText.Sub>Permissions</CText.Sub>
          <GestureIcon style={styles.icon} />
          </View>
        </Card.Root>

        <Card.Root height={"6%"}>
          <View style={styles.cards}>
          <CText.Sub>Personal data</CText.Sub>
          <TermsIcon style={styles.icon} />
          </View>
        </Card.Root>

        <Card.Root height={"6%"}>
          <View style={styles.cards}>
          <CText.Sub>logout</CText.Sub>
          <QuestionIcon style={styles.icon} />
          </View>
        </Card.Root>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    gap: 30,
  },
  waveContainer: {
    height: 100,
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  wave: {
    transform: [{ rotate: "180deg" }],
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    height: 50,
    marginVertical: 20,
  },
  icon: {
    marginRight: '6%',
  },
  cards:{
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingHorizontal: '10%', 
    width: "100%", 
  },
  Viewcard: {
    width: "100%",
    height: "100%",
  },
  profile:{
    width: 175,
    height: 175,
    borderRadius: 100,
    marginBottom: 90,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
