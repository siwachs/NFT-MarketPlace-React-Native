import { View, Text, Image } from "react-native";
import React from "react";

//Navigation...
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../../../constants";

//Componnts...
import { CircleButton, RectButton } from "../../CustomButton";
import { NFTTitle, SubInfo, ETHPrice } from "../../SubInfo";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
          source={data.image}
        ></Image>

        {/* Like Button... */}
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      {/*Card Middle */}
      <SubInfo></SubInfo>

      {/* Card Footer */}
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        ></NFTTitle>

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ETHPrice price={data.price}></ETHPrice>
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.push("Details", { data })}
          ></RectButton>
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
