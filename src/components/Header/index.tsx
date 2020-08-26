import React from 'react';
import { Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import avatar from '../../images/icons/endzera1.jpg';

import { Container, AvatarButton, Avatar, OnlineStatus, RightSide, Button } from './styles';

import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <AvatarButton>
        <Avatar
          source={avatar}
        />
        <OnlineStatus />
      </AvatarButton>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
