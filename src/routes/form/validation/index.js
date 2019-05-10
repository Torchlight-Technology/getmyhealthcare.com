import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  numberOnPolicy: Yup.mixed()
    .oneOf(['1', '2', '3', '4+'])
    .required('Please select'),
  home_zip: Yup.string()
    .required('Enter ZIP')
    .test('len', 'Zip must be exactly 5 characters', val => val && val.replace(/[^0-9]/g, "").length === 5 )
    .test('testing-zip', 'Zip does not exist',
      async val => {
        let tempZip = val.replace(/[^0-9]/g, "");
        if(tempZip && tempZip.length === 5) {
          let response = await fetch(`https://api.zippopotam.us/us/${tempZip}`)
          return !response.ok ? false : true;
        }
      }
    ),
  dateOfBirth: Yup.string()
    .test('date-len', 'Date must be exactly 8 characters', val => val && val.replace(/[^0-9]/g, "").length === 8)
    .required('Required'),
  gender: Yup.mixed()
    .oneOf(['M', 'F'])
    .required('Gender is required'),
  tobacco: Yup.mixed()
    .oneOf(['1', '0'])
    .required('Your tobacco usage is required.'),
  income: Yup.number()
    .required('Your income must be included'),
  coverageType: Yup.mixed()
    .oneOf(['Bronze', 'Silver', 'Gold', 'Platinum'])
    .required('Please select your coverage type.'),
  name_first: Yup.string()
    .required('Required'),
  name_last: Yup.string()
    .required('Required'),
  // Apply mask
  home_street: Yup.string()
    .required('Please enter street address'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  phone_home: Yup.string()
    .test('phone-len', 'Phone number must be exactly 8 characters long', val => val && val.replace(/[^0-9]/g, "").length === 10)
    .required('Phone number is required')
});