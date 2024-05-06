import RegisterForm from '../components/RegisterForm';
import FormLayout from '../../../Shared/layout/FormLayout';
import React from 'react';
export default function Register() {
  return (
    <FormLayout currentForm="Register">
      <RegisterForm />
    </FormLayout>
  );
}
