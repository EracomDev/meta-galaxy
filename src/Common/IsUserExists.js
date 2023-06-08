import { ethers } from 'ethers';
import ContractDetails from '../Contracts/ContractDetails';

export default async function IsUserExists (id) {
    const { ethereum } = window;
    if(ethereum){
        try{
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer); 
        const bl = await contractinstance.isUserExists(id);
        console.log( bl);
        console.log(bl);
        return bl;
        }catch(e){
            console.log(e);
        }
    }
}