import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

function useAuth() {
  const { isLoading, data } = useQuery({
    queryKey: ["auth"],
    queryFn: () =>
      axios
        .post(
          config.api.authUrl,
          `grant_type=client_credentials&client_id=${config.api.clientId}&client_secret=${config.api.clientSecret}`,
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        )
        .then((res) => res.data),
    refetchOnWindowFocus: false,
    staleTime: 3600 * 1000,
  });

  return { isLoading, data };
}

export default useAuth;
