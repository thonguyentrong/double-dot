const line = {
  labels: ["2015", "2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "Việt Nam",
      data: [100, 138.8, 152.1, 165.5, 173.4],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      linetension: 0.1,
    },
    {
      label: "Thái Lan",
      data: [100, 120.7, 129.4, 142.7, 151.5],
      fill: false,
      borderColor: "green",
      linetension: 0.1,
    },
    {
      label: "Bruney",
      data: [100, 120.5, 127.4, 121.8, 118.8],
      fill: false,
      borderColor: "blue",
      linetension: 0.1,
    },
    {
      label: "Campuchia",
      data: [100, 105, 102.4, 101.8, 100.1],
      fill: false,
      borderColor: "yellow",
      linetension: 0.1,
    },
  ],
};
var options = {
  responsive: true,
  title: {
    display: true,
    text: "TỐC ĐỘ TĂNG TRƯỞNG GDP CỦA MỘT SỐ QUỐC GIA, GIAI ĐOẠN 2015 - 2019 (Đơn vị: %)",
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: line,
  options: options,
});
