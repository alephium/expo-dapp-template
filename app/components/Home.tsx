import { TokenDapp } from './TokenDapp'
import { AlephiumConnectButton, useWallet } from '@alephium/web3-react'
import { tokenFaucetConfig } from '../services/utils'

export default function Home() {
  const { connectionStatus } = useWallet()

  return (
    <>
      <div>
        <AlephiumConnectButton />

        {connectionStatus === 'connected' && <TokenDapp config={tokenFaucetConfig} />}
      </div>
    </>
  )
}
