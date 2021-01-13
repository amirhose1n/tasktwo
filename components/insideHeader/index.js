import Style from './style';
import {RollbackOutlined} from '@ant-design/icons';
import { useRouter } from 'next/router';

const InsideHeader = props => {
   const router = useRouter();
   const { title } = props; 
   return <Style> 
             <span className='back-btn' onClick={() => router.back()}> back <RollbackOutlined /> </span>
             <span> {title?title : ''} </span>
          </Style>
}

export default InsideHeader;