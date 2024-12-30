import { useWallet , useConnection} from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useState } from 'react';
import { SignMessage } from './SignMessage';
import { SendTokens } from './SendTokens';
export const Airdrop = () => {

    const wallet = useWallet()
    const {connection} = useConnection()

    const [balance, setBalance] = useState(0);

    async function getBalance() { 
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
            setBalance(balance);
        }
    }

    async function handleAirdrop() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped sol");
    }

    


    getBalance();
    console.log(balance)
    return <div>
            <h1>Airdrop</h1>          
             {wallet.publicKey?.toString()}

             <div>
                    <div id="balance">You have {balance} SOL</div>
       
             </div>

            <div>
                Hii Welcome to Airdrop Page 

            </div>
                <input id="amount" type="text" placeholder="Amount" />
                <button onClick={handleAirdrop}>Airdrop Me</button>
                <SignMessage />
                <SendTokens/>
    </div>
    
}