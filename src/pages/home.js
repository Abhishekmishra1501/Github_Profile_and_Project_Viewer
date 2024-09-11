
import styled from 'styled-components';
import '../pages/style.css';

const CopyWrapper = styled.p`
text-align:center;
font-family:'Tahoma';
font-size:14px;`;


const H2Wrapper = styled.h2`
text-align:center;
background-color:cyan;
padding:10px;margin:10px;
`;
  

const Home =() =>{
    const copy ='copyright@2024-26';
    const title ='This is My Homepage'
    const body =`lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    return(
        <>
        <H2Wrapper>{title}</H2Wrapper>
        <p>{body}</p>
      <CopyWrapper>{copy}</CopyWrapper>  


        </>
    )
}

export default Home;





