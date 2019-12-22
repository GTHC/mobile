import React, {Component} from 'react';
import {Modal, TouchableHighlight, View, StyleSheet} from 'react-native';
import EditUserSettings from './EditUserSettings';
import {
  Toast,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Title,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
} from 'native-base';

class UserSettingsModal extends Component {
  state = {
    modalVisible: false,
  };
  toggleModal(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={'none'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <Container>
              <Header>
                <Body style={{flexDirection: 'row'}}>
                  <Title>User Settings</Title>
                </Body>
                <Right />
              </Header>
              <Content style={styles.content}>
                <Form style={{margin: 25}}>
                  <Item floatingLabel>
                    <Label>Name</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Phone Number</Label>
                    <Input />
                  </Item>
                </Form>
                <View style={styles.content}>
                  <Button
                    block
                    style={{marginTop: 40, margin: 80, backgroundColor: '#00adf5'}}
                    onPress={() => {
                      this.toggleModal(!this.state.modalVisible);
                    }}>
                    <Text>Change User Settings</Text>
                  </Button>
                </View>
              </Content>
            </Container>
            {/* <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight> */}
          </View>
        </Modal>

        <Button
          block
          style={{marginTop: 40, margin: 50, backgroundColor: '#00adf5'}}
          onPress={() => {
            this.toggleModal(true);
          }}>
          <Text>Edit User Settings</Text>
        </Button>
      </View>
    );
  }
}
export default UserSettingsModal;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
