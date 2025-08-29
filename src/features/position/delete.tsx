import { Button, Flex, Stack, Text } from "@mantine/core";
import { api } from "../../api/api";
import { modals } from "@mantine/modals";

type Props = {
  id: number;
};

const DeletePosition = ({ id }: Props) => {
  async function deleteFn() {
    await api.delete(`/positions/delete/${id}`);
    alert("Удалено");
    modals.closeAll();
  }

  return (
    <Stack>
      <Text>Вы действительно хотите удалить?</Text>
      <Flex gap={10} justify={"flex-end"}>
        <Button onClick={() => modals.closeAll()}>Отмена</Button>
        <Button onClick={deleteFn}>Удалить</Button>
      </Flex>
    </Stack>
  );
};

export default DeletePosition;
