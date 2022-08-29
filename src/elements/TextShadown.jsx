import styled from "styled-components"


const Section = styled.div`/*overflow: hidden;*/
/* Web Font */
@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700);

  width: 8em;
  margin: 0 auto;
   font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
   
  `
  const Parrafo = styled.p`
      margin: 0;
      text-transform: uppercase;
      font-size: 5em;
      line-height: 0.7em;
      word-wrap: break-word;
      overflow-wrap: break-word;
  `
  const Cover = styled.div`
    color: white;  
    margin: 0;
   padding: 1% 7% 1% 10%; 
  
  display: block;  `

  const Char1 = styled.span`
    margin-left: -.2em;
    z-index: 4;
    text-shadow: 0.05em 0.05em 0.2em rgba(10,10,10,0.9);
  `
    const Char2 = styled.span`
     z-index: 3; 
    margin-left: -.175em;
    top: 1.08em;
    text-shadow: -0.02em 0.02em 0.2em rgba(10,10,10,0.9);
    
  `
    const Char3 = styled.span`
    z-index: 9;
    margin-left: -.125em;
    text-shadow: -0.05em 0.05em 0.2em rgba(10,10,10,0.9);
  `

const TextShadown = () => {
    return (
        <Section>
            <Cover >
            <Parrafo >
                <Char1>b</Char1>
                <Char2>a</Char2>
                <Char3>r</Char3>
            </Parrafo>  
            </Cover>
        </Section>
    )
}


export default TextShadown