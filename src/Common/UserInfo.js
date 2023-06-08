import {ethers } from 'ethers';
import ContractDetails from '../Contracts/ContractDetails';

    
export default async function UserInfo (id , func = "") {
    const { ethereum } = window;
    if (ethereum) {
            try{
            const { ethereum } = window;
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer); 
            console.log("contractinstance",contractinstance)
        if(func==""){    
             try{ 
            const userInfo = await contractinstance.users(id);
            const incomeInfo = [];//await contractinstance.incomeInfo(id);
            const EarningInfo = [];//await contractinstance.EarningInfo(id);
            const inc = await contractinstance.total_user.call();
            // console.log("userInfo : " + userInfo[0]);

            return {userInfo:userInfo,incomeInfo:incomeInfo,EarningInfo:EarningInfo,total_users:inc};
             }
             catch(e){
                console.log(e);
             }
            
        }else if(func=='userinfo'){
            const userInfo = await contractinstance.users(id);
            return {userInfo:userInfo};
        
        }else{
            return [];
        }
    }catch(e){
        console.log(e)
    }

    }else{
        return [];
    } 
        
}
 
