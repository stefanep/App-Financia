import {StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../Home/components/Header';
import Balance from './components/Balance';
import Movimentacao from './components/Movimentacao';
import Actions from './components/Actions';

export interface listObjeto{
  id: number,
  label: string,
  value: string,
  date: string,
  type: number, 
}

const list : listObjeto[] = [
  {
    id: 1,
    label: 'Conta CEMIG',
    value: '150,52',
    date: '23/06/2023',
    type: 0, // gastos
  },
  {
    id: 2,
    label: 'Pix',
    value: '50,50',
    date: '21/06/2023',
    type: 1, // entrada
  },
  {
    id: 3,
    label: 'Conta Internet',
    value: '550,02',
    date: '19/06/2023',
    type: 0, // gastos
  },
  {
    id: 4,
    label: 'Salario',
    value: '7,500,00',
    date: '23/06/2023',
    type: 1, // entrada
  },
  {
    id: 5,
    label: 'Conta de Agua',
    value: '25,00',
    date: '15/06/2023',
    type: 1, // entrada
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Stefane Paula" />

      <Balance saldo="9,500.99" gastos="-366,00" />

      <Actions />

      <Text style={styles.title}>Ultimas Movimentacoes</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movimentacao data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    color: '#141313',
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
