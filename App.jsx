import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from './screens/DashboardScreen';
import AddTransactionScreen from './screens/AddTransactionScreen'

const Stack = createNativeStackNavigator();


const App = () => {

  const [transactions, setTransactions] = useState([]);

  const AddTransaction = (transaction) => {
    setTransactions((prev) => [transaction, ...prev])
  }
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Dashboard'>

        <Stack.Screen name='Dashboard'>

          {(props) => (<DashboardScreen {...props} transactions={transactions} />)}

        </Stack.Screen>

        <Stack.Screen name='AddTransaction'>

          {(props) => (<AddTransactionScreen {...props} AddTransaction={AddTransaction} />)}

        </Stack.Screen>

      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})