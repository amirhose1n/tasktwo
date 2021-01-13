import Style from '../styles/globalStyle';
import { wrapper } from "../redux";
import { useEffect } from 'react';
import { setUsers } from '../redux/actions/usersActions';
import { useDispatch } from 'react-redux';
import axios from '../api';
import "../styles/antd.less";

function MyApp({ Component, pageProps , users }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    //initial setting for users
    dispatch(setUsers(users))
  },[])

  return (
    <Style>
      <Component {...pageProps} />
    </Style>
 )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  const res = await axios('user');

  return { pageProps , users : res.data.data };
};


export default wrapper.withRedux(MyApp);
