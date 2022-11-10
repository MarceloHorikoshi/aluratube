import styled from "styled-components";
import config from "../../config.json";

const StyledBanner = styled.header`
    .banner{
        width: 100%;
        height: 300px;
    }
`;

export default function Banner(){

    const linkUrl = config.bannerUrl
    console.log(`Testando link  ${linkUrl}`)

    return(
        <StyledBanner>
            <img className="banner" src={linkUrl}/>
        </StyledBanner>
    );
}