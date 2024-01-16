import { View, Text, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const mv = require('../../assets/icons/video-feed/more_vert.png');
const short = require('../../assets/icons/short-tab/youtube-shorts.png');
const bb = require('../../assets/images/home/bieber.png');
const im = require('../../assets/images/home/iron-man.png');
const pn = require('../../assets/images/home/priya-nick.png');
const sg = require('../../assets/images/home/selena-gomez.png');
const v = require('../../assets/images/home/virushka.png');

function ShortItem({
  shortPicture,
  title,
  subTitle,
}: {
  shortPicture: any;
  title: string;
  subTitle: string;
}) {
  return (
    <View className="w-[142px] h-[230px] relative rounded-md overflow-hidden mr-2">
      <Image
        source={shortPicture}
        className="absolute object-cover w-[142px] h-[230px]"
      />
      <Image source={mv} className="absolute top-2 right-2" />
      <View className="z-10 flex-1 justify-end p-3 gap-y-1">
        <Text className="text-white text-[10px] max-w-[80%] font-normal">
          {title}
        </Text>
        <Text className="text-white">{subTitle}</Text>
      </View>
    </View>
  );
}

export function shorts() {
  return (
    <View className="gap-y-3 pb-3">
      <View className="flex-row">
        <View className="flex-row gap-1 items-center">
          <Image source={short} />
          <Text className="text-base text-white font-normal">Shorts</Text>
        </View>
        <Text className="text-xs text-gray font-normal">beta</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ShortItem
          shortPicture={sg}
          title="I Can’t Get Enough - Official Teaser"
          subTitle="Selena Gomez"
        />
        <ShortItem
          shortPicture={im}
          title="Avengers : Infinity War best fight scenes ironman and thanos..."
          subTitle="Marvel Studios"
        />
        <ShortItem
          shortPicture={v}
          title="Virat and Anushka - sharma spending good time toghether..."
          subTitle="Virat Kohli"
        />

        <ShortItem
          shortPicture={bb}
          title="Company - Justin Bieber | Company Whatsapp Status..."
          subTitle="RK CLUE CREW"
        />
      </ScrollView>
    </View>
  );
}
