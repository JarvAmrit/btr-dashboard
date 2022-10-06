import React from 'react';
import { AiFillCar,AiOutlineDashboard, AiOutlineCar, AiTwotoneCar, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiPieChart } from 'react-icons/fi';
import { BsBarChart } from 'react-icons/bs';
import { MdLegendToggle, MdAssignmentReturn, MdEuroSymbol} from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';


export const topvins = [
  {
    icon: <AiFillCar />,
    eventcnt: '230',
    title: '1G1FX6SO3H41471239',
    desc: 'San Francisco',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <AiOutlineCar />,
    eventcnt: '438',
    title: '1G1JD4SO3H41471236',
    desc: 'San Diego',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <AiTwotoneCar />,
    eventcnt: '312',
    title: '1G1SM6SO3H41471238',
    desc: 'San Jose',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];


export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'home',
        icon: <AiOutlineDashboard />,
      },
    ],
  },


  
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },     
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];



export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'June 2021',
  }, {
    Id: '3',
    Time: 'Sep 2021',
  },
  {
    Id: '4',
    Time: 'Dec 2021',
  },
];

export const lineChartData = [
  [
    { x: new Date(2021, 1, 1), y: 24 },
    { x: new Date(2021, 2, 1), y: 21 },
    { x: new Date(2021, 3, 1), y: 36 },
    { x: new Date(2021, 4, 1), y: 42 },
    { x: new Date(2021, 5, 1), y: 55 },
    { x: new Date(2021, 6, 1), y: 68 },
    { x: new Date(2021, 7, 1), y: 76 },
    { x: new Date(2021, 8, 1), y: 76 },
    { x: new Date(2021, 9, 1), y: 74 },
  
  ],
  [
    { x: new Date(2021, 1, 1), y: 12 },
    { x: new Date(2021, 2, 1), y: 26 },
    { x: new Date(2021, 3, 1), y: 34 },
    { x: new Date(2021, 4, 1), y: 43 },
    { x: new Date(2021, 5, 1), y: 52 },
    { x: new Date(2021, 6, 1), y: 76 },
    { x: new Date(2021, 7, 1), y: 82 },
    { x: new Date(2021, 8, 1), y: 88 },
    { x: new Date(2021, 9, 1), y: 94 },
  
  ],

  [
    { x: new Date(2021, 1, 1), y: 10 },
    { x: new Date(2021, 2, 1), y: 16 },
    { x: new Date(2021, 3, 1), y: 26 },
    { x: new Date(2021, 4, 1), y: 48 },
    { x: new Date(2021, 5, 1), y: 51 },
    { x: new Date(2021, 6, 1), y: 55 },
    { x: new Date(2021, 7, 1), y: 45 },
    { x: new Date(2021, 8, 1), y: 64 },
    { x: new Date(2021, 9, 1), y: 87 },

  ],
];

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: '1G1FX6SO3H41471239',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: '1G1JD4SO3H41471236',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: '1G1SM6SO3H41471238',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];


export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  intervalType: 'Months',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const EventData = [
  {
    icon: <MdLegendToggle />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Total Lifetime Energy(In KWh)',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <MdAssignmentReturn />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Prior Lifetime Energy',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <MdEuroSymbol />,
    amount: '102,386',
    percentage: '+38%',
    title: 'Total Events ',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Total Filtered',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];



export const eventPieChartData = [
  { x: '2018', y: 45, text: '35000' },
  { x: '2019', y: 20, text: '4000' },
  { x: '2020', y: 15, text: '1000' },
  { x: '2021', y: 20, text: '3246' },
];

export const SparklineAreaData = [
  { x: 1,xval: 'Reason 1', yval: 2},
  { x: 2,xval: 'Reason 2', yval: 6},
  { x: 3,xval: 'Reason 3', yval: 8},
  { x: 4,xval: 'Reason 4', yval: 5},
  { x: 5, xval: 'Reason 5', yval: 10},

];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 144.3 },
    { x: 'Mar', y: 173.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Energy Consumed',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Total Energy',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};


export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};

const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Event1',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Event2',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Event3',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];



export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};



export const barChartData = [
  [
    { x: 'VIN1', y: 46 },
    { x: 'VIN2', y: 27 },
    { x: 'VIN3', y: 26 },
  ],
  [
    { x: 'VIN1', y: 37 },
    { x: 'VIN2', y: 23 },
    { x: 'VIN3', y: 18 },
  ],
  [
    { x: 'VIN1', y: 38 },
    { x: 'VIN2', y: 17 },
    { x: 'VIN3', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Event',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Event',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Event',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  }
];

export const pieChartData = [
  { x: 'E1', y: 18, text: '18%' },
  { x: 'E2', y: 8, text: '8%' },
  { x: 'E3', y: 15, text: '15%' },
  { x: 'E4', y: 11, text: '11%' },
  { x: 'E5', y: 18, text: '18%' },
  { x: 'E6', y: 14, text: '14%' },
  { x: 'E7', y: 16, text: '16%' },
];


// ends here


export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  { label: 'E1',
    start: '1',
    end: '10',
    colors: colorMappingData[1] },

  { label: 'E2',
    start: '11',
    end: '20',
    colors: colorMappingData[2] },

  { label: 'E3',
    start: '21',
    end: '30',
    colors: colorMappingData[3] },

];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
  title: 'Value',
};








