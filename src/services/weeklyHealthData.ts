import { WeeklyData } from '../types';

export const WEEKLY_HEALTH_DATA: Record<number, WeeklyData> = {
  1: {
    week: 1,
    fruit: { name: 'Seed', image: '🌱', size: 'Unknown' },
    milestones: ['Your body is preparing for ovulation', 'Lining of the uterus starts to thicken'],
    tips: ['Eat folate-rich foods', 'Track your cycle carefully'],
    dietPlan: ['Spinach and kale for folate', 'Whole grains', 'Lean proteins'],
    lifestyleTips: ['Quit smoking and alcohol', 'Start a gentle exercise routine', 'Prenatal vitamins'],
    whatToAvoid: ['Cigarettes', 'Alcohol', 'Excessive caffeine']
  },
  2: {
    week: 2,
    fruit: { name: 'Seed', image: '🌱', size: 'Unknown' },
    milestones: ['Ovulation occurs', 'Fertilization is possible'],
    tips: ['Focus on stress reduction', 'Stay hydrated'],
    dietPlan: ['Healthy fats like avocado', 'Eggs for choline', 'Berries for antioxidants'],
    lifestyleTips: ['Maintain a positive mindset', 'Keep active with walking', 'Regular sleep schedule'],
    whatToAvoid: ['Raw fish', 'High-mercury fish', 'Heavy lifting']
  },
  3: {
    week: 3,
    fruit: { name: 'Tiny Speck', image: '✨', size: '0.1mm' },
    milestones: ['Fertilization occurs', 'Zygote begins to divide', 'Implantation starts'],
    tips: ['Keep taking folic acid', 'Listen to your body'],
    dietPlan: ['Lentils and beans', 'Yogurt for probiotics', 'Nuts and seeds'],
    lifestyleTips: ['Continue gentle movement', 'Prioritize hydration', 'Avoid hot tubs'],
    whatToAvoid: ['Hot tubs and saunas', 'Heavy contact sports', 'Unpasteurized dairy']
  },
  4: {
    week: 4,
    fruit: { name: 'Poppy Seed', image: '🌱', size: '2mm' },
    milestones: ['Implantation is complete', 'The blastocyst is officially an embryo'],
    tips: ['A positive pregnancy test is now possible', 'Avoid sushi and unpasteurized cheese'],
    dietPlan: ['Fortified cereals', 'Oranges for Vitamin C', 'Salmon (cooked) for Omega-3'],
    lifestyleTips: ['First prenatal appointment booking', 'Moderate intensity walking', 'Adequate rest'],
    whatToAvoid: ['Sushi (raw fish)', 'Unpasteurized cheese', 'Cleaning cat litter (toxoplasmosis)']
  },
  5: {
    week: 5,
    fruit: { name: 'Orange Seed', image: '🍊', size: '3mm' },
    milestones: ['Neural tube starts to form', 'Heart starts to develop'],
    tips: ['Morning sickness may start', 'Eat smaller, frequent meals'],
    dietPlan: ['Ginger tea for nausea', 'Crackers for morning sickness', 'Bananas for potassium'],
    lifestyleTips: ['Stay cool and comfortable', 'Light stretching', 'Mindfulness exercises'],
    whatToAvoid: ['Soft cheeses', 'Raw eggs', 'Soft-serve ice cream']
  },
  6: {
    week: 6,
    fruit: { name: 'Sweet Pea', image: '🫛', size: '5mm' },
    milestones: ['Heart begins to beat', 'Neural tube is closing'],
    tips: ['Ginger tea can help with morning sickness', 'Stay hydrated'],
    dietPlan: ['Oatmeal for energy', 'Greek yogurt', 'Chia seeds'],
    lifestyleTips: ['Small frequent meals', 'Early bedtime', 'Comfortable clothing'],
    whatToAvoid: ['Excessive caffeine', 'Over-the-counter meds without consult', 'Sacrificing sleep']
  },
  7: {
    week: 7,
    fruit: { name: 'Blueberry', image: '🫐', size: '1.2cm' },
    milestones: ['Tiny limb buds are appearing', 'Brain is growing rapidly'],
    tips: ['Fatigue is normal', 'Don\'t skip meals'],
    dietPlan: ['Broccoli for iron', 'Lean chicken or tofu', 'Melons for hydration'],
    lifestyleTips: ['Naps when needed', 'Prenatal yoga', 'Limit sugar intake'],
    whatToAvoid: ['Processed meats (deli meats)', 'Unwashed produce', 'Stressful environments']
  },
  8: {
    week: 8,
    fruit: { name: 'Raspberry', image: '🍇', size: '1.6cm' },
    milestones: ['Webbed fingers and toes are forming', 'Ears and upper lip are developing'],
    tips: ['Eat small, frequent meals', 'Schedule your first prenatal appointment'],
    dietPlan: ['Hard-boiled eggs', 'Whole grain toast', 'Almond butter'],
    lifestyleTips: ['Gentle swimming', 'Keep up hydration goals', 'Daily walk'],
    whatToAvoid: ['X-rays', 'Harsh cleaning chemicals', 'Excessive heat']
  },
  9: {
    week: 9,
    fruit: { name: 'Cherry', image: '🍒', size: '2.3cm' },
    milestones: ['The tail at the base of spinal cord is gone', 'Eyelids are forming'],
    tips: ['Supportive bras are a must', 'Stay away from strong smells'],
    dietPlan: ['Cottage cheese', 'Lean beef or iron substitutes', 'Apples'],
    lifestyleTips: ['Skin care (hydration)', 'Communication with partner', 'Pelvic floor exercises'],
    whatToAvoid: ['Energy drinks', 'Artificial sweeteners', 'Heavy perfumes']
  },
  10: {
    week: 10,
    fruit: { name: 'Prune', image: '🫐', size: '3cm' },
    milestones: ['Vital organs are starting to function', 'Tiny fingernails are forming'],
    tips: ['Try light walking for energy', 'Wear comfortable bras as breasts grow'],
    dietPlan: ['Quinoa', 'Strawberries for Vitamin C', 'Walnuts'],
    lifestyleTips: ['Moderate walking', 'Plan for nursery', 'Document your journey'],
    whatToAvoid: ['Saccharin', 'Raw sprouts', 'High-impact aerobics']
  },
  11: {
    week: 11,
    fruit: { name: 'Brussels Spout', image: '🥬', size: '4cm' },
    milestones: ['Baby is moving around (though you can\'t feel it)', 'Bones are hardening'],
    tips: ['Gums might be sensitive', 'Use a soft toothbrush'],
    dietPlan: ['Calcium-fortified milk', 'Almonds', 'Tofu'],
    lifestyleTips: ['Dental check-up', 'Wear sunscreen', 'Regular hydration'],
    whatToAvoid: ['Whistling-disturbing noises', 'Strong chemicals', 'Alcohol-based mouthwash']
  },
  12: {
    week: 12,
    fruit: { name: 'Lime', image: '🍋', size: '5.4cm' },
    milestones: ['Baby can make sucking motions', 'The skeleton is beginning to bone'],
    tips: ['Moisturize your skin to help with stretching', 'Tell close family the big news'],
    dietPlan: ['Avocados', 'Sweet potatoes', 'Pears'],
    lifestyleTips: ['Moisturize belly', 'Light pilates', 'Sleep on your side'],
    whatToAvoid: ['Lying flat on your back for long', 'Excessive salt', 'Dehydration']
  },
  13: {
    week: 13,
    fruit: { name: 'Lemon', image: '🍋', size: '7.4cm' },
    milestones: ['Vocal cords are forming', 'Fingerprints are developed'],
    tips: ['End of the first trimester!', 'Energy levels might start to rise'],
    dietPlan: ['Lean proteins', 'Colorful salads', 'Sunflower seeds'],
    lifestyleTips: ['Start maternity shopping', 'Gentle core training', 'Daily sun exposure'],
    whatToAvoid: ['Retinoids in skincare', 'Salicylic acid (high doses)', 'Raw seafood']
  },
  14: {
    week: 14,
    fruit: { name: 'Nectarine', image: '🍑', size: '8.7cm' },
    milestones: ['Baby can squint and grimace', 'Kidneys are producing urine'],
    tips: ['Second trimester begins!', 'Appetite may return'],
    dietPlan: ['Lentil soup', 'Greek yogurt with honey', 'Apricots'],
    lifestyleTips: ['Prenatal vitamins are key', 'Increase fiber intake', 'Brisk walking'],
    whatToAvoid: ['Excessive weight gain', 'Unpasteurized cider', 'Sudden jerky movements']
  },
  15: {
    week: 15,
    fruit: { name: 'Apple', image: '🍎', size: '10.1cm' },
    milestones: ['Baby is sensitive to light', 'Fine hair (lanugo) covers the body'],
    tips: ['Start sleeping on your side', 'Nasal congestion is common'],
    dietPlan: ['Oily fish like sardines', 'Walnuts', 'Blueberries'],
    lifestyleTips: ['Side-sleeping pillow', 'Use a humidifier', 'Engage in hobbies'],
    whatToAvoid: ['Bleaching hair', 'Tanning beds', 'Heavy spicy foods if heartburn starts']
  },
  16: {
    week: 16,
    fruit: { name: 'Avocado', image: '🥑', size: '11.6cm' },
    milestones: ['Baby can make a fist', 'Head is becoming more upright'],
    tips: ['You might feel the first "flutters"', 'Check your posture'],
    dietPlan: ['Iron-rich cereals', 'Lean turkey', 'Asparagus'],
    lifestyleTips: ['Posture checks', 'Pelvic tilts', 'Stay socially active'],
    whatToAvoid: ['Lifting heavy items', 'Prolonged standing', 'Tight waistbands']
  },
  17: {
    week: 17,
    fruit: { name: 'Pear', image: '🍐', size: '13cm' },
    milestones: ['Fat stores are beginning to form', 'Sweat glands are developing'],
    tips: ['Watch for stretch marks', 'Dreaming might become more vivid'],
    dietPlan: ['Cheese and crackers', 'Melons', 'Pumpkin seeds'],
    lifestyleTips: ['Stretch mark oils', 'Meditate before bed', 'Maintain hydration'],
    whatToAvoid: ['Hot yoga', 'Contact sports', 'Empty calories']
  },
  18: {
    week: 18,
    fruit: { name: 'Sweet Potato', image: '🍠', size: '14.2cm' },
    milestones: ['Baby can hear your heartbeat', 'Lungs are beginning to develop'],
    tips: ['Talk and sing to your baby', 'Check in on your iron levels'],
    dietPlan: ['Red meat or lentils', 'Spinach', 'Vitamin C rich fruits'],
    lifestyleTips: ['Talk to your baby', 'Prenatal yoga class', 'Rest your legs'],
    whatToAvoid: ['Standing for too long', 'High heels', 'Stressful movies']
  },
  19: {
    week: 19,
    fruit: { name: 'Mango', image: '🥭', size: '15.3cm' },
    milestones: ['Vernix caseosa is forming on skin', 'Senses are developing'],
    tips: ['Leg cramps may start', 'Stretch your calves daily'],
    dietPlan: ['Bananas', 'Milk or plant-based calcium milk', 'Peaches'],
    lifestyleTips: ['Calf stretches', 'Comfortable footwear', 'Plan a babymoon'],
    whatToAvoid: ['Sleeping on your back', 'Overheating', 'Saccharin']
  },
  20: {
    week: 20,
    fruit: { name: 'Banana', image: '🍌', size: '25.6cm' },
    milestones: ['Halfway through!', 'Baby is very active'],
    tips: ['Schedule your mid-pregnancy ultrasound', 'Monitor your iron intake'],
    dietPlan: ['Oatmeal', 'Beef or beans', 'Yogurt'],
    lifestyleTips: ['Anatomy scan', 'Start nursery planning', 'Daily walk'],
    whatToAvoid: ['Raw sprouts', 'Unwashed veggies', 'High-sugar snacks']
  },
  21: {
    week: 21,
    fruit: { name: 'Pomegranate', image: '🍎', size: '26.7cm' },
    milestones: ['Baby\'s movements feel like real kicks', 'Digestive system is maturing'],
    tips: ['Stretch marks might appear', 'Stay well-hydrated'],
    dietPlan: ['Whole grain pasta', 'Marinara sauce with veggies', 'Apples'],
    lifestyleTips: ['Hydrate skin', 'Supportive mattress', 'Gentle stretching'],
    whatToAvoid: ['Heavily salted foods', 'Sudden movements', 'Dehydration']
  },
  22: {
    week: 22,
    fruit: { name: 'Papaya', image: '🥭', size: '27.8cm' },
    milestones: ['Eyebrows and eyelashes are fully grown', 'Baby can feel touch'],
    tips: ['Baby-proof your home slowly', 'Keep moving daily'],
    dietPlan: ['Eggs', 'Spinach', 'Oranges'],
    lifestyleTips: ['Read baby books', 'Gentle exercise', 'Good posture'],
    whatToAvoid: ['Cat litter', 'Raw meat', 'Excessive herbal teas']
  },
  23: {
    week: 23,
    fruit: { name: 'Grapefruit', image: '🍊', size: '28.9cm' },
    milestones: ['Baby\'s skin is still wrinkled but filling out', 'Inner ear is developed'],
    tips: ['Leg swelling might start', 'Elevate your feet periodically'],
    dietPlan: ['Water-rich veggies', 'Lean proteins', 'Berries'],
    lifestyleTips: ['Elevate feet', 'Comfortable shoes', 'Regular rest'],
    whatToAvoid: ['Long car rides without breaks', 'High heels', 'Tight socks']
  },
  24: {
    week: 24,
    fruit: { name: 'Corn', image: '🌽', size: '30cm' },
    milestones: ['Viability milestone', 'Lungs are producing surfactant'],
    tips: ['Glucose screening time', 'Moisturize your itchy belly'],
    dietPlan: ['Whole grains', 'Low-sugar fruits', 'Lean poultry'],
    lifestyleTips: ['Glucose test', 'Stay active', 'Belly support belt'],
    whatToAvoid: ['Sugar-heavy drinks', 'Missing prenatal appointments', 'Skipping meals']
  },
  25: {
    week: 25,
    fruit: { name: 'Cauliflower', image: '🥦', size: '34.6cm' },
    milestones: ['Baby is starting to have regular sleep cycles', 'Nostrils are opening'],
    tips: ['Heartburn might increase', 'Eat smaller portions'],
    dietPlan: ['Yogurt', 'Almonds', 'Melons'],
    lifestyleTips: ['Eat slowly', 'Avoid caffeine before bed', 'Comfy PJs'],
    whatToAvoid: ['Late-night heavy meals', 'Spicy food if it causes reflux', 'Carbonated drinks']
  },
  26: {
    week: 26,
    fruit: { name: 'Kale', image: '🥬', size: '35.6cm' },
    milestones: ['Eyes are beginning to open', 'Baby responds to sound'],
    tips: ['Play music for your baby', 'Rest whenever needed'],
    dietPlan: ['Salmon', 'Sweet potatoes', 'Green beans'],
    lifestyleTips: ['Talk/Sing to baby', 'Prenatal massage', 'Good lighting while reading'],
    whatToAvoid: ['Loud sudden noises (near belly)', 'Crowded noisy places', 'Overexertion']
  },
  27: {
    week: 27,
    fruit: { name: 'Lettuce', image: '🥬', size: '36.6cm' },
    milestones: ['Lungs are developing more', 'Brain activity is complex'],
    tips: ['Third trimester is approaching', 'Check your blood pressure'],
    dietPlan: ['Quinoa', 'Avocado', 'Pears'],
    lifestyleTips: ['BP check', 'Breathing exercises', 'Early nursery completion'],
    whatToAvoid: ['High-stress situations', 'Excessive salt', 'Dehydration']
  },
  28: {
    week: 28,
    fruit: { name: 'Eggplant', image: '🍆', size: '37.6cm' },
    milestones: ['Third trimester starts!', 'Baby is blinking'],
    tips: ['Count the baby\'s kicks', 'Discuss birth plans'],
    dietPlan: ['Fiber-rich foods', 'Lean protein', 'Milk'],
    lifestyleTips: ['Kick counts', 'Update birth plan', 'Prepare baby clothes'],
    whatToAvoid: ['Heavy lifting', 'Inactivity', 'Skipping checkups']
  },
  29: {
    week: 29,
    fruit: { name: 'Acorn Squash', image: '🎃', size: '38.6cm' },
    milestones: ['Baby\'s brain is controlling breathing', 'Bones are fully developed but soft'],
    tips: ['Leg cramps might return', 'Ensure high calcium intake'],
    dietPlan: ['Cheese', 'Yogurt', 'Sesame seeds'],
    lifestyleTips: ['Calcium focus', 'Regular stretching', 'Supportive pillow'],
    whatToAvoid: ['Sleeping on back', 'Long standing', 'High sugar']
  },
  30: {
    week: 30,
    fruit: { name: 'Cucumber', image: '🥒', size: '39.9cm' },
    milestones: ['Baby is shedding lanugo', 'Eyes are wide open'],
    tips: ['Watch for Braxton Hicks', 'Stay hydrated'],
    dietPlan: ['Whole grains', 'Nuts', 'Green leafy veggies'],
    lifestyleTips: ['Hydration', 'Breathing techniques', 'Resting often'],
    whatToAvoid: ['Dehydration', 'Ignoring contractions', 'Heavy work']
  },
  31: {
    week: 31,
    fruit: { name: 'Pineapple', image: '🍍', size: '41.1cm' },
    milestones: ['Baby is putting on weight', 'All five senses are developed'],
    tips: ['Prepare your hospital bag', 'Shortness of breath is common'],
    dietPlan: ['Small frequent snacks', 'Smoothies', 'Cheese'],
    lifestyleTips: ['Hospital bag prep', 'Elevate head while sleeping', 'Plan postpartum help'],
    whatToAvoid: ['Overfilling the stomach', 'Strenuous exercise', 'Low iron intake']
  },
  32: {
    week: 32,
    fruit: { name: 'Squash', image: '🎃', size: '42.4cm' },
    milestones: ['Baby is practicing breathing', 'Skin is becoming smooth'],
    tips: ['Visit your birth center', 'Stay focused on nutrition'],
    dietPlan: ['Iron-rich foods', 'Citrus fruits', 'Lean meat'],
    lifestyleTips: ['Birth center visit', 'Nursery organization', 'Light walks'],
    whatToAvoid: ['Long travel', 'Excessive spicy food', 'Stress']
  },
  33: {
    week: 33,
    fruit: { name: 'Celery', image: '🥬', size: '43.7cm' },
    milestones: ['Immune system is developing', 'Baby is likely in head-down position'],
    tips: ['Sleep might be difficult', 'Keep a consistent bedtime'],
    dietPlan: ['Milk', 'Fish (cooked)', 'Bananas'],
    lifestyleTips: ['Bedtime routine', 'Stay cool', 'Pelvic floor exercises'],
    whatToAvoid: ['Caffeine in evening', 'Screen time before bed', 'Ignoring symptoms']
  },
  34: {
    week: 34,
    fruit: { name: 'Butternut Squash', image: '🎃', size: '45cm' },
    milestones: ['Central nervous system is maturing', 'Baby recognizes your voice'],
    tips: ['Watch for signs of preterm labor', 'Rest and relax'],
    dietPlan: ['Nuts and seeds', 'Berries', 'Yogurt'],
    lifestyleTips: ['Rest', 'Relaxation music', 'Talk to baby'],
    whatToAvoid: ['Heavy activity', 'Travel far from home', 'Lifting toddlers']
  },
  35: {
    week: 35,
    fruit: { name: 'Cantaloupe', image: '🍈', size: '46.2cm' },
    milestones: ['Rapid brain growth', 'Lungs are nearly fully developed'],
    tips: ['Finalize the nursery', 'Wash baby clothes'],
    dietPlan: ['Light soups', 'Whole grain toast', 'Fruits'],
    lifestyleTips: ['Wash baby gear', 'Pack baby\'s bag', 'Rest your back'],
    whatToAvoid: ['Bending too much', 'Empty stomach (heartburn)', 'Over-planning']
  },
  36: {
    week: 36,
    fruit: { name: 'Honeydew Melon', image: '🍈', size: '47.4cm' },
    milestones: ['Baby is gaining about 1oz per day', 'Digestive system is ready'],
    tips: ['Weekly prenatal visits begin', 'Check your hospital route'],
    dietPlan: ['Small frequent meals', 'High-energy snacks', 'Hydrating fluids'],
    lifestyleTips: ['Check car seat', 'Route to hospital', 'Rest deeply'],
    whatToAvoid: ['Driving long distances', 'Inactivity', 'Ignoring kick counts']
  },
  37: {
    week: 37,
    fruit: { name: 'Winter Melon', image: '🍈', size: '48.6cm' },
    milestones: ['Baby is considered early term', 'Practicing blinking and grasping'],
    tips: ['Expect some discomfort', 'Watch for your water breaking'],
    dietPlan: ['Healthy fats', 'Fiber-rich foods', 'Yogurt'],
    lifestyleTips: ['Keep bag by door', 'Rest with feet up', 'Finalize birth plans'],
    whatToAvoid: ['Exhaustion', 'Stress', 'Skipping nutritious meals']
  },
  38: {
    week: 38,
    fruit: { name: 'Pumpkin', image: '🎃', size: '49.8cm' },
    milestones: ['Baby\'s organs are ready for the outside world', 'Vernix is mostly shed'],
    tips: ['Nesting instinct is strong', 'Don\'t overdo the cleaning'],
    dietPlan: ['Energy-dense foods', 'Nuts', 'Fruits'],
    lifestyleTips: ['Nesting (lightly)', 'Meditate', 'Gentle movement'],
    whatToAvoid: ['Heavy cleaning', 'Climbing ladders', 'Anxiety about due date']
  },
  39: {
    week: 39,
    fruit: { name: 'Watermelon', image: '🍉', size: '50.7cm' },
    milestones: ['Baby is full term', 'Ready any day now!'],
    tips: ['Check your hospital bag again', 'Sleep whenever possible'],
    dietPlan: ['Easily digestible foods', 'Smoothies', 'Oatmeal'],
    lifestyleTips: ['Sleep', 'Relax', 'Phone fully charged'],
    whatToAvoid: ['Busy schedules', 'Travel', 'Unnecessary stress']
  },
  40: {
    week: 40,
    fruit: { name: 'Watermelon', image: '🍉', size: '51.2cm' },
    milestones: ['The big day is here!', 'Baby is fully developed'],
    tips: ['Trust your body', 'Patience is key'],
    dietPlan: ['High-energy foods for labor', 'Fluid focus', 'Light snacks'],
    lifestyleTips: ['Trust your body', 'Deep breathing', 'Stay calm'],
    whatToAvoid: ['Panic', 'Inactivity', 'Comparison with others']
  }
};
