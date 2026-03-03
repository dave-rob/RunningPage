import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export default function RunChart({weeklyRuns}){
     const chart = useChart({
    data:weeklyRuns,
    series: [{ name: "miles", color: "#fc4c02" }],
  })

    return (
    <Chart.Root maxH="sm" chart={chart} maxW={"5xl"} margin={30}>
      <LineChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          label={{value:"Weeks", position: "bottom"}}
          axisLine={false}
          dataKey={chart.key("week")}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
         label= {{value: "Customers", position: "left", angle: -90 }}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
    )
}