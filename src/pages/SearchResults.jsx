import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useGetSongsAsSearchedQuery } from "../store/services/shazamCore";

import { VeryBigText } from "../styles/Text";
import { DisplayList } from "../styles/DisplayList";
import { Container } from "../styles/pages/SearchResultsStyled";

import ResultsError from "../components/ResultsError";
import DancingBar from "../components/loaders/DancingBars";
import Song from "../components/cards/Song";

function SearchResults() {
  const { searchQuery } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, isError } = useGetSongsAsSearchedQuery(searchQuery);

  const results = data?.tracks?.hits.map((song) => song.track);

  return (
    <Container>
      <VeryBigText>Search Results for: {searchQuery}</VeryBigText>

      {isFetching && <DancingBar />}

      {isError && <ResultsError />}

      <DisplayList>
        {!isFetching &&
          !isError &&
          results?.map((song, i) => {
            return (
              <Song
                key={song.key}
                i={i}
                song={song}
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
              />
            );
          })}
      </DisplayList>
    </Container>
  );
}

export default SearchResults;
