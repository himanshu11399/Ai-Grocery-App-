import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import MainSplashscreen from "./splashscreen";


export default function RootLayout() {
  const [loading, isloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isloading(false);
    }, 2000);
  });
  return (
    loading == true ? (
      <MainSplashscreen />
    ) : (
      <Stack screenOptions={{headerShown:false}} >
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="auth" />  
      </Stack>
    )

  )
}
