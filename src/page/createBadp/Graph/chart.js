import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

// const formCard = () => {
    
    class chart extends Component {
constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "DAI",
          // data: series.monthDataSeries1.prices
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      options: {
        colors: ["#fff"],
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },

        chart: {
          foreColor: "white",
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        fill: {
          colors: "#FDFEFF",
          opacity: 0.1,
          type: "solid",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 1,
        },

        title: {
          text: "",
          align: "left",
        },
        subtitle: {
          text: "",
          align: "left",
        },
        // labels: series.monthDataSeries1.dates,
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          // type: 'datetime',
          title: {
            text: "supply",
            rotate: 0,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: "12px",
              fontFamily: "Montserrat",
              fontWeight: 700,
              cssClass: "apexcharts-yaxis-title",
            },
          },
        },
        yaxis: {
          // opposite: true
          title: {
            text: "price",
            rotate: 0,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: "12px",
              fontFamily: "Montserrat",
              fontWeight: 700,
              cssClass: "apexcharts-yaxis-title",
            },
          },
        },
        legend: {
          horizontalAlign: "right",
        },

        tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          custom: undefined,
          fillSeriesColor: false,
          // theme: false,
          style: {
            fontSize: "12px",
            fontFamily: undefined,
            // color: "red",
          },
        },
        annotations: {
          yaxis: [
            {
              y: 60,
              borderColor: "#fff",
              label: {
                borderColor: "transparent",
                style: {
                  // color: "#FDFEFF",
                  background: "transparent",
                  // foreColor: "##FDFEFF",
                },
                text: "Current price: 1.6425 DAI",
              },
            },
          ],
          xaxis: [
            {
              // x: new Date('23 Nov 2017').getTime(),
              x: 1996,
              borderColor: "#fff",
              label: {
                style: {
                  color: "#fff",
                },
                // text: 'X-axis annotation - 22 Nov'
              },
            },
          ],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default chart;
