import React from "react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";
import ProfileCard from "./ProfileCard";
import samYehPicture from "./images/SamYehHeadshot.jpg"
import ianCoatesPicture from "./images/ianCoates.JPG"
import jacobKendallPicture from "./images/jacobKendall.jpeg"
import japveerSinghPicture from "./images/japveerSingh.jpg"
import mohsinChheenaPicture from "./images/mohsinChheena.JPG"

const Leadership = () => {
  return (
    <div id="Leadership">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography style={{ marginBottom: 10 }} variant="h1">
            <Box fontWeight="fontWeightBold">Leadership</Box>
          </Typography>
          <Grid container justifyContent="center">
            <ProfileCard
              profilePicture={samYehPicture}
              title="Sam Yeh - President"
              description="Sam Yeh is a Freshman Computer Science major from Chicago, IL. He's been involved in web3 since middle school and started Illinois' first high school blockchain club."
            />
            <ProfileCard
              profilePicture={japveerSinghPicture}
              title="Japveer Singh - Executive Vice President"
              description="Japveer Singh is a Sophomore Finance major from Milwaukee, WI. He has been involved with blockchain for some time and strives to improve the club."
            /> 
            <ProfileCard
              profilePicture={ianCoatesPicture}
              title="Ian Coates - Director of Marketing"
              description="Ian Coates is a Freshman Pre-law major from Hinsdale, IL. He drives to shape the club's public image and manage outreach."
            /> 
            <ProfileCard
              profilePicture={jacobKendallPicture}
              title="Jacob Kendall - Director of Blockchain Literacy"
              description="Jacob Kendall is a Junior Economics major from Cleveland, OH. He has lots of professional experience related to blockchain technology and wants to inform his peers about blockchain."
            /> 
            <ProfileCard
              profilePicture={mohsinChheenaPicture}
              title="Mohsin Chheena - Director of Research"
              description="Mohsin Chheena is a Junior Cybersecurity major from Oxford, OH. He has technical experience in the spaces and wants to improve research efforts in blockchain here at Miami."
            /> 
            <Divider
              style={{ width: "100%", marginTop: 25, marginBottom: 10 }}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Leadership;
