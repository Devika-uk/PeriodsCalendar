import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Test = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centers vertically
    alignItems: 'center',     // centers horizontally
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default Test;
