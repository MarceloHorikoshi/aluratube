import styled from "styled-components";

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
  .favoritosImg{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .favoritosNome{
    font-family: cursive;
  }
`;

export default function Timeline({ searchValue, ...props }) {
  // console.log("Dentro do componente", props.playlists);
  const playlistNames = Object.keys(props.playlists);
  let estiloFavoritos
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {
        playlistNames.map((playlistName) => {
          const videos = props.playlists[playlistName]
          return (
            <section>
              <h2>{playlistName}</h2>
              <div>
                {videos.filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchvalueNormalized = video.title.toLowerCase();
                  return titleNormalized.includes(searchvalueNormalized)
                }).map((video) => {
                  return (
                    <a href={video.url}>
                      <img className={playlistName === "aluraTubesFavoritos" ? "favoritosImg" : "default"} src={video.thumb} />
                      <span className={playlistName === "aluraTubesFavoritos" ? "favoritosNome" : "default"}>
                        {video.title}
                      </span>
                    </a>
                  )
                })}
              </div>
            </section>
          )
        })
      }
    </StyledTimeline>
  )
}

