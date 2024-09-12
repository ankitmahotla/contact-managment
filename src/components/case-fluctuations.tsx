import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQuery } from 'react-query';
import { fetchHistoricalData, HistoricalData } from '../services/api';

const CaseFluctuations = () => {
  const { data, isLoading, error } = useQuery<HistoricalData>('historicalData', fetchHistoricalData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const chartData = Object.entries(data?.cases || {}).map(([date, cases]) => ({
    date,
    cases,
  }));

  const formatYAxis = (tickItem: number): string => {
    if (tickItem >= 1000000) {
      return `${(tickItem / 1000000).toFixed(1)}M`;
    } else if (tickItem >= 1000) {
      return `${(tickItem / 1000).toFixed(1)}K`;
    }
    return tickItem.toString();
  };

  const formatXAxis = (dateStr: string): string => {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getFullYear().toString().substr(-2)}`;
  };

  const formatTooltip = (value: number): string => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickFormatter={formatXAxis}
            interval="preserveStartEnd"
            minTickGap={50}
          />
          <YAxis 
            tickFormatter={formatYAxis}
            tick={{ fontSize: 12 }}
            width={80}
          />
          <Tooltip 
            formatter={(value: number) => [formatTooltip(value), 'Cases']}
            labelFormatter={(label: string) => new Date(label).toLocaleDateString()}
          />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CaseFluctuations;