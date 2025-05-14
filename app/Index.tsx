import { Redirect } from 'expo-router';
import React = require('react');

export default function Index() {
  return <Redirect href="/login" />;
}
