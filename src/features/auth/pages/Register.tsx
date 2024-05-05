import RegisterForm from '../components/RegisterForm';
import AuthLayout from '../layout/AuthLayout';
import React from 'react';
export default function Register() {
  return (
    <AuthLayout currentForm="Register">
      <RegisterForm />
    </AuthLayout>
  );
}
