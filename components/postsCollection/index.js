import Style from './style';
import PostCard from '../postCard';

const PostsCollection = props => {
   const { data } = props;
   return <Style> 
               {data && data.map(e => <PostCard key={e.id} data={e}/> )}
          </Style>
}

export default PostsCollection;