import { Slot } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { View } from "react-native";

export default function RootLayout() {
  return (
      <SafeScreen>
        <Slot />
      </SafeScreen>
  );
}
