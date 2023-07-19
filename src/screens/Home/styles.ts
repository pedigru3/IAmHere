import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#131016'
  },
  marketName: {fontSize: 25,
    paddingTop: 20,
    fontWeight: 'bold', 
    color: 'white'
    },
    dataText: {color: 'gray' },
    input: {
      flex:1,
      padding: 16,
      backgroundColor: '#1f1e25',
      borderRadius: 5,
      color: '#ffffff',
      marginRight: 7,
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 10,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      fontSize: 25,
      color: '#fff'
    },
    form: {
      marginTop: 36,
      width: '100%',
      flexDirection: 'row',
      marginBottom: 42,
    },
    emptyText: {
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      fontSize: 16,
      paddingHorizontal: 20,
    }
});