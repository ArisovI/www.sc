import { useForm } from "@mantine/form";
import { Button, TextInput, Textarea, Stack, Flex } from "@mantine/core";
import { modals } from "@mantine/modals";

type Props = {
  submitFn: (body) => Promise<void>;
};

const FormPosition = ({ submitFn }: Props) => {
  const form = useForm({
    initialValues: {
      name: { kk: "", uz: "", ru: "", en: "" },
      description: { kk: "", uz: "", ru: "", en: "" },
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    await submitFn(values).then(() => modals.closeAll());
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Kazakh (kk)"
          placeholder="Введите название"
          {...form.getInputProps("name.kk")}
        />
        <TextInput
          label="Uzbek (uz)"
          placeholder="Введите название"
          {...form.getInputProps("name.uz")}
        />
        <TextInput
          label="Russian (ru)"
          placeholder="Введите название"
          {...form.getInputProps("name.ru")}
        />
        <TextInput
          label="English (en)"
          placeholder="Введите название"
          {...form.getInputProps("name.en")}
        />

        <Textarea
          label="Kazakh (kk)"
          placeholder="Введите описание"
          minRows={2}
          {...form.getInputProps("description.kk")}
        />
        <Textarea
          label="Uzbek (uz)"
          placeholder="Введите описание"
          minRows={2}
          {...form.getInputProps("description.uz")}
        />
        <Textarea
          label="Russian (ru)"
          placeholder="Введите описание"
          minRows={2}
          {...form.getInputProps("description.ru")}
        />
        <Textarea
          label="English (en)"
          placeholder="Введите описание"
          minRows={2}
          {...form.getInputProps("description.en")}
        />

        <Flex justify={"end"} gap={10}>
          <Button onClick={() => modals.closeAll()}>Отмена</Button>
          <Button type="submit">Создать</Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default FormPosition;
