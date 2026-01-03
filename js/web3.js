let provider;
let signer;
let contract;

const contractAddress = "PASTE_YOUR_CONTRACT_ADDRESS_HERE";
const contractABI = abi; // from JSON file

async function connectWallet() {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer);
    alert("Wallet Connected");
  } else {
    alert("Install MetaMask");
  }
}
