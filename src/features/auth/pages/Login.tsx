import LoginForm from '../components/LoginForm';
import FormLayout from '../../../Shared/layout/FormLayout';
import React from 'react';
export default function Login() {
  return (
    <FormLayout currentForm="Login">
      <LoginForm />
    </FormLayout>
  );
}
