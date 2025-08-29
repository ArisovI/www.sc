import { Stack } from "@mantine/core";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Stack w={200} h='calc(100vh - 60px)' bg='yellow' p={20}>
      <Link to="positions">Positions</Link>
      <Link to="news">News</Link>
    </Stack>
  );
};

export default Sidebar;
