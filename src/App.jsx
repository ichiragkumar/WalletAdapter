
import './App.css'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {


  return (
    <>
      <Wallet />
    </>
  )
}


function Wallet (){
  const newtwrok = WalletAdapterNetwork.Devnet;
  const endPoint = useMemo(() => clusterApiUrl(newtwrok), [newtwrok]);

  const wallets = useMemo(()=> [new UnsafeBurnerWalletAdapter()],[newtwrok])
  return (
   <ConnectionProvider endpoint={endPoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
        </WalletModalProvider>
      </WalletProvider>
   </ConnectionProvider>
  )
}
export default App
