import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/header';
import Calendar from '@/components/Calender'; // You'd create this component or use a lib
import Legend from '@/components/Legend'; // For showing color codes
import { Ionicons } from '@expo/vector-icons'; // Optional icon package
import { LineChart } from 'react-native-chart-kit'; // For cycle prediction chart
import { Dimensions } from 'react-native';

const MainPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
       
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Cycle Summary</Text>
            <View style={styles.summaryRow}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryItemTitle}>Current Cycle</Text>
                <Text style={styles.summaryItemValue}>28 days</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryItemTitle}>Next Period</Text>
                <Text style={styles.summaryItemValue}>5 days</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryItemTitle}>Fertile Window</Text>
                <Text style={styles.summaryItemValue}>Day 12-16</Text>
              </View>
            </View>
          </View>

          <Text style={styles.monthLabel}>May 2025</Text>
          <Calendar />

          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Cycle Prediction</Text>
            <LineChart
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    data: [28, 30, 29, 28, 30, 29],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 32} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#EFEAFE',
                backgroundGradientFrom: '#EFEAFE',
                backgroundGradientTo: '#EFEAFE',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(75, 0, 130, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(75, 0, 130, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#4B0082',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>

          <Legend />

          <View style={styles.symptomsContainer}>
            <Text style={styles.symptomsTitle}>Track Symptoms</Text>
            <View style={styles.symptomsGrid}>
              <TouchableOpacity style={styles.symptomItem}>
                <Ionicons name="heart" size={24} color="#D72638" />
                <Text style={styles.symptomText}>Cramps</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.symptomItem}>
                <Ionicons name="sad" size={24} color="#D72638" />
                <Text style={styles.symptomText}>Mood</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.symptomItem}>
                <Ionicons name="water" size={24} color="#D72638" />
                <Text style={styles.symptomText}>Flow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.symptomItem}>
                <Ionicons name="medkit" size={24} color="#D72638" />
                <Text style={styles.symptomText}>Medication</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.fab}>
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEAFE',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    position: 'relative',
  },
  summaryContainer: {
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
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#4B0082',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryItemTitle: {
    fontSize: 14,
    color: '#666',
  },
  summaryItemValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4B0082',
    marginTop: 4,
  },
  monthLabel: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 16,
    color: '#4B0082',
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#4B0082',
  },
  symptomsContainer: {
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
  symptomsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#4B0082',
  },
  symptomsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  symptomItem: {
    width: '48%',
    backgroundColor: '#F8F0FC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    alignItems: 'center',
  },
  symptomText: {
    marginTop: 8,
    color: '#4B0082',
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#D72638',
    borderRadius: 30,
    padding: 16,
    elevation: 5,
  },
});

export default MainPage;
