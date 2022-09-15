import * as React from "react";
import { ListHackathonsQuery } from "../../generated/graphql";

interface Props {
  data: ListHackathonsQuery;
}

const className = "LaunchList";

const Launchlist: React.FC<Props> = ({ data }) => {
  console.dir(data);

  return (
    <div className={className}>
      <h3>Launches</h3>
      <ul>
        {data.listHackathons?.items?.map(hackathon => (
          <li key={hackathon?.id}>{hackathon?.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Launchlist;
