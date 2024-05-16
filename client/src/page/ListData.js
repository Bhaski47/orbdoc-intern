import axios from "axios";
import { useState, useEffect } from "react";

const ListData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAll() {
      const da = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/user/fetch`);
      setData(da.data.data);
    }
    fetchAll();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Favourite Number</th>
          <th>Boolean</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.email}</td>
            <td>{item.favno}</td>
            <td>{item.alert ? "True" : "False"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListData;
