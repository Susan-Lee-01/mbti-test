import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MainPage({ setEI, setSN, setTF, setJP }) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <H1>☃️크리스마스 성격 테스트☃️</H1>
      <Image src="https://ifh.cc/g/LF01QB.jpg" />
      <Button
        onClick={() => {
          navigate("/test");
          setEI([]);
          setSN([]);
          setTF([]);
          setJP([]);
        }}
      >
        ❤️시작하기💚
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const H1 = styled.h1`
  margin: 10px 0;
  color: #389561;
  text-align: center;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;

  @media screen and (max-width: 425px) {
    width: 250px;
    height: 250px;
  }
`;

const Button = styled.button`
  line-height: 15px;
  margin: 20px 0;
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 20px;
  border: none;
  background-color: #ffdcdc;
  cursor: pointer;

  &:hover {
    background-color: #fabcbc;
  }
`;
