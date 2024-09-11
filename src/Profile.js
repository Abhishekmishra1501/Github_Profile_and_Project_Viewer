import JobProfile  from "./Jobprofile";
import Location from "./location";
const Profile=({profile_data})=>{
    return(<>
    <div>
        {/* <h2><img src={profile_data.image}/></h2> */}
        <h1>{profile_data.name}</h1>
        <p>{profile_data.Age}</p>
        <p>{profile_data.MS}</p>
       
       
       

       <JobProfile pos={profile_data.position} ctc={profile_data.ctc}/>
       <Location loc={profile_data.location}/>
    </div>
    </>)
}

export default Profile;

