export const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `grey`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Requests"], // optional
};

export const chartConfig = {
  backgroundColor: "white",
  backgroundGradientFrom: "black",
  backgroundGradientTo: "white",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `black`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "black",
  },
  style: {
    borderRadius: 16,
  }, // optional
};
