import { Card, CardFooter, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function LevelCard({ type }) {
  return (
    <Card
      color="blue"
      variant="gradient"
      className="w-full md:w-1/3 lg:w-1/4  p-2 my-5 mx-4 flex"
    >
      <CardFooter className="flex flex-col h-full">
        <Link to={type.url} className="flex flex-col h-full">
          <Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 flex-[1_0_auto] px-3 py-2"
            ripple={false}
            fullWidth={true}
          >
            <span className="mt-2 text-xl ">{type.name}</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
