import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface BalanceProps{
saldo: string,
gastos: string,
}

const Balance : React.FC<BalanceProps> = ({saldo, gastos}) => {

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.symbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.symbol}>R$</Text>
          <Text style={styles.gastos}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}

export default Balance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -32,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 20,
    color: '#dadada',
  },
  item: {},
  symbol: {
    color: '#dadada',
    marginRight: 6,
  },
  balance: {
    fontSize: 20,
    color:'#0acc17'
  },
  gastos: {
    fontSize: 20,
    color:'#fc0505'
  }
});
