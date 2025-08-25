// "use client";

// import { Switch } from "@chakra-ui/react";
// import { useColorMode } from "@/components/ui/color-mode";

// function ColorModeSwitch() {
//   const { toggleColorMode, colorMode } = useColorMode();
//   return (
//     <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}>
//       Dark Mode
//     </Switch>
//   );
// }
//  export default ColorModeSwitch;

"use client";

import { Icon, Switch } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@/components/ui/color-mode";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Switch.Root
      colorPalette="blue"
      size="lg"
      checked={colorMode === "dark"}
      onCheckedChange={toggleColorMode}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
          <Icon as={FaMoon} color="yellow.400" />
        </Switch.Indicator>
      </Switch.Control>
      <Switch.Label whiteSpace="nowrap">Dark Mode</Switch.Label>
    </Switch.Root>
  );
}
export default ColorModeSwitch;
