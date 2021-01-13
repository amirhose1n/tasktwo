import Head from 'next/head';
import { useSelector } from 'react-redux';
import MainTabs from '../hocs/mainTabs';
import StoriesCollection from '../components/storiesCollection';
import UsersCollection from '../components/usersCollection';

export default function Home(props) {

  const statedUser = useSelector(state => state.users);

  return (
    <div>
      <Head>
        <title>Chat All</title>
      </Head>
      <MainTabs>
        <StoriesCollection data={statedUser}/>
        <UsersCollection data={statedUser}/>
      </MainTabs>
    </div>
  )
}

