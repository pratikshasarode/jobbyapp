import { Link } from "react-router-dom";
import { FaStar,FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './index.css'



const JobsCard =(props)=>{

  const{jobsDetails} = props;
  
 return(

  <Link to={`/jobs/${jobsDetails.id}`} className="jobs-link">
<li className='jobs-card-cont'>
  <div className='jobs-card'>
    <div className='icon-title-rating-cont'>
   <img src={jobsDetails.company_logo_url} alt="company logo" className="jobs-icon"/>
   <div className='title-rating-cont'>
    <h2 className="jobs-title">{jobsDetails.title}</h2>
    <span>
         <FaStar className="rating-icon" />
    </span>
    <span className="rating">
        {jobsDetails.rating}
    </span>
      </div>
        </div>
       <div
       className="location-emp-pakage-cont">
      <div>
               <FaLocationDot/>
               <span className="emp-pakage-text">{jobsDetails.location}</span>
               <FaBriefcase/>
               <span className="emp-pakage-text">{jobsDetails.employment_type}</span>
      </div>
      <h2 className="pakage">{jobsDetails.package_per_annum}</h2>
      </div>
        <hr/>

        <h6>Discription</h6>

        <p>{jobsDetails.job_description}</p>
        </div>
       </li>
    </Link>
  )
}


export default JobsCard;