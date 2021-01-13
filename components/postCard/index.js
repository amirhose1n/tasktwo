import Style from './style';
import { Card } from 'antd';

const { Meta } = Card;

const PostCard = props => {
   const { data } = props;
   const { image , text , owner} = data;
   const { firstName , lastName } = owner;
   return <Style> 
             <Card
               hoverable
               style={{ width: 240 }}
               cover={<img alt={text} src={image} />}
               >
               <Meta title={firstName+' '+lastName} description={text} />
            </Card>
          </Style>
}

export default PostCard;