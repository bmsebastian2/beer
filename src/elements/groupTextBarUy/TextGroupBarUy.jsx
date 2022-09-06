import styled from "styled-components"
import TextShadown from "./TextShadown"
import TextUy from "./TextUy"
import TextNeon from "./TextNeon"

const ContainerMain = styled.div`
    text-align:end;
    display:flex;
    flex-direction:column; 
    align-items:center;
    position:relative;
`
const ContainerSon = styled.div`
    display:flex;
    align-items:center;
`

const TextGroupBarUy = () => {
    return(
        <ContainerMain>
            <ContainerSon>
                 <TextShadown/>
                 <TextUy/> 
            </ContainerSon>
            <TextNeon/>
        </ContainerMain>
    )
}


export default TextGroupBarUy