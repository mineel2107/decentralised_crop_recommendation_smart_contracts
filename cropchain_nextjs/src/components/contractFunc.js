"use client";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { MyContractABI } from "../contracts/MyContractABI.js";

const MyContractAddress = "0x977b36cB930d596551Fb4519DC007e3908A2372D";

export default function ContractFunc() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function initWeb3() {
      // Check if Web3 is injected by the browser (MetaMask)
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);

        try {
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);
        } catch (error) {
          console.error("User denied account access");
        }
      } else {
        const web3 = new Web3(
          new Web3.providers.HttpProvider(process.env.ALCHEMY_API_KEY_HTTPS)
        );
        setWeb3(web3);
      }
    }

    initWeb3();
  }, []);

  useEffect(() => {
    if (web3) {
      const contractInstance = new web3.eth.Contract(
        MyContractABI,
        MyContractAddress
      );
      setContract(contractInstance);
    }
  }, [web3]);

  const registerCrop = async (_name, _landArea, _cropName) => {
    if (contract && accounts.length > 0) {
      await contract.methods
        .registerCrop(_name, _landArea, _cropName)
        .send({ from: accounts[0] });
    }
  };
  const modifyCrop = async (_name, _landArea, _cropName) => {
    if (contract && accounts.length > 0) {
      await contract.methods
        .registerCrop(_name, _landArea, _cropName)
        .send({ from: accounts[0] });
    }
  };

  const recommendCrop = async () => {
    if (contract) {
      const recommendedCrop = await contract.methods.recommendCrop().call();
      return recommendedCrop;
    }
  };

  return { registerCrop, recommendCrop, modifyCrop };
}
