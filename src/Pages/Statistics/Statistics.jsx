import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const donationCard = JSON.parse(localStorage.getItem('donation'))

   let data = [];

   if(donationCard && donationCard.length > 0) {
    data =[
        {name:"Total donaton", value:12-donationCard.length},
        {name:"my donation",value:donationCard.length},
    ]
   }
   else{
    data =[
        {name:"my donation", value:0},
        {name:"Total donaton",value:100},
     ]
    }


  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
    return (
        
         
        <div className='h-[300px]'>
            <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        
        <div className=' flex justify-center items-center'>
            <div className='flex m-5 justify-center items-center'>
                <h2 className='m'>My Donation</h2>
                <p className='w-[100px] h-[12px] ml-5 bg-[#00C49F]'></p>
                
            </div>
            <div className=' flex justify-center  items-center'>
            <h2>Total donaton</h2>
                <p className='w-[100px] ml-5 h-[12px] bg-[#0088FE]'></p>
                
            </div>
        </div>
        
        
        
        </div>
    
    
        

    
    );
};

export default Statistics;