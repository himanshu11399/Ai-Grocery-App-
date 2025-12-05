import { Stack } from "expo-router";
import React from 'react'

const OnboardingLayout = () => {
  return (
   <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="screen1" />
      <Stack.Screen name="screen2" />
      <Stack.Screen name="screen3" />
    </Stack>
  )
}

export default OnboardingLayout