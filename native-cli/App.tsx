import React from 'react';
import {Button, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const hadleButton = () => {
    console.log('ffds');
  };
  return (
    <View>
      <Text> Sonam --- Pari</Text>

      <Button onPress={hadleButton} title="hello" />
    </View>
  );
}

export default App;
