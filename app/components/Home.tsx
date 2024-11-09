import { TokenDapp } from './TokenDapp'
import { useWallet } from '@alephium/web3-react'
import { tokenFaucetConfig } from '../services/utils'
import { ConnectModal } from './ConnectModal'

export default function Home() {
  const { connectionStatus } = useWallet()

  return (
    <>
      <div>
        <ConnectModal />

        {connectionStatus === 'connected' && <TokenDapp config={tokenFaucetConfig} />}
      </div>
    </>
  )
}
