import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";

import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ handlePress, right, top, imgUrl, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        right,
        top,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...props,
        ...SHADOWS.light,
      }}
      onPress={handlePress}
    >
      <Image
        resizeMode="contain"
        source={imgUrl}
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          color: COLORS.white,
          fontSize: fontSize,
          textAlign: "center",
        }}
      >
        Place a Bid
      </Text>
    </TouchableOpacity>
  );
};
