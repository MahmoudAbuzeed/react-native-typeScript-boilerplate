import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const HomeComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Hello <Text style={styles.everestText}>EverestMinds</Text> to the first
        screen in react-native type-script boilerplate.
      </Text>
    </View>
  );
};

export default HomeComponent;
