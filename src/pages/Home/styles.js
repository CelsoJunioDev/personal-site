import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("https://nova-escola-producao.s3.amazonaws.com/EBUupJuWp5ttKkmKf5PZXN2rdxsMJ376JtzZaTE7MQRdbWVNrt5CsVgFGaDK/gettyimages-663622960.jpg"),
    #0d0d0d;
  background-position: center;
  background-repeat: inherit;
  background-size: cover;
  background-attachment: fixed;

  P {
    color: #ffffff;
    
    
  }

  @media (max-width: 768px) {
    background-attachment: initial;
  }
`;
export const Teste = styled.h1`
color: #fff;
transform: rotate(-90deg);
border-right: 2px solid #fff;
  white-space: nowrap;
    overflow: hidden;
  animation: teste 550ms steps(40) infinite normal;

@keyframes teste{
  from{
   border-right: 2px solid #fff;
  }to{
    border-right: 2px solid transparent;
  }
}
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;
export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  animation: opacityy 3s normal;

  @keyframes opacityy {
      from {
        opacity: 0.2;
      }
      to{
        opacity: 1;
      }
    }



  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #caf0f8;
  font-size: 50px;
  border-right: 2px solid #fff;
  
  white-space: nowrap;
    overflow: hidden;
  animation: animations2 550ms steps(40) infinite normal, typing2 2.5s steps(35) 1s normal both;

  @keyframes animations2 {
      from {
        border-right-color: #fff;
      }
      to{
        border-right-color: transparent;
      }
    }

    @keyframes typing2 {
      from {
        width: 0;
      }
      to{
        width: 270px;
      }
    }
`;

export const Subtitle = styled.h1`
  color: #fff;

 
  
  
`;
export const Description = styled.p`
  color: #fff;
`;
export const Cards = styled.div`
  width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const homeHeader = styled.header`
  background: #fff;
`;
