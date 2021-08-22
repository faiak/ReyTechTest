import React from 'react';
import {
  View,
  Modal as BaseModal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, Paragraph, Text, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from 'app/store/actions';
import * as modalSelectors from 'app/store/selectors/modalSelectors';
import { Button } from 'app/components';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const CardTask = ({}) => {
  const dispatch = useDispatch();
  const onOk = () => {
    dispatch(modalActions.hide());
  };
  const { show, title, body } = useSelector(state => modalSelectors.get(state));

  return (
    <Card style={{ marginBottom: 8, marginVertical: 0 }}>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default CardTask;
