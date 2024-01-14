import { View, Text, Image } from 'react-native';
import React from 'react';

const short = require('../../assets/icons/short-tab/youtube-shorts.png');

export default function shorts() {
  return (
    <View>
      <View>
        <Image source={short} />
        <Text className="text-base text-white font-normal">Shorts</Text>
      </View>
    </View>
  );
}
