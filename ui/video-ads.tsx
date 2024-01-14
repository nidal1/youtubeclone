import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
const visit = require('../assets/icons/video-ads/visit.png');
const ad = require('../assets/images/video/Ad.png');
const MV = require('../assets/icons/video-feed/more_vert.png');

export default function adsVideo({
  videoCaption,
  title,
  subtitle,
  subtitle1,
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
        <View className="absolute bottom-0 w-full bg-gray flex-row items-center justify-between p-2">
          <Text className="text-blue font-normal text-xs">VISIT SITE</Text>
          <Image source={visit} />
        </View>
      </View>
      <View className="gap-x-2 flex-1 flex-row justify-between">
        <View className="flex-[0.9] mr-auto">
          <Text className="text-white mb-1 max-w-[70%]">{title}</Text>
          <Text className="text-gray mb-1">{subtitle}</Text>
          <View className="flex-row items-center gap-1">
            <Image source={ad} />
            <Text className="text-gray">{subtitle1}</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Image source={MV} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
