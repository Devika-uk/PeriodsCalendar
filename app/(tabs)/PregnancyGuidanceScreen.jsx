import React, { useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Assuming you have an image in your assets folder
const headerImage = require('../../assets/images/background.jpg');

const pregnancyGuidanceData = [
  {
    id: '1',
    month: 1,
    title: 'First Month (Weeks 1-4)',
    description: 'Your baby is developing its brain, spinal cord, and heart.',
    guidance: [
      'Start taking prenatal vitamins with folic acid',
      'Schedule your first prenatal appointment',
      'Quit smoking and alcohol consumption',
      'Reduce caffeine intake to less than 200mg per day',
      'Eat a balanced diet rich in fruits and vegetables',
      'Stay hydrated by drinking plenty of water',
      'Get adequate rest and sleep',
      'Consider gentle exercise like walking or prenatal yoga'
    ],
    symptoms: [
      'Missed period',
      'Morning sickness',
      'Fatigue',
      'Breast tenderness',
      'Frequent urination'
    ],
    foodTips: [
      'Increase intake of folate-rich foods like leafy greens',
      'Consume enough protein from lean sources',
      'Avoid raw seafood, unpasteurized dairy, and deli meats'
    ],
    cardColor: '#FFE0E0'
  },
  {
    id: '2',
    month: 2,
    title: 'Second Month (Weeks 5-8)',
    description: 'Facial features begin to form and limb buds develop.',
    guidance: [
      'Continue prenatal vitamins',
      'Attend regular prenatal checkups',
      'Consider maternity clothes as your body changes',
      'Practice relaxation techniques for stress management',
      'Begin pelvic floor exercises',
      'Maintain regular physical activity as advised by your doctor',
      'Avoid hot tubs and saunas'
    ],
    symptoms: [
      'Morning sickness may intensify',
      'Food aversions or cravings',
      'Heightened sense of smell',
      'Mood swings',
      'Bloating'
    ],
    foodTips: [
      'Eat small, frequent meals to manage nausea',
      'Try ginger tea for morning sickness',
      'Stay hydrated with water and electrolyte drinks'
    ],
    cardColor: '#FFE8D6'
  },
  {
    id: '3',
    month: 3,
    title: 'Third Month (Weeks 9-13)',
    description: 'Your baby now has all formed organs and is officially a fetus.',
    guidance: [
      'First trimester screening tests',
      'Continue regular prenatal care',
      'Maintain healthy diet and exercise routine',
      'Begin planning for maternity leave',
      'Research childbirth education classes',
      'Consider telling friends and family about your pregnancy'
    ],
    symptoms: [
      'Morning sickness may start to improve',
      'Visible baby bump may appear',
      'Increased energy',
      'Bleeding gums when brushing teeth',
      'Visible veins on breasts and abdomen'
    ],
    foodTips: [
      'Increase calcium intake with dairy or fortified alternatives',
      'Add more iron-rich foods to prevent anemia',
      'Continue staying hydrated'
    ],
    cardColor: '#DCEDC2'
  },
  {
    id: '4',
    month: 4,
    title: 'Fourth Month (Weeks 14-17)',
    description: 'Baby\'s heartbeat may be audible with a doppler. Gender may be determinable.',
    guidance: [
      'Second trimester begins',
      'Schedule mid-pregnancy ultrasound',
      'Consider starting a prenatal exercise class',
      'Plan for baby shopping',
      'Begin sleeping on your side, preferably the left side',
      'Apply moisturizer to prevent stretch marks'
    ],
    symptoms: [
      'Decreased nausea',
      'Increased appetite',
      'Round ligament pain',
      'Darker nipples',
      'Increased vaginal discharge'
    ],
    foodTips: [
      'Increase caloric intake by about 300 calories daily',
      'Focus on nutrient-dense foods',
      'Include omega-3 fatty acids for babys brain development'
    ],
    cardColor: '#C8E6C9'
  },
  {
    id: '5',
    month: 5,
    title: 'Fifth Month (Weeks 18-22)',
    description: 'You may feel your baby moving. Baby is developing muscles and exercising them.',
    guidance: [
      'Anatomy scan ultrasound',
      'Begin doing kick counts',
      'Consider enrolling in childbirth classes',
      'Research pediatricians',
      'Continue moderate exercise',
      'Begin planning nursery'
    ],
    symptoms: [
      'Definite baby bump',
      'Baby movements (quickening)',
      'Swollen gums',
      'Leg cramps',
      'Heartburn'
    ],
    foodTips: [
      'Increase calcium intake for babys bone development',
      'Eat magnesium-rich foods to help with leg cramps',
      'Keep healthy snacks handy'
    ],
    cardColor: '#B3E5FC'
  },
  {
    id: '6',
    month: 6,
    title: 'Sixth Month (Weeks 23-27)',
    description: 'Baby\'s fingerprints form. Eyes open and close.',
    guidance: [
      'Glucose screening test',
      'Start thinking about a birth plan',
      'Consider maternity photography',
      'Join prenatal classes if you havent already',
      'Begin researching childcare options if needed',
      'Practice relaxation techniques for labor'
    ],
    symptoms: [
      'Braxton Hicks contractions',
      'Swollen ankles and feet',
      'Back pain',
      'Skin changes like linea nigra',
      'Trouble sleeping'
    ],
    foodTips: [
      'Stay hydrated to help with Braxton Hicks contractions',
      'Eat fiber-rich foods to prevent constipation',
      'Have small, frequent meals to ease heartburn'
    ],
    cardColor: '#B2DFDB'
  },
  {
    id: '7',
    month: 7,
    title: 'Seventh Month (Weeks 28-31)',
    description: 'Baby can blink, cough, and hiccup. Their brain is developing rapidly.',
    guidance: [
      'Third trimester begins',
      'Prepare hospital bag',
      'Take childbirth education classes',
      'Consider breastfeeding classes',
      'Set up nursery',
      'Research infant CPR',
      'Install car seat'
    ],
    symptoms: [
      'Shortness of breath',
      'Frequent urination returns',
      'Itchy abdomen',
      'Baby hiccups',
      'Trouble finding comfortable sleeping position'
    ],
    foodTips: [
      'Increase iron intake',
      'Eat smaller, more frequent meals',
      'Stay hydrated but limit fluids before bedtime'
    ],
    cardColor: '#C5CAE9'
  },
  {
    id: '8',
    month: 8,
    title: 'Eighth Month (Weeks 32-35)',
    description: 'Baby is putting on weight and may soon settle into a birth position.',
    guidance: [
      'Weekly prenatal visits begin',
      'Group B Strep test',
      'Finalize birth plan',
      'Pack hospital bag',
      'Consider cord blood banking',
      'Finish baby shopping',
      'Install car seat if not done already'
    ],
    symptoms: [
      'Frequent Braxton Hicks contractions',
      'Trouble sleeping',
      'Leaky breasts (colostrum)',
      'Hip pain',
      'Fatigue'
    ],
    foodTips: [
      'Continue with small, frequent meals',
      'Focus on nutrient-dense foods',
      'Stay well-hydrated'
    ],
    cardColor: '#D1C4E9'
  },
  {
    id: '9',
    month: 9,
    title: 'Ninth Month (Weeks 36-40)',
    description: 'Baby is considered full-term at 39 weeks and is preparing for birth.',
    guidance: [
      'Weekly doctor visits',
      'Monitor for signs of labor',
      'Rest when possible',
      'Finalize work arrangements',
      'Install car seat if not done already',
      'Prepare for breastfeeding',
      'Pack and recheck hospital bag'
    ],
    symptoms: [
      'Lightning (baby drops lower)',
      'Increased vaginal discharge',
      'Stronger Braxton Hicks contractions',
      'Pelvic pressure',
      'Difficulty walking'
    ],
    foodTips: [
      'Eat dates to help with labor (some studies suggest)',
      'Stay hydrated',
      'Keep nutritious snacks ready for labor'
    ],
    cardColor: '#E1BEE7'
  },
  {
    id: '10',
    month: 10,
    title: 'Final Weeks (Weeks 40-42)',
    description: 'Baby is fully developed and ready to meet you!',
    guidance: [
      'Continue monitoring baby movements',
      'Discuss induction options if going past due date',
      'Try natural labor induction methods if approved by doctor',
      'Rest and conserve energy',
      'Keep phone charged and transportation ready',
      'Stay in contact with your healthcare provider'
    ],
    symptoms: [
      'Loss of mucus plug',
      'Water breaking',
      'Regular contractions',
      'Back pain',
      'Nesting urges'
    ],
    foodTips: [
      'Light, easy-to-digest meals',
      'Stay hydrated',
      'Have snacks ready for labor'
    ],
    cardColor: '#F8BBD0'
  }
];


export default function PregnancyGuidanceScreen() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCardExpansion = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const renderMonthCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.cardColor }]}
      onPress={() => toggleCardExpansion(item.id)}
    >
      <ThemedView style={styles.cardContent}>
        <ThemedView style={styles.cardHeader}>
          <ThemedText type="defaultSemiBold" style={styles.monthNumber}>{item.month}</ThemedText>
          <ThemedText type="subtitle" style={styles.monthTitle}>{item.title}</ThemedText>
        </ThemedView>
        <ThemedText style={styles.description}>{item.description}</ThemedText>

        {expandedCard === item.id && (
          <ThemedView style={styles.expandedContent}>
            <ThemedView style={styles.section}>
              <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Guidance</ThemedText>
              {item.guidance.map((tip, index) => (
                <ThemedText key={`guidance-${index}`} style={styles.listItem}>
                  • {tip}
                </ThemedText>
              ))}
            </ThemedView>

            <ThemedView style={styles.section}>
              <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Common Symptoms</ThemedText>
              {item.symptoms.map((symptom, index) => (
                <ThemedText key={`symptom-${index}`} style={styles.listItem}>
                  • {symptom}
                </ThemedText>
              ))}
            </ThemedView>

            <ThemedView style={styles.section}>
              <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Nutrition Tips</ThemedText>
              {item.foodTips.map((tip, index) => (
                <ThemedText key={`food-${index}`} style={styles.listItem}>
                  • {tip}
                </ThemedText>
              ))}
            </ThemedView>
          </ThemedView>
        )}

        <ThemedText style={styles.tapToView}>
          {expandedCard === item.id ? 'Tap to collapse' : 'Tap to view guidance'}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFF0F5', dark: '#353636' }}
      headerImage={
        <Image
          source={headerImage}
          style={styles.headerImage}
          resizeMode="contain"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pregnancy Guidance</ThemedText>
      </ThemedView>
      <ThemedText style={styles.subtitle}>
        Month-by-month guidance for your pregnancy journey
      </ThemedText>

      <FlatList
        data={pregnancyGuidanceData}
        renderItem={renderMonthCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
headerImage: {
  width: '100%', // Ensure the image spans the full width
  height: '100%', // Ensure the image spans the full height
  position: 'absolute',
  resizeMode: 'cover', // Use 'cover' to ensure the image covers the area without distortion
},
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  subtitle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
  flatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    borderRadius: 16,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  monthNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 8,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  description: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 12,
  },
  tapToView: {
    fontSize: 12,
    fontStyle: 'italic',
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  expandedContent: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    paddingTop: 12,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  listItem: {
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 4,
  },
});
