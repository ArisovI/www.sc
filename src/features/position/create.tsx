import FormPosition from "./form";
import { api } from "../../api/api";

const CreatePosition = () => {
  async function createFn(body) {
    await api.post("/positions/create", body);
  }

  return (
    <div>
      <FormPosition submitFn={createFn} />
    </div>
  );
};

export default CreatePosition;
