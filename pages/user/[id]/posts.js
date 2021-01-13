import Head from 'next/head';
import axios from '../../../api';
import InsideHeader from '../../../components/insideHeader';
import PostsCollection from '../../../components/postsCollection';

export default function Posts(props) {
  const { posts } = props;

  return (
    <div>
      <Head>
        <title>User Posts</title>
      </Head>
      <InsideHeader title={'User Posts'}/>
      <PostsCollection data={posts}/>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { params : { id } } = ctx;
  const res = await axios(`user/${id}/post`);
  return {
    props: {
      posts:res.data.data,
    },
  }
}
