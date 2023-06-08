import {ethers } from 'ethers';
import ContractDetails from '../Contracts/ContractDetails';

    
export default async function GetSlotIncome (id) {

   try{
            const { ethereum } = window;
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer); 

            const incomes = await contractinstance.slotIncome(id);
            console.log("slotData" , incomes)

            return incomes
    }catch(e){
        console.log(e)
    } 
        
}
 
