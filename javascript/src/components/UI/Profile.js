import classes from "./Profile.module.css";
import pfp from "../../assets/pfp.png";

const Profile = (props) =>{
    return <img onClick={props.onClick} className={`${props.className} ${classes.profile}`} src={pfp} alt="profile"/>
}
export default Profile;
