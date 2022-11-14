import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu/Menu";
import Timeline from "../src/components/Timeline";
import { videoService, profileService } from "../src/services/videoService";
import Favoritos from "../src/components/Favoritos";
// import Banner from "../src/components/Banner";


function HomePage() {
    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});   //config.playlists

    // const serviceFavorito = profileService();
    // const [profiles, setProfiles] = React.useState([]);    

    React.useEffect(() => {
        service
            .getAllVideos()
            .then((dados) => {
                // Forma imutavel
                const novasPlaylists = {};
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                    novasPlaylists[video.playlist] = [
                        video,
                        ...novasPlaylists[video.playlist],
                    ];
                });

                setPlaylists(novasPlaylists);
            });

            // serviceFavorito
            // .getAllProfiles()
            // .then((p) => {
            //     const novosProfiles = {};
            //     p.data.forEach((prof) => {
            //         if (!novosProfiles[p.profiles]) novosProfiles[p.profiles] = [];
            //         novosProfiles[prof.profiles] = [
            //             prof,
            //             ...novosProfiles[prof.profiles],
            //         ];
            //     });
            //     setProfiles(novosProfiles)
            // });    

    }, []); // array vazio faz carregar uma vez só a página, depois da resposta da api

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
                <Timeline searchValue={valorDoFiltro} playlists={playlists}>
                    Conteudo
                </Timeline>
                
                <div style={{
                display: "flex",
                }}>
                <Favoritos profiles={config.aluraTubesFavoritos}>
                    Favoritos
                </Favoritos>
                </div>
                

            </div>
        </>

    );
}

export default HomePage


const StyledHeader = styled.div`
background-color: ${({ theme }) => theme.backgroundLevel1};
    
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
    background-image: url(${({ bannerUrl }) => bannerUrl});
    height: 230px;
    width: auto;
`;


function Header() {
    return (
        <StyledHeader>
            <StyledBanner bannerUrl={config.bannerUrl} />

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

