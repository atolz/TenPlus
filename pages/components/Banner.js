import styles from "./Banner.module.css";
import tw from "tailwind-styled-components";

export default function Banner() {
  return (
    <Wrapper className={"ml-5 " + styles.banner}>
      <Header>
        <Title>Unlock All Your Course Materials</Title>
        <Price>NGN3899.99</Price>
      </Header>
      <Desc>Upskill today and save on your Course Materials!</Desc>
      <Benefits className={"mt-3 "}>
        What you get?
        <BenefitsItem className={"mt-3"}>Lesson Slides</BenefitsItem>
        <BenefitsItem>Class Notes</BenefitsItem>
        <BenefitsItem>Bonus Videos</BenefitsItem>
      </Benefits>
      <Button>Get your certificate</Button>
    </Wrapper>
  );
}

const Wrapper = tw.div`
py-8 pr-5 pl-10 bg-green-100
`;
const Header = tw.div`flex justify-between mb-3`;
const Title = tw.div`text-2xl font-semibold`;
const Price = tw.div`font-semibold text-3xl`;
const Desc = tw.div`text-xl	mb-5 mt-4 text-gray text`;
const Benefits = tw.div`flex-col font-semibold text-xl mb-4`;
const BenefitsItem = tw.div` text-xl font-normal pl-5 mb-2`;
const Button = tw.button`
px-5 py-3 font-semibold text-2xl bg-red-400 rounded-full text-white
`;
