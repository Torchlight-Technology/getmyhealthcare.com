import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  household_size: Yup.mixed()
    .oneOf(['1', '2', '3', '4+'])
    .required('Please select'),
  dateOfBirth: Yup.string()
    .test('date-len', 'Date must be at 8 characters long', val => val && val.replace(/[^0-9]/g, "").length === 8)
    .required('Required'),
  gender: Yup.mixed()
    .oneOf(['M', 'F'])
    .required('Gender is required'),
  tobacco: Yup.mixed()
    .oneOf(['1', '0'])
    .required('Your tobacco usage is required.'),
  income: Yup.number()
    .required('Your income must be included'),
  life_event: Yup.mixed()
    .oneOf(['no', 'lose60', 'lost', 'marital', 'child', 'death', 'move', 'job'])
    .required('Please select if you had a life event.'),
  existing_conditions: Yup.mixed()
    .oneOf(['none', 'aids_hiv', 'asthma', 'cholesterol', 'depression', 'diabetes', 'liver_disease', 'alzheimers_disease', 'lung_disease', 'drug_abuse', 'mental_illness', 'cancer', 'heart_disease', 'high_blood_pressure', 'pulmonary_disease', 'stroke', 'kidney_disease', 'ulcer', 'vascular_disease'])
    .required('Please select an existing condition.'),
  name_first: Yup.string()
    .required('Required'),
  name_last: Yup.string()
    .required('Required'),
  home_street: Yup.string()
    .min(6, 'Street address must be at least 6 characters')
    .required('Please enter street address'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  phone_home: Yup.string()
    .matches(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, 'Not valid phone number')
    .test('phone_starts', 'Not valid phone number',val => val && val[1] !== '0' && val[1] !== '1' && val.substring(10, 14) !== '0000')
    .required('Phone number is required')
});
