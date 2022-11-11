import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu/Menu";
import Timeline from "../src/components/Timeline";
// import Banner from "../src/components/Banner";

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red" 
    };

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    // console.log(config.playlists);

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                {/* <Banner></Banner> */}

                {/*Propriedade Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header></Header>
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} >
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
background-color: ${({theme}) => theme.backgroundLevel1};
    
.user-info {
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

const StyledBanner = styled.div`
    background-color: blue;
    /* background-image: url({config.bannerUrl}); */
    background-image: url(${({bannerUrl}) => bannerUrl});
    height: 230px;
    width: auto;
`;


function Header() {
    return (
        <StyledHeader>
            <StyledBanner bannerUrl={config.bannerUrl}/>

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

