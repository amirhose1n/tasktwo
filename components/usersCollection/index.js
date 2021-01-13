import Style from './style';
import UserCard from '../UserCard';

const StoriesCollection = props => {
   const { data : { data } } = props;
   return <Style> 
               {data && data.map(e => <UserCard key={e.id} data={e}/> )}
          </Style>
}

export default StoriesCollection;