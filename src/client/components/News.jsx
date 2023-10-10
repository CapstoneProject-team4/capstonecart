import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #f8e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: black;
 
  
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: black;
  
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e75480;
  border-radius: 20px; /* Added rounded corners */
  padding: 5px;
  
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline:none ; 
  font-size: 18px;
  width: 100%;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: pink ;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #d24d75; 
  }
`;




const News = () => {
  return (
    <Container>
      <Title>DO YOU WANT NEWS?</Title>
      <Desc>Do you want to have updates and keep up with sales? </Desc>
      <InputContainer>
        <Input placeholder="Your email " />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default News;
