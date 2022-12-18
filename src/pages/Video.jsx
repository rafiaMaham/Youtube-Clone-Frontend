import React from "react";
import styled from "styled-components";
import logo from "../img/Sony.png";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import { Comments } from "../components/Comments";
import { Cards } from "../components/Cards";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 5px;
  height: max-content;
  cursor: pointer;
  padding: 10px 20px;
`;

export const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/-lcd1ixHqjE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>2,245,678 views . Nov 26, 2022 </Info>
          <Buttons>
            <Button>
              <ThumbUpAltOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={logo} />
            <ChannelDetail>
              <ChannelName>ZTube</ChannelName>
              <ChannelCounter>220K Subscribers</ChannelCounter>
              <Description>
                Presenting all the songs from the movie “Qala” starring Tripti
                Dimri and Babil Khan. While the rest of the album is composed by
                Amit Trivedi, “Udh Jaayega” is composed by Sagar Desai. The
                lyrics are written by Amitabh Bhattacharya, Swanand Kirkire,
                Kausar Munir, Varun Grover, Sant Kabir and Anvitaa Dutt. The
                songs from this album are sung by Sireesha Bhagavatula, Shahid
                Mallya, Swanand Kirkire.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>

        <Hr />

        <Comments />
      </Content>
      <Recommendation>
        <Cards type="sm" />
        <Cards type="sm" />
        <Cards type="sm" />
        <Cards type="sm" />
        <Cards type="sm" />
        <Cards type="sm" />
        <Cards type="sm" />
        <Cards type="sm" />
        <Cards type="sm" />
      </Recommendation>
    </Container>
  );
};
