import Style from './style';

const Dot = props => {
   const { style } = props;
   return <Style> <span className='dot' style={style}/> </Style>
}

export default Dot;