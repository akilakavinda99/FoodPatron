var errors = {};
// email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
// phone validation pattern
const phonePattern = /^[0]{1}[0-9]{9}$/;

export const DonationValidation = (values) => {
    errors = {}

    if (!values.donationTitle) {
        errors.donationTitle = 'Donation title is required';
    } 

    if (!values.donationDescription) {
        errors.donationDescription = 'Description is required';
    } else if (values.donationDescription.length < 10) {
        errors.donationDescription = 'Description must be at least 10 characters';
    }

    if (!values.location) {
        errors.location = 'Location is required';
    }

    if (!values.donationImage) {
        errors.donationImage = 'Donation Image is required';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.contactNumber) {
        errors.contactNumber = 'Contact Number is required';
    } else if (!phonePattern.test(values.contactNumber)) {
        errors.contactNumber = 'Invalid phone number';
    }

    return errors;
}
