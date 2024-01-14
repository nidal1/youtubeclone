import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import Colors from '../../constants/Colors';
import { MainHeader } from '../../layout';
import add_circle_outline from '../../assets/icons/tab-navigation/add_circle_outline.png';
import Home from '../../assets/icons/tab-navigation/Home.png';
import Home_active from '../../assets/icons/tab-navigation/Home_active.png';
import Explore from '../../assets/icons/tab-navigation/Explore.png';
import Explore_active from '../../assets/icons/tab-navigation/Explore_active.png';
import Library from '../../assets/icons/tab-navigation/Library.png';
import Library_active from '../../assets/icons/tab-navigation/Library_active.png';
import Subscription from '../../assets/icons/tab-navigation/Subscription.png';
import Subscription_active from '../../assets/icons/tab-navigation/Subscription_active.png';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function tabBarIcon({
  activeImage,
  image,
}: {
  activeImage: ImageSourcePropType;
  image: ImageSourcePropType;
}) {
  return ({ focused }: { focused: boolean }) => (
    <View className="flex-1 items-center justify-center dark:bg-layer-2 w-full">
      <Image source={focused ? activeImage : image} />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View className={`flex-1 dark:bg-layer-1`}>
      <MainHeader />
      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: {
            height: 88,
          },
          tabBarBackground: () => <View className="flex-1 dark:bg-layer-1" />,
          // tabBarActiveBackgroundColor: 'rgba(196, 196, 196, 1)',
          // tabBarInactiveBackgroundColor: 'rgba(196, 196, 196, 1)',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: tabBarIcon({ activeImage: Home_active, image: Home }),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: tabBarIcon({
              activeImage: Explore_active,
              image: Explore,
            }),
          }}
        />
        <Tabs.Screen
          name="test"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: tabBarIcon({
              activeImage: add_circle_outline,
              image: add_circle_outline,
            }),
          }}
        />
        <Tabs.Screen
          name="subscription"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: tabBarIcon({
              activeImage: Subscription_active,
              image: Subscription,
            }),
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: tabBarIcon({
              activeImage: Library_active,
              image: Library,
            }),
          }}
        />
      </Tabs>
    </View>
  );
}
