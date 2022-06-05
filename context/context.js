import { createContext, useState, useEffect } from 'react'
import {
  dogeAbi,
  daiAbi,
  linkAbi,
  usdcAbi,
  dogeAddress,
  daiAddress,
  linkAddress,
  usdcAddress,
} from '../lib/constant'
import { useMoralis, useMoralisQuery } from 'react-moralis'

export const CoinMarketContext = createContext(undefined)

export const CoinMarketProvider = ({ children }) => {
  const { isAuthenticated, user, Moralis } = useMoralis()
  // useMoralisQuery()
  const [currentAccount, setCurrentAccount] = useState('')
  const [openByCryptoModel, setOpenByCryptoModel] = useState(false)
  const [fromToken, setFromToken] = useState('')
  const [toToken, setToToken] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      const account = user.get('ethAddress')
      setCurrentAccount(account)
    }
  }, [isAuthenticated])

  const getContractAddress = () => {
    if (fromToken === 'Dai') {
      return daiAddress
    } else if (fromToken === 'Doge') {
      return dogeAddress
    } else if (fromToken === 'Link') {
      return linkAddress
    } else if (fromToken === 'Usdc') {
      return usdcAddress
    }
  }
  const getToAddress = () => {
    if (toToken === 'Dai') {
      return daiAddress
    } else if (toToken === 'Doge') {
      return dogeAddress
    } else if (toToken === 'Link') {
      return linkAddress
    } else if (toToken === 'Usdc') {
      return usdcAddress
    }
  }
  const getToAbi = () => {
    if (toToken === 'Dai') {
      return daiAbi
    } else if (toToken === 'Doge') {
      return dogeAbi
    } else if (toToken === 'Link') {
      return linkAbi
    } else if (toToken === 'Usdc') {
      return usdcAbi
    }
  }
  const mint = async () => {
    if (!isAuthenticated) return
    try {
      if (fromToken === 'ETH') {
        await Moralis.enableWeb3()
        const contractAddress = getContractAddress()
        const abi = getToAbi()

        let options = {
          contractAddress,
          functionName: 'mint',
          abi,
          params: {
            to: currentAccount,
            amount: Moralis.Units.Token(amount),
          },
        }
        await sendEth()
        const transaction = await Moralis.executeFunction(options)
        const receipt = await transaction.wait(4)
        console.log('receipt', receipt)
      } else {
        swapTokens()
      }
    } catch (err) {
      console.log(err.message)
    }
  }
  const swapTokens = async () => {
    if (!isAuthenticated) return
    if (fromToken === toToken) {
      return alert('You cannot swap the same token')
    }
    try {
      await Moralis.enableWeb3()
      const fromOptions = {
        type: 'erc20',
        amount: Moralis.Units.Token(amount, '18'),
        receiver: getContractAddress(),
        contractAddress: getContractAddress(),
      }
      const toMintAddress = {
        contractAddress: getToAddress(),
        functionName: 'mint',
        abi: getToAbi(),
        params: {
          to: currentAccount,
          amount: Moralis.Units.Token(amount, '18'),
        },
      }
      let fromTransaction = await Moralis.transfer(fromOptions)
      const toTransaction = await Moralis.executeFunction(toMintAddress)
      let fromReceipt = await fromTransaction.wait()
      const toReceipt = await toTransaction.wait()
      console.log({ fromReceipt, toReceipt })
    } catch (e) {
      console.error(e.message)
    }
  }
  const sendEth = async () => {
    if (!isAuthenticated) return
    const contractAddress = getToAddress()
    let options = {
      type: 'native',
      amount: Moralis.Units.ETH(0.01),
      receiver: contractAddress,
    }
    const transaction = await Moralis.transfer(options)
    const receipt = await transaction.wait(4)
    console.log('receipt', receipt)
  }
  const getTopTenCoins = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      const data = await res.json()
      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }
  const openModal = () => {
    setOpenByCryptoModel(true)
  }
  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
        openByCryptoModel,
        setOpenByCryptoModel,
        fromToken,
        setFromToken,
        toToken,
        setToToken,
        amount,
        setAmount,
        mint,
        openModal,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
}
