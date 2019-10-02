import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet
} from 'react-native';

class ModalComponent extends Component {
  render() {
    const { isVisible, closeModal } = this.props;
    return (
      <View style={styles.container}>
        <Modal
          animationType='fade'
          presentationStyle='formSheet '
          transparent={false}
          visible={isVisible}
          onRequestClose={() => {
            closeModal();
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  closeModal();
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
