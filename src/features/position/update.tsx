import { useEffect, useState } from "react";
import { api } from "../../api/api";
import FormPosition from "./form";

type Props = {
  id: number;
};
const UpdatePosition = ({ id }: Props) => {
  const [data, setData] = useState();
  
  async function getPostion() {
    const { data } = await api(`/positions/${id}`);
    setData(data.data);
  }

  useEffect(() => {
    getPostion();
  }, [id]);

  async function updateFn(body) {
    await api.put(`/positions/update/${id}`, body);
  }

  return (
    <>
      {data !== undefined && (
        <FormPosition
          submitFn={updateFn}
          initialValues={{
            name: {
              ru: data.name.ru,
              uz: data.name.uz,
              en: data.name.en,
              kk: data.name.kk,
            },
            description: {
              ru: data.description.ru,
              uz: data.description.uz,
              en: data.description.en,
              kk: data.description.kk,
            },
          }}
        />
      )}
    </>
  );
};

export default UpdatePosition;
