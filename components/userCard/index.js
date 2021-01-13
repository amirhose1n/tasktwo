import Style from './style';
import {Avatar} from 'antd';
import Dot from '../dot';
import Link from 'next/link';

const UserCard = props => {
   const { data } = props;
   const { id , picture , firstName , lastName , icon} = data;
   return <Style> 
               <Link href={`/user/${id}/posts`}>
                  <div className='user-card'>
                     <div className='avatar-box'>
                        <Avatar size={56} src={picture} icon={icon}  />
                        <Dot className='bordered-dot'/>
                     </div>
                     <div className='title-box'>
                        <span className='first-name'>
                           {firstName}
                        </span>
                        <span className='last-name'>
                           {lastName}
                        </span>
                     </div>
                  </div>
               </Link>
          </Style>
}

export default UserCard;