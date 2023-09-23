import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Flashlight = ({ isOn, toggleFlashlight, goBack }) => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Flashlight is {isOn ? "On" : "Off"}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: isOn
              ? "https://cdn1.iconfinder.com/data/icons/electronics-glyphs-vol-1/52/battery__light__torch__flashlight__torchlight__pockettorch__brightness-512.png"
              : "https://cdn1.iconfinder.com/data/icons/ios-11-ui-elements-vol-2/29/84_torch_flash_light-512.png",
          }}
          style={styles.image}
        />
      </View>
      <Button
        title={isOn ? "Turn Off" : "Turn On"}
        onPress={toggleFlashlight}
        color={isOn ? "red" : "blue"}
      />
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Counter = ({ goBack }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.center}>
      <Text style={styles.counterText}> {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+1" onPress={incrementCount} />
        <Button title="-1" onPress={decrementCount} />
      </View>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Main = () => {
  const [flights, setFlight] = useState(false);
  const [counter, setCounter] = useState(true);
  const [flashlightOn, setFlashlightOn] = useState(false);

  const toflight = () => {
    setFlight(true);
    setCounter(true);
    setFlashlightOn(!flashlightOn);
  };

  const toCounter = () => {
    setCounter(false);
    setFlight(false);
    setFlashlightOn(!flashlightOn);
    setFlashlightOff(!setFlashlightOff);
  };

  const toggleFlashlight = () => {
    setFlashlightOn(!flashlightOn);
    setCounter(true);
  };

  const goBack = () => {
    setFlight(false);
    setCounter(true);
    setFlashlightOn(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonContainer}>
        <Button
          title="FLASHLIGHT"
          onPress={toflight}
          disabled={flights || flashlightOn}
        />
        <Button
          title="COUNTER"
          onPress={toCounter}
          disabled={flights  || !counter}
        />
      </View>
      {flights && <Flashlight isOn={flashlightOn} toggleFlashlight={toggleFlashlight} goBack={goBack} />}
      {!counter && <Counter goBack={goBack} />}
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: "",
  },
  counterText: {
    fontSize: 200, 
    marginBottom: 20,
  },
});