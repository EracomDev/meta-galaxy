import { ethers } from 'ethers';
import ContractDetails from '../Contracts/ContractDetails';

export default async function GetTriggers (id) {
    // alert();
    const { ethereum } = window;
    if(ethereum){
        try{
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer); 
        console.log( 'contractinstance',contractinstance)
        // await contractinstance.claim(id);
        const inc = await contractinstance.enableTrigger.call();
        // alert('success');
        let val = parseInt(inc)
        console.log('triggers' , String(val))

        const triggers = await contractinstance.triggers(val);
        console.log('triggers',triggers);

        return triggers;

        }catch(e){
            console.log(e);
        }
    }
}