import { ethers } from 'ethers';
import ContractDetails from '../Contracts/ContractDetails';
import React from 'react'; 


    
export default async function GetMatrix (acc, num) {
    try{
    var arr = [];
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer); 

    console.log("contractinstance " , contractinstance);
    
    let bl = await contractinstance.Matrix(acc , num);
    let bla = await contractinstance.currentCycle(acc , num);
    

    console.log("bl",bl)
    const cycleInfo = await contractinstance.cycleInfo1(acc , num);
    console.log("cycleInfo",cycleInfo);

    return {matrix:bl , cycleInfo:cycleInfo, currentCycle:bla};
}catch(e){
    alert();
    console.log(e);
}
}
 