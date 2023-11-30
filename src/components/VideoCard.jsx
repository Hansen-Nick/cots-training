import { Card, CardFooter, Button } from "@material-tailwind/react";
import Youtube from "react-youtube";

export default function VideoCard({ info }) {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 0,
    },
  };
  return (
    <Card
      color="blue"
      variant="gradient"
      className="w-full md:w-3/4 lg:w-1/3 p-1 my-5 mx-4 flex"
    >
      <CardFooter className="flex flex-col h-full p-1">
        <Button
          size="lg"
          color="white"
          className="text-blue-500  flex-[1_0_auto] px-0 py-0 relative pb-[calc(56.25%+200px)] cursor-default h-0 overflow-hidden"
          ripple={false}
          fullWidth={true}
        >
          <Youtube
            videoId={info.embedId}
            opts={opts}
            onReady={onPlayerReady}
            className="absolute h-[calc(100%-75px)] w-full"
          />
          <span className="absolute bottom-6 left-0 right-0 mt-3 text-xl ">
            {info.name}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}
