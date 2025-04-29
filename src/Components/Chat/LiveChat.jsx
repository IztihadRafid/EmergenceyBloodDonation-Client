import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaUser, FaMoon, FaSun, FaPaperPlane, FaMicrophone } from 'react-icons/fa';
import { RiWechatLine } from 'react-icons/ri';

const LiveChat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const messageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    useEffect(() => {
        setMessages([
            {
                id: 1,
                sender: 'AI',
                text: 'Hello! I am here to assist you with any questions about blood donation. You can ask me about eligibility, the donation process, preparation tips, and more. How can I help you today?',
                timestamp: new Date(),
            },
        ]);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        const userMessage = {
            id: messages.length + 1,
            sender: 'User',
            text: newMessage,
            timestamp: new Date(),
        };

        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setNewMessage('');
        setIsLoading(true);

        // Simulate AI thinking
        setTimeout(() => {
            const aiResponse = generateResponse(newMessage);
            const aiMessage = {
                id: messages.length + 2,
                sender: 'AI',
                text: aiResponse,
                timestamp: new Date(),
            };

            setMessages((prevMessages) => [...prevMessages, aiMessage]);
            setIsLoading(false);
        }, 1000);
    };

    const generateResponse = (input) => {
        const lowerInput = input.toLowerCase();

        const responses = [
            // Greetings
            {
                patterns: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
                response: 'Hello! How can I assist you with blood donation today?',
            },
            // Instructions
            {
                patterns: ['help', 'how to use', 'instructions', 'guide', 'what can you do'],
                response: 'You can ask me about blood donation eligibility, the donation process, preparation tips, types of donations, and more. Just type your question, and I\'ll do my best to help!',
            },
            // Eligibility
            {
                patterns: [
                    'eligibility',
                    'can i donate',
                    'who can donate',
                    'am i eligible',
                    'eligibility criteria',
                    'donate',
                    'donation',
                    'about donation',
                    'how can i donate',
                    'what is needed',
                    'need to donate',
                    'need to be donor'
                ],
                response:
                    'To be eligible for blood donation, you generally need to be at least 17 years old, weigh at least 110 pounds, and be in good health. Specific requirements may vary based on location and health conditions.',
            },
            // Age Limit
            {
                patterns: ['age limit', 'minimum age', 'maximum age', 'age', 'which age'],
                response:
                    "The minimum age to donate blood is typically 17 years old in most countries. There's often no upper age limit as long as you meet the health requirements.",
            },
            // Medications
            {
                patterns: ['medications', 'on medication', 'taking medicine'],
                response:
                    'Some medications may prevent you from donating blood temporarily or permanently. Please consult with the donation center for specifics about your medication.',
            },
            // Health Conditions
            {
                patterns: [
                    'health conditions',
                    'diseases',
                    'illnesses',
                    'cancer',
                    'diabetes',
                    'blood pressure',
                ],
                response:
                    "Certain health conditions may affect your eligibility to donate blood. It's best to discuss your specific condition with the donation center staff.",
            },
            // Travel
            {
                patterns: ['travel', 'visited', 'traveled'],
                response:
                    'Recent travel to certain countries may temporarily defer you from donating due to the risk of infectious diseases. Please provide your travel history to the donation center.',
            },
            // Donation Process
            {
                patterns: [
                    'process',
                    'how does it work',
                    'donation procedure',
                    'what to expect',
                ],
                response:
                    'The blood donation process involves registration, a health history questionnaire, a mini-physical, the donation itself, and a short rest period with refreshments afterward.',
            },
            // Preparation
            {
                patterns: ['prepare', 'preparation', 'before donating', 'what to do before'],
                response:
                    'Before donating blood, make sure to eat a healthy meal, stay hydrated, and get plenty of rest. Avoid heavy exercise before donation.',
            },
            // Side Effects
            {
                patterns: ['side effects', 'after effects', 'feel after', 'reactions'],
                response:
                    'Most donors feel fine after donating blood. Some may experience lightheadedness, dizziness, or bruising at the needle site. These are usually temporary.',
            },
            // Benefits
            {
                patterns: [
                    'benefits',
                    'why donate',
                    'importance',
                    'save lives',
                ],
                response:
                    "Donating blood saves lives! It helps patients undergoing surgery, accident victims, and those with diseases like cancer or blood disorders. It's a simple way to make a big difference.",
            },
            // Types of Donation
            {
                patterns: [
                    'types of donation',
                    'what can i donate',
                    'platelets',
                    'plasma',
                    'double red cells',
                ],
                response:
                    'You can donate whole blood, platelets, plasma, or double red cells. Each type of donation helps patients with different needs.',
            },
            // Donation Locations
            {
                patterns: [
                    'where to donate',
                    'location',
                    'find donation center',
                    'near me',
                ],
                response:
                    'You can find a local blood donation center by visiting organizations like the Red Cross website or searching online for nearby centers.',
            },
            // Scheduling
            {
                patterns: ['schedule', 'appointment', 'book', 'when can i donate'],
                response:
                    'You can schedule an appointment online or by calling your local blood donation center. Walk-ins are also welcome at many locations.',
            },
            // After Donation
            {
                patterns: [
                    'after donation',
                    'recovery',
                    'what to do after',
                    'post-donation',
                ],
                response:
                    'After donating, rest for a few minutes, have a snack and a drink. Avoid strenuous activities for the rest of the day and keep the bandage on for at least four hours.',
            },
            // Blood Types
            {
                patterns: [
                    'blood types',
                    'compatibility',
                    'universal donor',
                    'o negative',
                ],
                response:
                    'There are eight main blood types, and compatibility is important for transfusions. O negative blood is considered the universal donor.',
            },
            // COVID-19
            {
                patterns: [
                    'covid',
                    'coronavirus',
                    'pandemic',
                    'vaccination',
                ],
                response:
                    "If you've received a COVID-19 vaccine, you may still be eligible to donate blood. Please check with the donation center for their specific guidelines.",
            },
            // Iron Levels
            {
                patterns: ['iron levels', 'hemoglobin', 'anemia'],
                response:
                    'Adequate iron levels are necessary for blood donation. If you are anemic or have low hemoglobin, you may need to wait until your levels improve.',
            },
            // Blood Tests
            {
                patterns: ['blood tests', 'screening', 'tested for'],
                response:
                    'All donated blood is tested for various infectious diseases to ensure safety. You will be notified if any tests come back positive.',
            },
            // Donation Duration
            {
                patterns: [
                    'how long does it take',
                    'duration',
                    'time required',
                ],
                response:
                    'The entire blood donation process takes about an hour, with the actual blood collection lasting about 10-15 minutes.',
            },
            // Safety
            {
                patterns: ['is it safe', 'safety', 'risk', 'dangerous'],
                response:
                    'Yes, donating blood is safe. Sterile equipment is used for each donor to prevent any risk of infection.',
            },
            // Pain
            {
                patterns: ['will it hurt', 'pain', 'does it hurt'],
                response:
                    'You may feel a slight pinch when the needle is inserted, but most donors report little to no discomfort during the donation.',
            },
            // Frequency
            {
                patterns: ['frequency', 'how often', 'donate again', 'wait between donations'],
                response:
                    'You can donate whole blood every 56 days. The waiting period may differ for other types of donations like platelets or plasma.',
            },
            // Donation After Illness
            {
                patterns: ['donate after illness', 'post illness donation', 'recovering from illness'],
                response:
                    'If you have recently recovered from an illness, you may need to wait until you are fully recovered and meet the health requirements for donating blood. Please consult with your healthcare provider or the donation center for specific guidelines.',
            },
            // Weight Requirements
            {
                patterns: ['weight', 'minimum weight', 'how much should i weigh'],
                response:
                    'You typically need to weigh at least 110 pounds to donate blood. This ensures your body can safely handle the donation process.',
            },
            // Tattoos and Piercings
            {
                patterns: ['tattoo', 'piercing', 'can i donate with tattoo', 'tattoos'],
                response:
                    'If you have a tattoo or piercing, you may need to wait 3-12 months before donating, depending on local regulations and the facility’s sterility standards. Check with your donation center for specific guidelines.',
            },
            // Pregnancy and Breastfeeding
            {
                patterns: ['pregnant', 'pregnancy', 'breastfeeding', 'can i donate if pregnant'],
                response:
                    'You cannot donate blood while pregnant or breastfeeding. You typically need to wait at least 6 months after giving birth or stopping breastfeeding before you can donate.',
            },
            // Alcohol and Smoking
            {
                patterns: ['alcohol', 'drinking', 'smoking', 'can i donate if i drink'],
                response:
                    'Avoid consuming alcohol for at least 24 hours before donating blood, as it can affect hydration and eligibility. Smoking does not typically disqualify you, but it’s best to avoid smoking immediately before or after donation.',
            },
            // First-Time Donors
            {
                patterns: ['first time', 'new donor', 'never donated', 'first donation'],
                response:
                    'Welcome, first-time donor! The process is simple: you’ll register, answer a health questionnaire, undergo a mini-physical, donate blood, and rest with refreshments. Eat well, stay hydrated, and feel proud—you’re saving lives!',
            },
            // Blood Donation Myths
            {
                patterns: ['myths', 'misconceptions', 'is it true', 'common myths'],
                response:
                    'There are many myths about blood donation. For example, donating blood doesn’t weaken your immune system, and it’s safe for healthy individuals. Ask me about any specific myths you’ve heard!',
            },
            // Incentives and Rewards
            {
                patterns: ['incentives', 'rewards', 'do i get paid', 'compensation'],
                response:
                    'Blood donation is typically a voluntary act, and most centers don’t offer payment. However, some may provide small incentives like gift cards, t-shirts, or snacks as a thank you. Check with your local center for details.',
            },
            // Emergency Donations
            {
                patterns: ['emergency', 'urgent', 'blood needed', 'crisis'],
                response:
                    'In emergencies, blood banks may urgently need donations, especially for specific blood types. Contact your local blood bank or organizations like the Red Cross to find out how you can help during a crisis.',
            },
            // Vegetarian/Vegan Donors
            {
                patterns: ['vegetarian', 'vegan', 'diet', 'can vegans donate'],
                response:
                    'Vegetarians and vegans can donate blood as long as they meet eligibility criteria, including adequate iron levels. Ensure you’re eating iron-rich foods like spinach, lentils, or fortified cereals before donating.',
            },
            // Donation for Specific People
            {
                patterns: ['donate for someone', 'specific person', 'directed donation', 'family member'],
                response:
                    'Directed donations, where you donate blood for a specific person, are possible at some centers but require coordination. Contact the donation center or hospital to arrange this type of donation.',
            },
            // Fear of Needles
            {
                patterns: ['afraid of needles', 'scared of needles', 'needle phobia', 'fearful'],
                response:
                    'It’s normal to feel nervous about needles! The needle prick is quick, lasting only a second, and staff are trained to make you comfortable. Try deep breathing or distracting yourself during the process.',
            },
            // Donation and Exercise
            {
                patterns: ['exercise', 'workout', 'can i exercise after', 'sports'],
                response:
                    'Avoid strenuous exercise for 24 hours after donating blood to prevent dizziness or fatigue. Light activities like walking are usually fine, but listen to your body and rest if needed.',
            },
            // Blood Donation and Menstruation
            {
                patterns: ['period', 'menstruation', 'can i donate during period'],
                response:
                    'You can donate blood during your menstrual period if you feel well and meet the hemoglobin and health requirements. Ensure you’re eating iron-rich foods to maintain healthy iron levels.',
            },
            // Blood Donation for Rare Blood Types
            {
                patterns: ['rare blood type', 'uncommon blood', 'special blood'],
                response:
                    'If you have a rare blood type, your donation is especially valuable! Contact your local blood bank to learn how your blood type can help patients with specific needs.',
            },
            // Donation and Allergies
            {
                patterns: ['allergies', 'allergic', 'can i donate with allergies', 'allergy'],
                response:
                    'Mild allergies, like seasonal allergies, usually don’t prevent you from donating blood if you’re otherwise healthy. However, if you’re on certain allergy medications or feeling unwell, check with the donation center.',
            },
            // Blood Donation and Chronic Illness
            {
                patterns: ['chronic illness', 'long-term condition', 'chronic disease'],
                response:
                    'Chronic illnesses like asthma or arthritis may not disqualify you from donating blood if they’re well-managed and you meet other criteria. Consult with the donation center for specific guidance.',
            },
            // Blood Donation and Surgery
            {
                patterns: ['surgery', 'operation', 'had surgery', 'post-surgery'],
                response:
                    'If you’ve had surgery, you typically need to wait at least 6 months or until you’re fully recovered before donating blood. Check with the donation center for specific deferral periods.',
            },
            // Blood Donation and Infections
            {
                patterns: ['infection', 'infected', 'bacterial infection', 'viral infection'],
                response:
                    'You cannot donate blood if you have an active infection. You’ll need to wait until you’re fully recovered and off antibiotics for at least 7-14 days, depending on the infection. Contact the donation center for details.',
            },
            // Blood Donation and Heart Conditions
            {
                patterns: ['heart condition', 'heart disease', 'heart attack', 'cardiac'],
                response:
                    'Heart conditions may disqualify you from donating blood, depending on severity and treatment. Discuss your condition with the donation center staff to determine eligibility.',
            },
            // Blood Donation and Hepatitis
            {
                patterns: ['hepatitis', 'liver disease', 'had hepatitis'],
                response:
                    'If you’ve had hepatitis, you may be permanently deferred from donating blood, depending on the type and when you had it. Contact the donation center for specific guidelines.',
            },
            // Blood Donation and HIV/AIDS
            {
                patterns: ['hiv', 'aids', 'hiv positive'],
                response:
                    'Individuals with HIV or AIDS are permanently deferred from donating blood due to the risk of transmission. This is a standard safety protocol.',
            },
            // Blood Donation and Malaria
            {
                patterns: ['malaria', 'had malaria', 'malaria risk'],
                response:
                    'If you’ve had malaria or traveled to a malaria-risk area, you may need to wait 3 years after treatment or 12 months after travel to donate blood. Check with the donation center for details.',
            },
            // Blood Donation and Cancer Survivors
            {
                patterns: ['cancer survivor', 'had cancer', 'cancer treatment'],
                response:
                    'Cancer survivors may be eligible to donate blood if they’ve been cancer-free for at least 12 months and meet other health criteria. Consult with the donation center for specific guidelines.',
            },
            // Blood Donation and Blood Transfusions
            {
                patterns: ['transfusion', 'received blood', 'had transfusion'],
                response:
                    'If you’ve received a blood transfusion, you typically need to wait 12 months before donating blood to ensure safety. Contact the donation center for confirmation.',
            },
            // Blood Donation and Organ Transplants
            {
                patterns: ['organ transplant', 'transplant', 'had transplant'],
                response:
                    'Individuals who have received an organ transplant are usually permanently deferred from donating blood due to immunosuppressive medications and health risks. Check with the donation center for specifics.',
            },
            // Blood Donation and Autoimmune Diseases
            {
                patterns: ['autoimmune', 'lupus', 'rheumatoid arthritis', 'multiple sclerosis'],
                response:
                    'Autoimmune diseases may prevent you from donating blood, depending on the condition and medications. Discuss your specific condition with the donation center.',
            },
            // Blood Donation and Seizures
            {
                patterns: ['seizures', 'epilepsy', 'had seizure'],
                response:
                    'If you have a history of seizures, you may be deferred from donating blood, especially if you’re on anti-seizure medications. Check with the donation center for eligibility details.',
            },
            // Blood Donation and Asthma
            {
                patterns: ['asthma', 'inhaler', 'breathing problems'],
                response:
                    'Mild asthma usually doesn’t prevent you from donating blood if it’s well-controlled and you’re not experiencing symptoms. Severe asthma or certain medications may require deferral. Consult the donation center.',
            },
            // Blood Donation and Thyroid Conditions
            {
                patterns: ['thyroid', 'hypothyroidism', 'hyperthyroidism'],
                response:
                    'Thyroid conditions like hypothyroidism or hyperthyroidism don’t typically prevent blood donation if they’re well-managed and you meet other criteria. Check with the donation center.',
            },
            // Blood Donation and Dental Work
            {
                patterns: ['dental work', 'tooth extraction', 'dental surgery'],
                response:
                    'Minor dental work like cleanings may require a 24-hour wait before donating. Major procedures like extractions or root canals may require a longer deferral, typically 72 hours. Contact the donation center for details.',
            },
            // Blood Donation and Vaccinations
            {
                patterns: ['vaccine', 'vaccination', 'got a shot', 'immunization'],
                response:
                    'Some vaccines, like flu or tetanus, may require a short deferral (e.g., 2 weeks), while others don’t affect eligibility. Provide details about your vaccination to the donation center.',
            },
            // Blood Donation and Weight Loss
            {
                patterns: ['weight loss', 'lost weight', 'dieting'],
                response:
                    'Significant weight loss may affect your eligibility if it drops you below the minimum weight of 110 pounds or impacts your health. Ensure you’re healthy and meet all criteria before donating.',
            },
            // Blood Donation and Hydration
            {
                patterns: ['hydration', 'drink water', 'how much water'],
                response:
                    'Staying hydrated is crucial before and after donating blood. Drink at least 16 ounces of water or non-caffeinated fluids before your donation to help your body adjust.',
            },
            // Blood Donation and Fainting
            {
                patterns: ['fainting', 'pass out', 'faint after donating'],
                response:
                    'Fainting after donating is rare but can happen, especially if you’re dehydrated or haven’t eaten. Eat a meal, stay hydrated, and rest after donating to minimize this risk.',
            },
            // Blood Donation and Bruising
            {
                patterns: ['bruising', 'bruise', 'mark after donation'],
                response:
                    'Some donors may experience minor bruising at the needle site, which usually fades within a few days. Apply a cold pack if needed and avoid heavy lifting with that arm.',
            },
            // Blood Donation and Fatigue
            {
                patterns: ['tired', 'fatigue', 'feel weak after'],
                response:
                    'Feeling tired after donating is normal for some people. Rest, eat nutritious foods, and stay hydrated to recover quickly. Avoid strenuous activities for 24 hours.',
            },
            // Blood Donation and Iron Supplements
            {
                patterns: ['iron supplements', 'taking iron', 'iron pills'],
                response:
                    'Taking iron supplements is fine, but if you’re taking them for anemia, you may need to wait until your hemoglobin levels are normal. Check with the donation center.',
            },
            // Blood Donation and Travel Vaccinations
            {
                patterns: ['travel vaccine', 'yellow fever', 'typhoid vaccine'],
                response:
                    'Certain travel vaccines, like yellow fever, may require a deferral period (e.g., 2 weeks) before donating blood. Provide details about your vaccinations to the donation center.',
            },
            // Blood Donation and Sexual Orientation
            {
                patterns: ['gay', 'lgbt', 'sexual orientation', 'msm'],
                response:
                    'Eligibility to donate blood is based on specific risk factors, not sexual orientation. Some regions have deferral policies for men who have sex with men due to HIV risk. Check with your local donation center for current guidelines.',
            },
            // Blood Donation and IV Drug Use
            {
                patterns: ['iv drugs', 'drug use', 'intravenous drugs'],
                response:
                    'Individuals with a history of intravenous drug use are typically permanently deferred from donating blood due to the risk of bloodborne infections. Contact the donation center for details.',
            },
            // Blood Donation and Hemochromatosis
            {
                patterns: ['hemochromatosis', 'high iron', 'iron overload'],
                response:
                    'If you have hemochromatosis, you may be eligible to donate blood as a therapeutic measure under medical supervision. Contact the donation center for specific protocols.',
            },
            // Blood Donation and Sickle Cell Trait
            {
                patterns: ['sickle cell', 'sickle cell trait', 'sickle cell anemia'],
                response:
                    'Individuals with sickle cell trait can usually donate blood if they’re healthy and meet other criteria. Those with sickle cell anemia cannot donate. Check with the donation center.',
            },
            // Blood Donation and Cold or Flu
            {
                patterns: ['cold', 'flu', 'sick', 'cough'],
                response:
                    'If you have a cold or flu, you must wait until you’re fully recovered and symptom-free for at least 7 days before donating blood. Contact the donation center for guidance.',
            },
            // Blood Donation and Antibiotics
            {
                patterns: ['antibiotics', 'on antibiotics', 'taking antibiotics'],
                response:
                    'If you’re taking antibiotics for an infection, you’ll need to wait at least 7-14 days after finishing the course before donating blood. Check with the donation center for specifics.',
            },
            // Blood Donation and Blood Pressure Medications
            {
                patterns: ['blood pressure medication', 'hypertension pills', 'bp meds'],
                response:
                    'Most blood pressure medications don’t disqualify you from donating blood if your condition is well-controlled. Provide details about your medication to the donation center.',
            },
            // Blood Donation and Cholesterol
            {
                patterns: ['cholesterol', 'high cholesterol', 'statins'],
                response:
                    'High cholesterol or cholesterol medications like statins typically don’t affect blood donation eligibiity. Ensure you meet other health criteria and consult the donation center.',
            },
            // Blood Donation and Mental Health
            {
                patterns: ['mental health', 'depression', 'anxiety', 'therapy'],
                response:
                    'Mild mental health conditions like depression or anxiety don’t usually prevent blood donation if you’re otherwise healthy. Certain medications may require deferral—check with the donation center.',
            },
            // Blood Donation and Pregnancy Loss
            {
                patterns: ['miscarriage', 'pregnancy loss', 'abortion'],
                response:
                    'After a miscarriage or abortion, you typically need to wait at least 6 months before donating blood to ensure full recovery. Consult with the donation center for specific guidelines.',
            },
            // Blood Donation and Hormone Therapy
            {
                patterns: ['hormone therapy', 'hormones', 'transgender', 'hrt'],
                response:
                    'Hormone replacement therapy, including for transgender individuals, doesn’t typically prevent blood donation if you meet other health criteria. Provide details to the donation center.',
            },
            // Blood Donation and Recent Hospitalization
            {
                patterns: ['hospitalized', 'in hospital', 'recent hospital stay'],
                response:
                    'If you were recently hospitalized, you may need to wait 6 months or until fully recovered before donating blood. Contact the donation center for specific deferral periods.',
            },
            // Blood Donation and Minor Injuries
            {
                patterns: ['cut', 'injury', 'minor injury', 'scrape'],
                response:
                    'Minor injuries like cuts or scrapes don’t usually prevent blood donation if they’re healed and not infected. Ensure the injury won’t interfere with the donation process.',
            },
            // Blood Donation and Blood Clots
            {
                patterns: ['blood clot', 'thrombosis', 'clotting disorder'],
                response:
                    'A history of blood clots or clotting disorders may disqualify you from donating blood, depending on the condition and treatment. Consult with the donation center.',
            },
            // Blood Donation and Recent Vaccinations
            {
                patterns: ['recent vaccine', 'got vaccinated', 'new vaccine'],
                response:
                    'Some recent vaccinations may require a deferral period (e.g., 2 weeks for live vaccines). Provide details about your vaccination to the donation center for eligibility guidance.',
            },
            // Blood Donation and Religious Beliefs
            {
                patterns: ['religion', 'religious beliefs', 'faith and donation'],
                response:
                    'Blood donation is compatible with most religious beliefs, but some faiths have specific guidelines. If you have concerns, discuss them with your religious leader or the donation center.',
            },
            // Blood Donation and Fasting
            {
                patterns: ['fasting', 'not eating', 'ramadan', 'intermittent fasting'],
                response:
                    'Avoid donating blood while fasting, as it can lead to dehydration or dizziness. Eat a nutritious meal and stay hydrated before donating, and schedule your donation after breaking your fast.',
            },
            // Blood Donation and Tattoos Abroad
            {
                patterns: ['tattoo abroad', 'tattoo overseas', 'foreign tattoo'],
                response:
                    'Tattoos received abroad may require a 12-month deferral due to varying sterility standards. Provide details about your tattoo to the donation center for eligibility guidance.',
            },
            // Blood Donation and Chronic Fatigue
            {
                patterns: ['chronic fatigue', 'always tired', 'fatigue syndrome'],
                response:
                    'Chronic fatigue syndrome or similar conditions may disqualify you from donating blood if they impact your overall health. Consult with the donation center for specific guidance.',
            },
            // Blood Donation and Recent Piercing
            {
                patterns: ['recent piercing', 'new piercing', 'ear piercing'],
                response:
                    'A recent piercing may require a 3-12 month deferral, depending on sterility standards and local regulations. Ensure the piercing is healed and check with the donation center.',
            },
            // Blood Donation and Hemophilia
            {
                patterns: ['hemophilia', 'bleeding disorder', 'clotting issues'],
                response:
                    'Individuals with hemophilia or other bleeding disorders are typically permanently deferred from donating blood due to health risks. Contact the donation center for confirmation.',
            },
            // Blood Donation and Recent Blood Test
            {
                patterns: ['recent blood test', 'had blood drawn', 'lab test'],
                response:
                    'If you had a recent blood test involving a significant blood draw, you may need to wait a few weeks before donating to ensure your blood volume is restored. Check with the donation center.',
            },
            // Blood Donation and Travel to Tropical Areas
            {
                patterns: ['tropical travel', 'jungle', 'safari', 'tropical country'],
                response:
                    'Travel to tropical areas with diseases like Zika or dengue may require a deferral period, often 28 days to 12 months. Provide your travel history to the donation center.',
            },
            // Blood Donation and Recent Chemotherapy
            {
                patterns: ['chemotherapy', 'chemo', 'cancer treatment'],
                response:
                    'If you’ve had chemotherapy, you’ll typically need to wait at least 12 months after completing treatment and be cancer-free to donate blood. Consult with the donation center.',
            },
            // Blood Donation and Recent Radiation Therapy
            {
                patterns: ['radiation therapy', 'radiation treatment', 'radiotherapy'],
                response:
                    'Radiation therapy may require a deferral period, often 12 months after completion, depending on your health status. Contact the donation center for eligibility details.',
            },
            // Blood Donation and Recent Cosmetic Procedures
            {
                patterns: ['botox', 'filler', 'cosmetic procedure', 'plastic surgery'],
                response:
                    'Minor cosmetic procedures like Botox may require a short deferral (e.g., 24 hours), while invasive procedures may need longer. Check with the donation center for specifics.',
            },
            // Default Fallback with Suggestions
            {
                patterns: [],
                response: "I'm sorry, I didn't quite catch that. Here are some things you can ask me:\n- What are the eligibility criteria for donating blood?\n- How do I prepare for a blood donation?\n- What are the benefits of donating blood?\n- Where is the nearest blood donation center?\nFeel free to ask any of these or other questions related to blood donation!",
            },
        ];

        for (const item of responses) {
            if (item.patterns.length === 0) continue; // Skip the default fallback

            for (const pattern of item.patterns) {
                if (lowerInput.includes(pattern)) {
                    return item.response;
                }
            }
        }

        // If no patterns matched, return the fallback response with suggestions
        const fallback = responses.find((item) => item.patterns.length === 0);
        return fallback ? fallback.response : "I'm sorry, I didn't quite catch that. Could you please rephrase or ask another question about blood donation?";
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
            {/* Header */}
            <motion.div
                className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            <RiWechatLine className={`text-3xl ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                        </motion.div>
                        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                            AI Blood Donation Assistant
                        </h1>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
                    >
                        {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
                    </motion.button>
                </div>
            </motion.div>

            {/* Chat Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-6xl mx-auto w-full">
                <AnimatePresence>
                    {messages.map((message) => (
                        <motion.div
                            key={message.id}
                            variants={messageVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className={`flex ${message.sender === 'User' ? 'justify-end' : 'justify-start'}`}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`flex items-start space-x-2 max-w-xl ${message.sender === 'User' ? 'flex-row-reverse' : 'flex-row'
                                    }`}
                            >
                                <div className={`p-2 rounded-full ${message.sender === 'User'
                                    ? isDarkMode ? 'bg-red-600' : 'bg-red-500'
                                    : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                                    }`}>
                                    {message.sender === 'User' ? (
                                        <FaUser className="text-white" />
                                    ) : (
                                        <FaRobot className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
                                    )}
                                </div>
                                <div className={`px-4 py-2 rounded-2xl ${message.sender === 'User'
                                    ? isDarkMode ? 'bg-red-600 text-white' : 'bg-red-500 text-white'
                                    : isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                                    }`}>
                                    <p className="text-sm">{message.text}</p>
                                    <p className={`text-xs mt-1 ${message.sender === 'User'
                                        ? 'text-red-200'
                                        : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                        }`}>
                                        {message.timestamp.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* AI Typing Indicator */}
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="flex items-center space-x-2"
                        >
                            <div className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                <FaRobot className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
                            </div>
                            <div className="flex space-x-1">
                                {[1, 2, 3].map((dot) => (
                                    <motion.div
                                        key={dot}
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 0.5, repeat: Infinity, delay: dot * 0.1 }}
                                        className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <motion.div
                className={`p-4 border-t ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <form onSubmit={handleSendMessage} className="max-w-6xl mx-auto">
                    <div className="flex items-center space-x-4">
                        <motion.div
                            className={`flex-1 flex items-center space-x-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                                }`}
                            whileFocus={{ scale: 1.02 }}
                        >
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type your message..."
                                className={`flex-1 bg-transparent focus:outline-none ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-800 placeholder-gray-500'
                                    }`}
                                disabled={isLoading}
                            />
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                type="button"
                                className={`p-2 rounded-full ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                            >
                                <FaMicrophone />
                            </motion.button>
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                            disabled={isLoading || !newMessage.trim()}
                            className={`p-4 rounded-full ${isDarkMode
                                ? 'bg-red-600 text-white hover:bg-red-700'
                                : 'bg-red-500 text-white hover:bg-red-600'
                                } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            <FaPaperPlane />
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default LiveChat;