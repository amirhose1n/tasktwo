import Head from 'next/head';
import axios from '../../../api';
import InsideHeader from '../../../components/insideHeader';
import UserInformation from '../../../components/userInformation';

export default function Stories(props) {
  const { user } = props;
  return (
    <div>
      <Head>
        <title>User Story</title>
      </Head>
      <InsideHeader title={'User Stories'}/>
      <UserInformation data={user}/>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { params : { id } } = ctx;
  const res = await axios(`user/${id}`);
  return {
    props: {
      user:res.data,
    },
  }
}
