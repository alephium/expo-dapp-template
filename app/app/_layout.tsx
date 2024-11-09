import { tokenFaucetConfig } from '@/services/utils';
import { AlephiumWalletProvider } from '@alephium/web3-react';
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AlephiumWalletProvider
    theme='web95'
    network={tokenFaucetConfig.network}
    addressGroup={tokenFaucetConfig.groupIndex}
    >
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </AlephiumWalletProvider>
  );
}
