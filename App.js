import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Mixpanel} from 'mixpanel-react-native';

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel('Project code', trackAutomaticEvents);
mixpanel.init();

const MixPanelTest = () => {
  const trackEvent = () => {
    mixpanel.track('Pressed a button', {date: Date.now()});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a sample app for Mixpanel testing</Text>
      <Button title="Sample button" onPress={trackEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 16,
  },
});

export default MixPanelTest;
