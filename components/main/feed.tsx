import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { AdsVideo, FeedVideo, MixVideo } from '../../ui';
import { shorts as HomeShorts } from './shorts';
const gw = require('../../assets/images/video/google_workplace.png');
const TM = require('../../assets/images/video/Thumbnail-mix.png');
const TB1 = require('../../assets/images/video/Thumbnail-1.png');
const TB2 = require('../../assets/images/video/Thumbnail-2.png');
const TB3 = require('../../assets/images/video/Thumbnail-3.png');
const TB4 = require('../../assets/images/video/Thumbnail-4.png');
const TB5 = require('../../assets/images/video/Thumbnail-5.png');
const PP = require('../../assets/images/video/PP.png');
const PP1 = require('../../assets/images/video/PP1.png');

export default function feed() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AdsVideo
        videoCaption={gw}
        title="Introducing Google Workplace"
        subtitle="Messaging, meeting, docs, and tasks, now thoughtfully connected. Try it for free."
        subtitle1="Google Workplace"
      />
      <FeedVideo
        chanelPicture={PP}
        videoCaption={TB1}
        duration="7:11"
        title="Figma Tutorial : Device Frames and Scrolling"
        subtitle="Figma   90K views   1 months ago"
      />
      <FeedVideo
        chanelPicture={PP}
        videoCaption={TB2}
        duration="1:00"
        title="Organization Admin Settings : Dashboard overview[1/7]"
        subtitle="Figma   16K views    2 months ago"
      />
      <MixVideo
        videoCaption={TM}
        title="Mix - Dj Snake - Let Me Love You ft Justin Bieber"
        subtitle="Justin Bieber, DJ Snake, Alan Walker and more"
      />
      <FeedVideo
        chanelPicture={PP}
        videoCaption={TB3}
        duration="58:38"
        title="Build it in Figma: Responsive Website Design Part 1"
        subtitle="Figma   32K views   7 months ago"
      />

      <FeedVideo
        chanelPicture={PP}
        videoCaption={TB4}
        duration="24:45"
        title="Config Europe 2020 - Keynote, Dylan Field - Embracing the tension betw..."
        subtitle="Figma   27K views   1 months ago"
      />
      <HomeShorts />
      <FeedVideo
        chanelPicture={PP1}
        videoCaption={TB5}
        duration="2:13"
        title="Batman v Superman: Dawn of Justice Official Teaser Trailer #1..."
        subtitle="Movieclips Trailers   28M views   6 years ago"
      />
    </ScrollView>
  );
}
