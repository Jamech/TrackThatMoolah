import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TransactionItem = ({item}) => {

    const isIncome = item.type === 'Income'

  return (
    <View style={[styles.item, isIncome ? styles.income : styles.expense]}>
      <View>
        <Text style ={styles.description}>{item.description}</Text>
        <Text style ={styles.date}>{new Date(item.date).toLocaleDateString()}</Text>
      </View>
      <Text>
            {isIncome ? '+' : '-'}
            ZMW {item.amount}
        </Text>
    </View>
  );
};

export default TransactionItem

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 6,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
  },
  income: {
    backgroundColor: '#d1fae5', // light green
  },
  expense: {
    backgroundColor: '#fee2e2', // light red
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#555',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
  },
})