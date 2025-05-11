import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Legend = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Legend</Text>
      <View style={styles.legendItem}>
        <View style={[styles.legendColor, styles.periodDay]} />
        <Text style={styles.legendText}>Period Days</Text>
      </View>
      <View style={styles.legendItem}>
        <View style={[styles.legendColor, styles.fertileDay]} />
        <Text style={styles.legendText}>Fertile Days</Text>
      </View>
      <View style={styles.legendItem}>
        <View style={[styles.legendColor, styles.ovulationDay]} />
        <Text style={styles.legendText}>Ovulation Day</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#4B0082',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  periodDay: {
    backgroundColor: '#FFB6C1',
  },
  fertileDay: {
    backgroundColor: '#E6E6FA',
  },
  ovulationDay: {
    backgroundColor: '#9370DB',
  },
  legendText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Legend;
