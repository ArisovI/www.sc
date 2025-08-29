import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Button, Flex, Stack, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import DeletePosition from "../../features/position/delete";
import CreatePosition from "../../features/position/create";
import UpdatePosition from "../../features/position/update";

const Posotion = () => {
  const [positions, setPositions] = useState([]);
  async function getPosotions() {
    const { data } = await api.get("/positions");
    setPositions(data.data.items);
  }

  useEffect(() => {
    getPosotions();
  }, []);

  function deleteFn(id: number) {
    modals.open({ children: <DeletePosition id={id} />, title: "Удаление" });
  }

  function createFn() {
    modals.open({
      children: <CreatePosition />,
      title: "Создание",
    });
  }

  function updateFn(id: number) {
    modals.open({
      children: <UpdatePosition id={id} />,
      title: "Обновление",
    });
  }

  return (
    <Stack p={20} w="100%">
      <Flex justify={"space-between"} align={"center"}>
        <Title>Positions</Title>
        <Button onClick={createFn}>Create</Button>
      </Flex>
      <ul>
        <Stack>
          {positions.map((el) => (
            <li
              key={el.id}
              style={{ border: "1px solid gray", padding: 10, borderRadius: 5 }}
            >
              <Flex gap={20} align={"center"}>
                {el.name.ru}
                <Button onClick={() => deleteFn(el.id)}>Delete</Button>
                <Button onClick={() => updateFn(el.id)}>Update</Button>
              </Flex>
            </li>
          ))}
        </Stack>
      </ul>
    </Stack>
  );
};

export default Posotion;
