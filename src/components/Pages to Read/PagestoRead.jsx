import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';
  
  const data = [
    { name: '1984', readPages: 300, totalPages: 324 },
    { name: 'Mockingbird', readPages: 50, totalPages: 328 },
    { name: 'Pride and Prejudice', readPages: 70, totalPages: 400 },
    { name: 'Great Gatsby', readPages: 90, totalPages: 180 },
    { name: 'Moby', readPages: 410, totalPages: 635 },
    { name: 'The Catcher', readPages: 90, totalPages: 300 },
  ];

  const processedData = data.map(book => ({
    ...book,
    nonReadPages: book.totalPages - book.readPages
  }));

const PagestoRead = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={processedData} 
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="readPages" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="nonReadPages" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
    );
};

export default PagestoRead;