import React, {Component} from 'react';
import {
  Modal,
  DatePickerIOS,
  TouchableHighlight,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
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
import { today, formatShifts, renderItem, renderEmptyDate, rowHasChanged, calendarModal } from '../containers/UpcomingShifts/utils';

class ShiftView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      startVisible: false,
      StartDate: new Date(),
      EndDate: new Date(),
    };
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
  }
  setStartDate(newDate) {
    this.setState({StartDate: newDate});
  }
  setEndDate(newDate) {
    this.setState({EndDate: newDate});
  }
  toggleModal(visible) {
    this.setState({modalVisible: visible});
  }
  toggleStart(visible) {
    this.setState({startVisible: visible});
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={'none'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          }}>
          <View style={styles.modal}>
            <Container>
              <Header>
                <Body style={{flexDirection: 'row'}}>
                  <Title>Edit Shift</Title>
                </Body>
                <Right />
              </Header>
              <Content style={styles.content}>
                <Form>
                  <Body style={{marginTop: 10, flexDirection: 'row-reverse'}}>
                    <Title>Start</Title>
                  </Body>

                  {!this.state.startVisible && (
                    <Button
                      block
                      style={{marginTop: 10, margin: 20, backgroundColor: '#00adf5'}}
                      onPress={() => {
                        this.toggleStart(!this.state.startVisible);
                      }}>
                      <Text>Time: {this.props.StartDate}</Text>
                    </Button>
                  )}
                  {this.state.startVisible && (
                    <DatePickerIOS
                      date={this.state.StartDate}
                      onDateChange={this.setStartDate}
                      visible={this.state.startVisible}
                    />
                  )}
                  {this.state.startVisible && (
                    <Button
                      block
                      style={{marginTop: 0, margin: 20, backgroundColor: '#00adf5'}}
                      onPress={() => {
                        this.toggleStart(false);
                      }}>
                      <Text>Save</Text>
                    </Button>
                  )}
                  <Title> End </Title>
                  <DatePickerIOS date={this.state.EndDate} onDateChange={this.setEndDate} />
                  <Item floatingLabel>
                    <Label>Title</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Description</Label>
                    <Input />
                  </Item>
                </Form>
                <View style={styles.content}>
                  <Button
                    block
                    style={{marginTop: 20, margin: 100, backgroundColor: '#00adf5'}}
                    onPress={() => {
                      this.toggleModal(!this.state.modalVisible);
                    }}>
                    <Text>Edit Shift</Text>
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
          style={{marginTop: 0, margin: 0, backgroundColor: '#00adf5'}}
          onPress={() => {
            this.toggleModal(true);
          }}>
          <Text>Edit Shift</Text>
        </Button>
      </View>
    );
  }
}
export default ShiftView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: '85%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 70,
    marginLeft: 40,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});

export {ShiftView};
