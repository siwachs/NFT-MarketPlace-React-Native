import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  Platform,
} from "react-native";
import React from "react";

import { FONTS, COLORS, SIZES, SHADOWS, assets } from "../constants";

import { RectButton, CircleButton } from "../components/CustomButton";
import { SubInfo } from "../components/SubInfo";
import { FocusedStatusBar, DetailsDesc, DetailsBid } from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
      source={data.image}
    ></Image>

    <CircleButton
      imgUrl={assets.left}
      handlePress={navigation.goBack}
      left={15}
      top={StatusBar.currentHeight + 10 || (Platform.OS === "web" && 10)}
    ></CircleButton>

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10 || (Platform.OS === "web" && 10)}
    ></CircleButton>
  </View>
);

const DetailsScreen = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      ></FocusedStatusBar>

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item}></DetailsBid>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation}></DetailsHeader>
            <SubInfo></SubInfo>

            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data}></DetailsDesc>

              {/* Bid Deatails... */}
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        }
      ></FlatList>
    </SafeAreaView>
  );
};

export default DetailsScreen;
