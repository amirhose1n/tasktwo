import Style from './style';

const Dot = props => {
   const { style , className } = props;
   return <Style className={className?className:''}> <span style={style}/> </Style>
}

export default Dot;