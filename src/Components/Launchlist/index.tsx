import * as React from "react";
import { useListHackathonsQuery } from "../../generated/graphql";
import LaunchList from "./Launchlist";

const LaunchListContainer = () => {
  const { data, error, loading } = useListHackathonsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} />;
};

export default LaunchListContainer;
