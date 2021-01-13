import Link from 'next/link';
import {  useState } from 'react';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { Layout , Select, Button } from 'antd';
import { UserOutlined , WechatOutlined , SettingOutlined , SearchOutlined , UserAddOutlined } from '@ant-design/icons';
import Style from './style';
import Dot from '../../components/dot';
import pagesNames from '../../utils/pagesNames';

const { Option } = Select;
const { Header, Footer} = Layout;

const SmartLink = props => {
    const router = useRouter();
    const { asPath } = router;
    const UnicDot = <div className='dot-box'> <Dot/> </div>;
    const { route , title } = props;
  
    return( <Link href={route}>
                <span style={{color:asPath === route ? '#3d3d44' : '#abaaaf'}}>
                    {title}
                    {asPath === route && UnicDot }
                </span>
            </Link>)}

const SmartLinkIcon = props => {
    const router = useRouter();
    const { asPath } = router;
    const { route , Icon } = props;
    return(<Link href={route}>
                <span>
                    <Icon style={{color : asPath === route ? '#0ac4da' : '#020202'}}/>
                </span>
           </Link>)
}


const TopHeader = () => {
    const router = useRouter();
    const { asPath } = router;
    const [ searchVisibility , setSearchVisibility ] = useState(false);
    const users = useSelector(state => state.users);
    const handleSearchVisibility = () => {
        searchVisibility ? setSearchVisibility(false) : setSearchVisibility(true);
    }
    
    let usersForSearch = [];
    
    if(users && users.data){
        const { data } = users;
            for (var i in data){
                const e = data[i];
                usersForSearch = [ ...usersForSearch , {value : e.id,label: e.firstName} ,
                    {value : e.id,label: e.lastName} ,
                {value : e.id,label: e.email}]
            }
    }

    return (<div className='header'> 
                <div className='header-box'>
                    <div className='title-box'>
                    {pagesNames[asPath.replace('/','')]}
                    </div>
                    <div className='action-box'>
                    <div onClick={handleSearchVisibility} className='search-box'>
                        <SearchOutlined />
                    </div>
                    <div className='add-box'>
                        <UserAddOutlined />
                    </div>
                    </div>
                </div>
                {searchVisibility &&
                <div className='search-box'>
                 <Select
                 showSearch
                 placeholder="Search in there"
                 onSelect={e => {router.push(`/user/${e}/posts`)}}
               >
              
                    {usersForSearch && usersForSearch.length > 0 && usersForSearch.map(e => {
                        return (<Option  key={e.label} value={e.value}>{e.label}</Option>)
                    })}

               </Select>
                <Button onClick={handleSearchVisibility}> cancel </Button>
               </div> }
            </div>)}

const MainTabs = props => {
    const { children } = props;

    return(
        <Style>
            <TopHeader/>
            <Header className='tab-header'>
                <div className='tab-header-links'>
                    <SmartLink route='/' title='message'/>
                    <SmartLink route='/user' title='user'/>
                    <SmartLink route='/settings' title='settings'/>
                </div>
            </Header>
            

            {children}

            <Footer className='tab-footer'>
                <div className='tab-footer-links'>
                    <SmartLinkIcon route='/' Icon={WechatOutlined}/>
                    <SmartLinkIcon route='/user' Icon={UserOutlined}/>
                    <SmartLinkIcon route='/settings' Icon={SettingOutlined}/>
                </div>
            </Footer>
        </Style>
    )
}

export default MainTabs;