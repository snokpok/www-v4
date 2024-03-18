import type { FC } from "react";


let songName: string, artists: string;

const accessToken = process.env.SCP_TOKEN;
const response = await fetch("https://scp-go-production.up.railway.app/scp", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
const data: any | null = await response.json();
songName = data?.item.name ?? null;
artists = data?.item.artists.map((el) => el.name).join(", ") ?? null;

const SCP: FC<{}> = () => {
  return (
    <>
      {data !== null && (
        <>
          <hr />
          <p>
            🎵 Btw I'm listening to: <strong>{songName}</strong> - {artists}
          </p>
        </>
      )}
    </>
  );
};
export default SCP;
