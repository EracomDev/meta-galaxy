import {ethers } from 'ethers';
import ContractDetails from '../Contracts/ContractDetails';

    
export default async function Income (id) {
    const { ethereum } = window;
    if (ethereum) {
            const { ethereum } = window;
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer); 
                const incomes = await contractinstance.incomes(id);
                return incomes;
    }else{
        return [];
    } 
        
}
 
