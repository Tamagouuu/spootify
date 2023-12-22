import React from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import config from "../../../config";
import useAuth from "../../../hooks/useAuth";

export default function Discover() {
  const { data: authData } = useAuth();

  const { isLoading: newReleasesLoading, data: newReleasesData } = useQuery({
    queryKey: [authData?.access_token, "newReleases"],
    queryFn: () =>
      axios
        .get(config.api.baseUrl + "/browse/new-releases", {
          headers: {
            Authorization: `Bearer ${authData.access_token}`,
          },
        })
        .then((res) => res.data.albums.items),
    enabled: !!authData?.access_token,
  });

  const { isLoading: categoriesLoading, data: categoriesData } = useQuery({
    queryKey: [authData?.access_token, "categories"],
    queryFn: () =>
      axios
        .get(config.api.baseUrl + "/browse/categories", {
          headers: {
            Authorization: `Bearer ${authData.access_token}`,
          },
        })
        .then((res) => res.data.categories.items),
    enabled: !!authData?.access_token,
  });

  const { isLoading: playlistsLoading, data: playlistsData } = useQuery({
    queryKey: [authData?.access_token, "playlists"],
    queryFn: () =>
      axios
        .get(config.api.baseUrl + "/browse/featured-playlists", {
          headers: {
            Authorization: `Bearer ${authData.access_token}`,
          },
        })
        .then((res) => res.data.playlists.items),
    enabled: !!authData?.access_token,
  });

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleasesData} isLoading={newReleasesLoading} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlistsData} isLoading={playlistsLoading} />
      <DiscoverBlock text="BROWSE" id="browse" data={categoriesData} imagesKey="icons" isLoading={categoriesLoading} />
    </div>
  );
}
