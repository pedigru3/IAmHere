import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Item } from "../../components/Item";
import { useState } from "react";

export  function Home() {
  const [items, setItems] = useState<string[]>([])
  const [itemName, setItemName] = useState('')

  const date = new Date()

  function handleParticipantAdd(){
    if (items.includes(itemName)){
      Alert.alert('Item já existe', 'Já existe item na lista com esse nome')
      return
    }
    setItems( prevState => [...prevState, itemName])
    setItemName('')
  }

  function handleItemRemove(name: string){
    Alert.alert('Remover', `Remover item ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          (Alert.alert('Deletado'))
          setItems(prevState => prevState.filter(item => item !== name))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return <View style={styles.container}>

    <Text style={styles.marketName}>
        Lista de Supermercado
    </Text>

    <Text style={styles.dataText}>
      Dia {date.getDate()} de Julho de 2023
    </Text>

    <View style={styles.form}>

    <TextInput style={styles.input}
    placeholder="Nome do item"
    placeholderTextColor='#6b5b5b'
    onChangeText={setItemName}
    value={itemName}
    />

    <TouchableOpacity
    style={styles.button}
    onPress={() => handleParticipantAdd()}
    >
     <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    </View>


    <FlatList data={items}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => item}
    ListEmptyComponent={()=> (
      <Text style={styles.emptyText}>Nenhum item na lista.
       Comece agora mesmo a planejar suas compras!</Text>
    )}
    renderItem={({item}) => 
      <Item 
        name={item}
        key={item} 
        onRemove={handleItemRemove}/>
      }
      />

  </View>
}