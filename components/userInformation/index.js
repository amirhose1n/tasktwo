import Style from './style';
import {Avatar} from 'antd';

const UserInformation = props => {
   const { data } = props;
   const { picture , firstName , lastName , gender , phone , email , title } = data;
   return <Style> 
            <div className='img-box'>
               <Avatar size={100} src={picture}  />
               <span> {title + ' ' + firstName + ' - ' + lastName} </span>
               <span> {'gender' + ' : ' + gender} </span>
               <span> {'phone' + ' : ' + phone} </span>
               <span > {'email' + ' : ' } <a style={{color:'lightblue'}} href = {`mailto: ${email}`}> {email} </a> </span>
            </div>
          </Style>
}

export default UserInformation;