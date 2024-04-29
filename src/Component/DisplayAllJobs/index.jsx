import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import JobsCard from '../JobsCard';
import './index.css'


const DisplayAllJobs = (props)=>{
  const {employType} = props;

   const [allvalues,setValues]= useState({
         allJobsList:[],
         searchInput:"",
         emptype:{employType},
         minPakage:""
        });


  useEffect(()=>{

   const fetchALLJobsDetails = async()=>{
          const token = Cookies.get("jwtToken")
          

    const url=`https://apis.ccbp.in/jobs?employment_type=${allvalues.emptype}&minimum_package=${allvalues.minPakage}&search=${allvalues.searchInput}
    `;
    const options ={
      method:"Get",
      headers:{
        Authorization:`Bearer ${token}`
    }
 }
             
    const response = await fetch(url,options);  
    const fetchData = await response.json(); 
    console.log(fetchData);
     if(response.ok===true){
      setValues({...allvalues,allJobsList:fetchData.jobs})
     }
 }

    fetchALLJobsDetails();

   },[allvalues.searchInput])
  
    const onChangeUserSearch=(event)=>{
      setValues({...allvalues,searchInput:event.target.value});
    
}

     return(

            
   <div className='all-jobs-cont'>
    <div className='w-75'>
      <input type="search"placeholder='search' className='form-control'onKeyDown={onChangeUserSearch}/>
   </div>
     <ul>
      {allvalues.allJobsList.map(each=>
             <JobsCard jobsDetails={each}key={each.id}/>

          )}
      </ul>

   </div>
     )

}

export default DisplayAllJobs;