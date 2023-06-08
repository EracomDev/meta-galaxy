import { ethers } from 'ethers';
import ContractDetails from '../Contracts/ContractDetails';

export default async function AddressToId (id) {
    const { ethereum } = window;
    if(ethereum){
        try{
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer); 
        // console.log( 'contractinstance',contractinstance)
        let data = await contractinstance.addressToId(id);
        console.log('addressToId' , data)
        return data;
        }catch(e){
            console.log(e);
        }
    }
}