
const TituloBar = ({name}) => {
  const styleParrafo = {
    fontFamily: 'Edu VIC WA NT Beginner, cursive',
    fontSize: '14vmin',
    color: '#fff',
  };
  const styleSpan = {
    color: '#ff3d00',
  };

  return (
    <div>     
   
      <p style={styleParrafo}>
        {name}.<span style={styleSpan}>uy</span>
      </p>
    </div>
  );
};

export default TituloBar;
