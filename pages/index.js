import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Timeline, {StyledTimeline} from "../src/components/Timeline";
import Banner from "../src/components/Banner";

function HomePage() {
    const estilosDaHomePage = { 
        // backgroundColor: "red" 
    };

    // console.log(config.playlists);

    return (
        <>
            <CSSReset></CSSReset>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Banner></Banner>
                <Menu></Menu>
                <Header></Header>
                <Timeline playlists={config.playlists}>
                    Conteudo
                </Timeline>

                
            </div>
        </>

    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


const StyledHeader = styled.div`
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.description}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

