import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

function App() {
  const [rData, setData] = useState([{ lines: 0 }]);

  useEffect(() => {
    const eventSource = new EventSource(`http://localhost:8080/`);
    eventSource.onmessage = (e) => {
      console.log(e.data);
      setData((oldArray) => [...oldArray, { lines: parseInt(e.data) }]);

      console.log(rData);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      <h2>Change in LOC</h2>
      <ResponsiveContainer width="90%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={rData}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
          <XAxis dataKey="lines" tick={{ fill: "#fff" }} />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            cursor={false}
          />
          <Line
            type="monotone"
            dataKey="lines"
            stroke="#8884d8"
            strokeWidth="5"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
