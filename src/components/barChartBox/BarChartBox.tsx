import { ResponsiveContainer, BarChart, Bar } from "recharts"

const BarChartBox = () => {
  return (
    <div className="barChartBox">
            <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default BarChartBox