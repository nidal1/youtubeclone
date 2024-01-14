import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { tabItem as Item } from './tab-item';
import YS from '../../assets/icons/short-tab/youtube-shorts.png';

const items = [
  'All',
  'UI Design',
  'UX Design',
  'Figma tutorial',
  'Mixes',
  'Adobe XD',
  'SEND FEEDBACK',
];

const renderItems = () => {
  return items.map((item, i) => (
    <Item key={item} active={i === 0 && true}>
      <Item.TabItemText value={item} isWhite={i !== 0 && true} />
    </Item>
  ));
};
export default function tabs() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="ml-1 ">
          <Item>
            <Image source={YS} className="mr-2" />
            <Item.TabItemText value={'Shorts'} isWhite />
          </Item>
        </View>
        {renderItems()}
      </ScrollView>
    </View>
  );
}
