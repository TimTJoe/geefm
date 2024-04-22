import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import logo from "@assets/logo_lg.png";

const Container = styled(Stack)`
`;

const Figure = styled(Box)`
    width: 120px;
    height: 120px;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 17px;
    overflow: hidden;
    background-color: white;
`;

const Image = styled.img`
    width: 100%;
`

const Media = () => {
  return (
    <Container direction={"row"} spacing={2}>
      <Figure>
        <Image src={logo} />
      </Figure>
      <Box>
        <Typography variant="h4">Gee Broadcasting Corporation</Typography>
        <Typography variant="body1">
          Founded by Cllr. Kunkunyon Wleh Teh, Gee Broadcasting Corporation
          informs and educates residents of southeastern Liberia. Their focus
          areas include conflict resolution, rural development, and promoting
          gender equality and community involvement.
        </Typography>
      </Box>
    </Container>
  );
};

export default Media;
