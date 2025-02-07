"use client"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, Scatter } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { variables: "Strategy and governance", OrganisationScore: 186, BenchmarkScore: 80 },
  { variables: "AI foundations", OrganisationScore: 305, BenchmarkScore: 200 },
  { variables: "AI metrics", OrganisationScore: 237, BenchmarkScore: 120 },
  { variables: "AI currency", OrganisationScore: 73, BenchmarkScore: 190 },
  { variables: "AI change management", OrganisationScore: 209, BenchmarkScore: 130 },
]

const chartConfig = {
  OrganisationScore: {
    label: "Organisation Score",
    color: "hsl(var(--chart-1))",
  },
  BenchmarkScore: {
    label: "Benchmark Score",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function AiEfficiencyScore() {
  return (
    <Card className="shadow-none bg-transparent border-none">
      <CardHeader className="items-center pb-4 gap-y-6">
        <CardTitle className="text-[#E7ECF0]">AI Efficiency Score</CardTitle>
        <CardDescription className="flex gap-8 items-center">
          <div className="flex gap-2 items-center"><span className="border-2 border-primary w-12 h-4 inline-block"></span>Organization score</div>
          <div className="flex gap-2 items-center"><span className="border-2 border-accent w-12 h-4 inline-block"></span>Market Benchmark Score</div>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-w-[500px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="variables" />
            <PolarGrid />
            <Radar
              dataKey="OrganisationScore"
              fill="none"
              fillOpacity={0.3}
              strokeWidth={4}
              stroke="#16AAE2"
              className="fill-[#16AAE2]"
            />
            <Scatter
              data={chartData}
              dataKey="OrganisationScore"
              fill="#16AAE2"
              shape="circle"
              r={4}
              legendType="none"
            />
            <Radar
              dataKey="BenchmarkScore"
              fill="none"
              strokeWidth={4}
              fillOpacity={0.3}
              stroke="#88C340"
              className="fill-[#88C340]"
            />
            <Scatter
              data={chartData}
              dataKey="BenchmarkScore"
              fill="#88C340"
              shape="circle"
              r={4}
              legendType="none"
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}