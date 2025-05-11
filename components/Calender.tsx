import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Calendar = () => {
  // Mock data for the calendar
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const periodDays = [1, 2, 3, 4, 5]; // Example period days
  const fertileDays = [12, 13, 14, 15, 16]; // Example fertile days
  const ovulationDay = 14; // Example ovulation day

  const isPeriodDay = (days) => periodDays.includes(days);
  const isFertileDay = (day) => fertileDays.includes(day);
  const isOvulationDay = (day) => ovulationDay === day;

  return (
    <View style={styles.container}>
      <View style={styles.daysContainer}>
        {days.map((day) => (
          <Text key={day} style={styles.dayText}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.datesContainer}>
        {dates.map((date) => (
          <TouchableOpacity
            key={date}
            style={[
              styles.dateCell,
              isPeriodDay(date) && styles.periodDay,
              isFertileDay(date) && styles.fertileDay,
              isOvulationDay(date) && styles.ovulationDay,
            ]}
          >
            <Text
              style={[
                styles.dateText,
                isPeriodDay(date) && styles.periodDayText,
                isFertileDay(date) && styles.fertileDayText,
                isOvulationDay(date) && styles.ovulationDayText,
              ]}
            >
              {date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B0082',
    width: 40,
    textAlign: 'center',
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dateCell: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  periodDay: {
    backgroundColor: '#FFB6C1',
  },
  periodDayText: {
    color: '#D72638',
  },
  fertileDay: {
    backgroundColor: '#E6E6FA',
  },
  fertileDayText: {
    color: '#4B0082',
  },
  ovulationDay: {
    backgroundColor: '#9370DB',
  },
  ovulationDayText: {
    color: '#fff',
  },
});

export default Calendar;
