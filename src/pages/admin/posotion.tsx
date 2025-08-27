import { useEffect, useState } from "react";
import { api } from "../../api/api";

const Posotion = () => {
  const [positions, setPositions] = useState([]);
  async function getPosotions() {
    const { data } = await api.get("/positions");
    setPositions(data.data.items);
  }

  useEffect(() => {
    getPosotions();
  }, []);

  return (
    <div>
      <h1>Positions</h1>
      <ul>
        {positions.map((el) => (
          <li key={el.id}>
            {el.name}
            <button>delete</button>
            <button>update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posotion;
