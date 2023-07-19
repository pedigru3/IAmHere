import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface ItemProps  {
  name: string
  onRemove: (name: string) => void
}

export function Item({name, onRemove}: ItemProps){
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    
    <TouchableOpacity
    onPress={() => onRemove(name)}
    style={styles.button}
    >
     <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
    </View>
    
  )
}