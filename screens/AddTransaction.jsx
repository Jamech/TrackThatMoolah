import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const AddTransaction = ({navigation}) => {

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('Income');

    const handleSubmit =() => {
        if (!amount || !description) {
            alert('Please fill in all fields');
            return;
        }

        const newTransaction = {
            id: Date.now(),
            amount: parseFloat(amount),
            description,
            type,
            date: new Date().toISOString(),
        };

        console.log('Transaction submitted:', newTransaction)

        // TODO: save to state/context/storage
        setAmount('');
        setDescription('');
        setType('Income');
        navigation.goBack(); // go back to dashboard
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Transaction</Text>

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <View style={styles.typeContainer}>
        <TouchableOpacity style={[styles.typeButton, type==="Income" && styles.active]} onPress={() => setType("Income")}>

            <Text style={styles.typeText}>Income</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.typeButton, type==="Expense" && styles.active]} onPress={() => setType("Expense")}>

            <Text style={styles.typeText}>Expense</Text>

        </TouchableOpacity>
      </View>

      <Button title="submit Transaction" onPress={handleSubmit} />

    </View>
  )
}

export default AddTransaction

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  typeButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    minWidth: 100,
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#a7f3d0', // light green
  },
  activeExpense: {
    backgroundColor: '#fecaca', // light red
  },
  typeText: {
    fontSize: 16,
    fontWeight: '500',
  },
})