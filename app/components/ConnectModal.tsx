import React, { useCallback, useEffect, useState } from 'react';
import { useConnect, useConnectSettingContext, useWallet } from '@alephium/web3-react';
import { Button, Modal, View } from 'react-native';

export function ConnectModal() {
  const [opened, setOpened] = useState(false)
  const [connectClicked, setConnectClicked] = useState(false)
  const context = useConnectSettingContext()

  const { connect, disconnect } = useConnect()
  const { connectionStatus } = useWallet()

  useEffect(() => {
    if (connectClicked && opened) {
      setConnectClicked(false)
      connect().then(() => {
        setOpened(false)
      })
    }
  }, [connectClicked, opened, setConnectClicked, connect, setOpened])

  const onConnect = useCallback((id: 'injected' | 'walletConnect' | 'desktopWallet') => {
    context.setConnectorId(id)
    setConnectClicked(true)
  }, [context, setConnectClicked])

  const onDisconnect = useCallback(async () => {
    await disconnect()
  }, [disconnect])

  return (
    <div>
      {connectionStatus === 'connected' ? (
        <div>
          <Button title="Disconnect" onPress={onDisconnect} />
        </div>
      ) : (
        <div>
          <Button title="Connect" onPress={() => setOpened(true)} />
          <Modal
            visible={opened}
            onRequestClose={() => setOpened(false)}
          >
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
              <Button title="Extension Wallet" onPress={() => onConnect('injected')} />
              <Button title="Wallet Connect" onPress={() => onConnect('walletConnect')} />
              <Button title="Desktop Wallet" onPress={() => onConnect('desktopWallet')} />
            </View>
          </Modal>
        </div>
      )}
    </div>
  );
}
