import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const MV = require('../assets/icons/video-feed/more_vert.png');

export default function feedVideo({
  videoCaption,
  duration,
  chanelPicture,
  title,
  subtitle,
}: {
  videoCaption: any;
  duration: string;
  chanelPicture: any;
  title: string;
  subtitle: string;
}) {
  return (
    <View className="flex flex-1 mb-5">
      <View className="relative mb-4 rounded-md overflow-hidden">
        <Image source={videoCaption} className="w-full object-contain" />
        <Text className="absolute bottom-2 right-2 bg-black text-white font-medium text-xs px-1">
          {duration}
        </Text>
      </View>
      <View className="gap-x-2 flex-1 flex-row justify-between">
        <Image source={chanelPicture} />
        <View className="flex-[0.9] mr-auto">
          <Text className="text-white mb-1 max-w-[70%]">{title}</Text>
          <Text className="text-gray">{subtitle}</Text>
        </View>
        <TouchableOpacity>
          <Image source={MV} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
