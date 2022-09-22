import { View, Text, Image } from "react-native";
import React from "react";

import { ETHPrice } from "../SubInfo";
import { SIZES, FONTS, COLORS } from "../../constants";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      ></Image>

      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid Placed By {bid.name}
        </Text>

        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>

      <ETHPrice price={bid.price}></ETHPrice>
    </View>
  );
};

export default DetailsBid;
