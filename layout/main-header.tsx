import { View, Text } from 'react-native';
import React from 'react';
import { MainLogo, UtilitiesHeader } from '../components';

export default function mainHeader() {
  return (
    <View className="flex-row items-center justify-between pt-1 mb-[14px]">
      <MainLogo />
      <UtilitiesHeader />
    </View>
  );
}
