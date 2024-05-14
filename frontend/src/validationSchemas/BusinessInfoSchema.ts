import * as yup from 'yup';

// Define the validation schema using Yup
const BusinessInformationSchema = yup.object().shape({
    description: yup.string().required("Description is required"),
    company_name: yup.string().required("Company name is required"),
    phone_number: yup.string().required("Phone number is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    social_media: yup.string(),
    facilities: yup.string(),
    vision: yup.string()
});

export default BusinessInformationSchema;
