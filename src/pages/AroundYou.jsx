import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import DancingBars from "../components/loaders/DancingBars";
import ResultsError from "../components/ResultsError";
import Song from "../components/cards/Song";

import { useGetSongsByLocationQuery } from "../store/services/shazamCore";

import { Container } from "../styles/pages/AroundYouStyled";
import { BigText, VeryBigText } from "../styles/Text";
import { DisplayList } from "../styles/DisplayList";

function AroundYou() {
  const [location, setLocation] = useState(``);
  const [isLoading, setIsLoading] = useState(true);

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, isError } = useGetSongsByLocationQuery(location);

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_GEO_API_KEY}`
      )
      .then((res) => setLocation(res?.data?.location.country))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
    console.log(location);
  }, [location]);

  return (
    <Container>
      <VeryBigText>Around You</VeryBigText>

      {isLoading && isFetching && <DancingBars />}

      {isError && location !== `` && <ResultsError />}

      <DisplayList>
        {location ? (
          data?.map((song, i) => {
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
          })
        ) : (
          <BigText>
            Unable to fetch data. Request blocked by user's adblocker. Please
            disable it and try again.
          </BigText>
        )}
      </DisplayList>
    </Container>
  );
}

export default AroundYou;
