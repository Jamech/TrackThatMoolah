import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DashboardScreen = ({navigation, transactions}) => {

    const income = transactions 
      .filter((t) => t.type === 'Income')
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
      .filter((t) => t.type === 'Expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const balance = income - expenses;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track That Moolah 💸</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Income:</Text>
        <Text style={styles.value}>ZMW {income}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Expenses:</Text>
        <Text style={styles.value}>ZMW {expenses}</Text>
      </View>

      <View style={[styles.card, styles.balance]}>
        <Text style={styles.label}>Balance:</Text>
        <Text style={styles.value}>ZMW {balance}</Text>
      </View>

      <View style={{marginTop: 30}}>
        <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')}/>
      </View>
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
  value: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111',
  },
  balance: {
    backgroundColor: '#d1fae5', // light green
  },

})