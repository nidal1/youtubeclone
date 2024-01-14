import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const mix = require('../assets/icons/video-mix/Mix.png');
const MV = require('../assets/icons/video-feed/more_vert.png');
export default function mixVideo({
  videoCaption,
  title,
  subtitle,
}: {
  videoCaption: any;
  title: string;
  subtitle: string;
  subtitle1: string;
}) {
  return (
    <View className="flex flex-1 mb-5">
      <View className="relative mb-4 rounded-md overflow-hidden">
        <Image source={videoCaption} className="w-full object-contain" />
        <View className="absolute bottom-0 w-full bg-layer-3 flex-row justify-center">
          <Image source={mix} />
        </View>
      </View>
      <View className="gap-x-2 flex-1 flex-row justify-between">
        <View className="flex-[0.9] mr-auto">
          <Text className="text-white mb-1 max-w-[70%]">{title}</Text>
          <Text className="text-gray mb-1">{subtitle}</Text>
        </View>

        <TouchableOpacity>
          <Image source={MV} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
