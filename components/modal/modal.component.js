import React, { Component } from 'react';
import { Modal, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Button, Divider } from 'react-native-elements';

class ModalComponent extends Component {
  renderIngrendientsList = () => {
    const { recipeDetails } = this.props;

    if (!!recipeDetails.ingredients) {
      return recipeDetails.ingredients.map((item, i) => (
        <Text key={i}>{item}</Text>
      ));
    }
  };

  render() {
    const { isVisible, closeModal, recipeDetails } = this.props;

    return (
      <View style={styles.container}>
        <Modal
          animationType='fade'
          transparent={false}
          visible={isVisible}
          onRequestClose={() => {
            closeModal();
          }}
        >
          <ScrollView>
            <View>
              <View>
                <Image
                  style={styles.image}
                  resizeMode='cover'
                  source={{ uri: recipeDetails.image_url }}
                />
                <Text style={styles.title}>{recipeDetails.title}</Text>
                <View style={styles.dividerContainer}>
                  <Divider style={styles.divider} />
                </View>
                <Text style={styles.rank}>
                  Recipe Rank: {recipeDetails.social_rank}
                </Text>
                <View style={styles.dividerContainer}>
                  <Divider style={styles.divider} />
                </View>
                <Text style={styles.publisher}>
                  Recipe Publiser: {recipeDetails.publisher}{' '}
                </Text>
                <View style={styles.dividerContainer}>
                  <Divider style={styles.divider} />
                </View>
                <Text style={StyleSheet.sourceUrl}>
                  Recipe Source Url: {recipeDetails.source_url}
                </Text>
                <View style={styles.dividerContainer}>
                  <Divider style={styles.divider} />
                </View>
                <Text style={styles.ingredients}>Ingredients:</Text>
                {this.renderIngrendientsList()}
                <View style={styles.dividerContainer}>
                  <Divider style={styles.divider} />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    title='Go back'
                    buttonStyle={styles.buttonStyle}
                    onPress={() => {
                      closeModal();
                    }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
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
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 17,
    textAlign: 'center'
  },
  dividerContainer: {
    marginTop: 10,
    marginBottom: 10
  },
  divider: {
    height: 1
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    width: 140,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#F9260C'
  },
  rank: {},
  publisher: {},
  sourceUrl: {},
  ingredients: {}
});
