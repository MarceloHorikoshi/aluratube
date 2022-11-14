import { Children } from "react";
import styled from "styled-components";
// import config from "../../config.json";

const StyledFavoritos = styled.div`
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
        width: 80px;
        height: 80px;
        border-radius: 50%;
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
          padding-right: 10px;
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

export default function Favoritos(props) {
    const listaPerfis = props.profiles
    console.log(listaPerfis)
    return(
        <StyledFavoritos>
            {
                <div>
                    <section>
                        <h2>Favoritos</h2>

                        {
                            listaPerfis.map((perfils) => {
                                return(
                                    <a href={perfils.url}>
                                        <img className="favoritosImg" src={perfils.thumb} />
                                        <span className="favoritosNome">
                                            {perfils.title}
                                        </span>
                                    </a>
                                )
                            })
                        }
                        
                    </section>
                </div>

            }

        </StyledFavoritos>
    )

}