import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Collapsible } from '@/components/Collapsible';

export default function MonthGuidanceScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { monthData } = route.params;

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <ThemedView 
        style={[styles.header, { backgroundColor: monthData.cardColor }]}
      >
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <IconSymbol
            size={24}
            name="chevron.left"
            color="#000"
          />
        </TouchableOpacity>
        
        <ThemedView style={styles.headerContent}>
          <ThemedText style={styles.monthLabel}>MONTH</ThemedText>
          <ThemedText style={styles.monthNumber}>{monthData.month}</ThemedText>
          <ThemedText style={styles.monthTitle}>{monthData.title}</ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Content */}
      <ScrollView 
        style={styles.scrollContent}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <ThemedView style={styles.descriptionContainer}>
          <IconSymbol
            size={24}
            name="info.circle.fill"
            color="#666"
            style={styles.infoIcon}
          />
          <ThemedText style={styles.descriptionText}>
            {monthData.description}
          </ThemedText>
        </ThemedView>

        {/* Main guidance section */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText style={styles.sectionTitle}>
            Key Recommendations
          </ThemedText>
          {monthData.guidance.map((item, index) => (
            <ThemedView key={index} style={styles.guidanceItem}>
              <ThemedView style={styles.bulletPoint} />
              <ThemedText style={styles.guidanceText}>{item}</ThemedText>
            </ThemedView>
          ))}
        </ThemedView>

        {/* Collapsible sections */}
        <Collapsible title="Common Symptoms">
          <ThemedView style={styles.collapsibleContent}>
            {monthData.symptoms.map((symptom, index) => (
              <ThemedView key={index} style={styles.symptomItem}>
                <IconSymbol
                  size={16}
                  name="checkmark.circle.fill"
                  color="#FF69B4"
                  style={styles.checkIcon}
                />
                <ThemedText style={styles.symptomText}>{symptom}</ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
        </Collapsible>

        <Collapsible title="Nutrition Tips">
          <ThemedView style={styles.collapsibleContent}>
            {monthData.foodTips.map((tip, index) => (
              <ThemedView key={index} style={styles.nutritionItem}>
                <IconSymbol
                  size={16}
                  name="fork.knife"
                  color="#4CAF50"
                  style={styles.foodIcon}
                />
                <ThemedText style={styles.nutritionText}>{tip}</ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
        </Collapsible>

        {/* Additional resources collapsible */}
        <Collapsible title="When to Call Your Doctor">
          <ThemedView style={styles.collapsibleContent}>
            <ThemedText style={styles.warningText}>
              Contact your healthcare provider immediately if you experience:
            </ThemedText>
            <ThemedView style={styles.warningList}>
              <ThemedText style={styles.warningItem}>• Vaginal bleeding</ThemedText>
              <ThemedText style={styles.warningItem}>• Severe abdominal pain</ThemedText>
              <ThemedText style={styles.warningItem}>• Severe headache that doesn't go away</ThemedText>
              <ThemedText style={styles.warningItem}>• Visual disturbances</ThemedText>
              <ThemedText style={styles.warningItem}>• Sudden swelling of face, hands, or feet</ThemedText>
              <ThemedText style={styles.warningItem}>• Reduced baby movement</ThemedText>
              <ThemedText style={styles.warningItem}>• Fever above 100.4°F (38°C)</ThemedText>
              <ThemedText style={styles.warningItem}>• Burning with urination</ThemedText>
            </ThemedView>
          </ThemedView>
        </Collapsible>

        {/* Footer note */}
        <ThemedText style={styles.disclaimer}>
          Note: This information is for general guidance only. Always consult with your healthcare provider for personalized advice.
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  monthLabel: {
    fontSize: 14,
    fontWeight: '600',
    opacity: 0.7,
    letterSpacing: 1.5,
  },
  monthNumber: {
    fontSize: 64,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  scrollContent: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  descriptionContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  infoIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  descriptionText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  guidanceItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF69B4',
    marginTop: 8,
    marginRight: 12,
  },
  guidanceText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  collapsibleContent: {
    paddingVertical: 8,
  },
  symptomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkIcon: {
    marginRight: 10,
  },
  symptomText: {
    flex: 1,
    fontSize: 16,
  },
  nutritionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  foodIcon: {
    marginRight: 10,
  },
  nutritionText: {
    flex: 1,
    fontSize: 16,
  },
  warningText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  warningList: {
    backgroundColor: 'rgba(255, 0, 0, 0.05)',
    padding: 12,
    borderRadius: 8,
  },
  warningItem: {
    fontSize: 15,
    marginBottom: 8,
  },
  disclaimer: {
    fontSize: 13,
    fontStyle: 'italic',
    opacity: 0.6,
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});