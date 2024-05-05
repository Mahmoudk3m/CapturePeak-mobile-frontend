import LoginForm from '../components/LoginForm';
import AuthLayout from '../layout/AuthLayout';
import React from 'react';
export default function Login() {
  return (
    <AuthLayout currentForm="Login">
      <LoginForm />
    </AuthLayout>
  );
}
