import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Card, Button, Icon, Badge } from 'react-native-elements';
export default class RecipesComponent extends Component {
  render() {
    const { recipe, getRecipeDetailsCallback } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => getRecipeDetailsCallback(recipe)}>
          <Card title={recipe.title}>
            <Image
              style={styles.image}
              resizeMode='cover'
              source={{ uri: recipe.image_url }}
            />
            <Text>{recipe.publisher}</Text>
            <Badge
              containerStyle={{ position: 'absolute', bottom: -4, right: -4 }}
              value={recipe.social_rank}
              status='error'
            />
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginBottom: 10
  }
});
