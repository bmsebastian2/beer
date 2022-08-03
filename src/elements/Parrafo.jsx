const Parrafo = ({ name, tamaño }) => {
  const style = {
    fontfamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: tamaño,
    lineHeight: '24px',
    textAlign: 'center',
  };
  return <p style={style}>{name}</p>;
};

export default Parrafo;
