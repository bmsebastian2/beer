const Button = ({ name }) => {
  const style = {
    backgroundColor: 'rgb(29, 38, 48)',
    color: 'white',
    border: '3px solid #fff',
    width: '211px',
    height: '68px',
    borderRadius: '25px',
    margin: '1rem',
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '22px',
    lineHeight: '24px',
    '&:hover': {
      color: 'blue !importants',
    },
  };
  return <button style={style}>{name}</button>;
};

export default Button;
