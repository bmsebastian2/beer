import styled from "styled-components"


  const Section = styled.div`

@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700);
    width: 18em;
    margin: 0 auto;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
      @media (max-width: 768px) {
          width: 13em;      
        }     
   `
  const Cover = styled.div`
      color: white;  
      margin: 0;
      padding: 1% 7% 1% 10%;    
      display: block;  
  `
  const Parrafo = styled.p`
      margin: 0;
      text-transform: uppercase;
      font-size: 8em;
      line-height: 0.7em;
      word-wrap: break-word;
      overflow-wrap: break-word;    
      
      @media (max-width: 768px) {
        font-size: 5em;        
    }        
  `
  const Char1 = styled.span`
      margin-left: -.2em;
      z-index: 4;
      text-shadow: 0.05em 0.05em 0.2em rgba(10,10,10,0.9);
  `
  const Char2 = styled.span`
      z-index: 3; 
      margin-left: -.175em;  
      text-shadow: -0.02em 0.02em 0.2em rgba(10,10,10,0.9);
      border-radius: 2rem;         
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