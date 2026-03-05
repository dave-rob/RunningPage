import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { Box, Container } from "@chakra-ui/react";

export default function RunChart({weeklyRuns}){

    console.log(weeklyRuns);
     const chart = useChart({
    data:weeklyRuns,
    series: [{ name: "miles", color: "#fc4c02" }],
  })
// marginX={{xl:"auto", base:"10"}}
    return (
      <Container backgroundColor={"gray.900"} marginY={10} paddingY={10} borderRadius={10}  maxWidth={{base:"md", sm:"2xl", lg:"5xl"}} overflow={"hidden"}>
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          label={{value:"Weeks", position: "bottom", offset:15}}
          axisLine={false}
          dataKey={chart.key("week")}
          angle={-45}
          tickMargin={15}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
         label= {{value: "Miles", position: "left", angle: -90, offset:-5}}
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
    </Container>
    )
}