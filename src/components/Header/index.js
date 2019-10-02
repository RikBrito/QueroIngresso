import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {
  Header as NBHeader, Left, Button, Icon, Title, Right
} from 'native-base';

const Header = styled(NBHeader)`
  height: 43;
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(102,45,145,1) 0%, rgba(171,38,156,1) 100%);
  ${Platform.OS === 'android' && 'margin-top: 24px'};
`;

export default function StyledHeader({ title, hasTabs }) {
  return (
    <Header hasTabs={hasTabs}>
      <Left>
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Right>
        <Title>{title}</Title>
      </Right>
    </Header>
  );
}

StyledHeader.propTypes = {
  title: PropTypes.string.isRequired,
  hasTabs: PropTypes.bool
};

StyledHeader.defaultProps = {
  hasTabs: false
};