import Style from './style';
import StoryCard from '../storyCard';
import { PlusOutlined } from '@ant-design/icons';

const StoriesCollection = props => {
   const { data : { data } } = props;
   return <Style> 
               <StoryCard data={{firstName:'add story',icon: <PlusOutlined />}} />
               {data && data.map(e => <StoryCard key={e.id} data={e}/> )}
          </Style>
}

export default StoriesCollection;