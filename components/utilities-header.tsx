import { View, Text, Image } from 'react-native';
import React from 'react';
import cast from '../assets/icons/main-header/cast.png';
import notifications_none from '../assets/icons/main-header/notifications_none.png';
import search from '../assets/icons/main-header/search.png';
import Profile_xs from '../assets/images/Profile_xs.png';

export default function utilitiesHeader() {
  return (
    <View className="flex-row bg-layer-2 max-w-fit rounded-md pr-[10px] pl-1 py-[5px] gap-x-2">
      <Image source={cast} />
      <Image source={notifications_none} />
      <Image source={search} />
      <View>
        <Image source={Profile_xs} />
      </View>
    </View>
  );
}
