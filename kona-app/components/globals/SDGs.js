import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { GlobalStyles } from "./GlobalStyles";

const SDGs = ({ answer, source, onPressWithParam }) => {
  return (
    <TouchableOpacity
      style={GlobalStyles.singleSDG}
      onPress={() => onPressWithParam(answer)}
    >
      <View>
        <Image
          key={answer}
          source={source}
          style={{ width: 91, height: 91 }}
          resizeMode={"cover"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SDGs;
