import { useDispatch, useSelector } from "react-redux";

import { useGetSongsByGenreQuery } from "../store/services/shazamCore";
import { selectGenre } from "../store/features/player";

import { genres } from "../assets/constants";

import { DisplayList } from "../styles/DisplayList";
import {
  ParentContainer,
  Container,
  BigText,
  Selection,
} from "../styles/pages/DiscoveryStyled";

import DancingBars from "../components/loaders/DancingBars";
import ResultsError from "../components/ResultsError";
import Song from "../components/cards/Song";

function Discovery() {
  const dispatch = useDispatch();

  const { setActiveSong, isPlaying } = useSelector((state) => state.player);
  const { selectedGenre } = useSelector((state) => state.player);
  const { data, isFetching, isError } = useGetSongsByGenreQuery(
    selectedGenre || `ROCK`
  );

  return (
    <ParentContainer>
      <Container>
        <BigText>Discovery</BigText>

        <Selection
          onChange={(e) => dispatch(selectGenre(e.target.value))}
          value={selectedGenre || `Rock`}
        >
          {genres.map((genre) => {
            return (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            );
          })}
        </Selection>
      </Container>

      <DisplayList>
        {isFetching && <DancingBars />}

        {isError && <ResultsError />}

        {data?.map((song, i) => {
          return (
            <Song
              key={song.key}
              i={i}
              song={song}
              data={data}
              isPlaying={isPlaying}
              setActiveSong={setActiveSong}
            />
          );
        })}
      </DisplayList>
    </ParentContainer>
  );
}

export default Discovery;
