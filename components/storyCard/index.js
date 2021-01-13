import {Avatar} from 'antd';
import Link from 'next/link'
import Style from './style';

const StoryCard = props => {
   const { data } = props;
   const { id , picture , icon , firstName } = data;
   return <Style> 
            <Link href={`/user/${id}/stories`}>
               <div className='story-box'>
               <Avatar style={{border: icon ? 'unset' : '2px solid #73c5ce'}} size={56} src={picture} icon={icon}  />
               {firstName}
               </div>
            </Link>
          </Style>
}

export default StoryCard;