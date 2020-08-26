import React from 'react';
import { ImageSourcePropType } from 'react-native';

import data from './data';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

interface ChannelItemProps {
  username: string;
  info: string;
  avatar: ImageSourcePropType;
}

const ChannelList: React.FC = () => {
  const ChannelItem: React.FC<ChannelItemProps> = ({ username, info, avatar }) => (
    <ChannelContainer>
      <LeftSide>
        <Avatar source={avatar} />
        <Column>
          <Username>{username}</Username>
          <Info>{info} new videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )
  return (
    <List>
      {data.map((item) => (
        <ChannelItem
          key={item.id}
          username={item.name}
          info={item.info}
          avatar={item.image}
        />
      ))}
    </List>
  );
};

export default ChannelList;
