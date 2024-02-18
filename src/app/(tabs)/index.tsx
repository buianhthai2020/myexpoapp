import {View, Text, StyleSheet} from 'react-native'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text>dioxusHello</Text>
    </View>
      
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
