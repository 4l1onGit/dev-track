"use client";
import React from "react";
import {
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
} from "recharts";

const confidenceData = [
  { date: "2024-12-01", confidence: 2 },
  { date: "2024-12-10", confidence: 3 },
  { date: "2024-12-20", confidence: 4 },
  { date: "2025-01-01", confidence: 3.5 },
  { date: "2025-01-15", confidence: 4.2 },
  { date: "2025-02-01", confidence: 4.5 },
  { date: "2025-02-15", confidence: 4.8 },
  { date: "2025-03-01", confidence: 5 },
];

const LineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={confidenceData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="confidence"
          stroke="#10B981"
          strokeWidth={2}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
