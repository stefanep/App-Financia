import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Icon name="check" size={27} color="#1cc7bb" />
        </View>
        <Text style={styles.buttonLabel}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Icon name="external-link" size={27} color="#1cc7bb" />
        </View>
        <Text style={styles.buttonLabel}>Saídas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Icon name="barcode" size={27} color="#1cc7bb" />
        </View>
        <Text style={styles.buttonLabel}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Icon name="history" size={27} color="#1cc7bb" />
        </View>
        <Text style={styles.buttonLabel}>Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Icon name="umbrella" size={27} color="#1cc7bb" />
        </View>
        <Text style={styles.buttonLabel}>Imposto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Icon name="flash" size={27} color="#1cc7bb" />
        </View>
        <Text style={styles.buttonLabel}>Negativado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Icon name="html5" size={27} color="#1cc7bb" />
        </View>
        <Text style={styles.buttonLabel}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  areaButton: {
    backgroundColor: '#ecf0f1',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32,
  },
  buttonLabel: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
});
