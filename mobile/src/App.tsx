import React from 'react';
import { View, StyleSheet } from 'react-native';

import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23202c',
  },
});

export default App;
