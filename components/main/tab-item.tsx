import { View, Text } from 'react-native';
import React from 'react';

export function tabItem({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <View
      className={
        'flex flex-row items-center gap-x-1 mr-3 px-3 py-2 rounded-md' +
        ` ${active ? 'bg-white' : 'bg-layer-2'}`
      }
    >
      {children}
    </View>
  );
}

function tabItemText({
  value,
  isWhite = false,
}: {
  value: string;
  isWhite?: boolean;
}) {
  return (
    <Text
      style={{
        color: isWhite ? 'white' : 'black',
      }}
      className="font-normal"
    >
      {value}
    </Text>
  );
}

tabItem.TabItemText = tabItemText;
