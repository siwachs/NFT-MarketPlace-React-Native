import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { ETHPrice, NFTTitle } from "../SubInfo";

import { COLORS, FONTS, SIZES } from "../../constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        ></NFTTitle>

        <ETHPrice price={data.price}></ETHPrice>
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
          </Text>
          <Text
            onPress={() => {
              if (!readMore) {
                setText(data.description);
                setReadMore(true);
              } else {
                setText(data.description.slice(0, 100));
                setReadMore(false);
              }
            }}
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
          >
            {readMore ? "Show Less" : "Show More"}
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
