import { useRef, useEffect } from "react";
import * as d3 from "d3";

const D3Chart = ({ data, chartType }) => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous content
    svg.selectAll("*").remove();

    // Create a group for the chart
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3
      .scaleBand()
      .domain(data.labels)
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data.data)])
      .nice()
      .range([innerHeight, 0]);

    if (chartType === "bar") {
      // Bar Chart
      g.selectAll(".bar")
        .data(
          data.data.map((value, index) => ({
            value,
            label: data.labels[index],
          }))
        )
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.label))
        .attr("y", (d) => yScale(d.value))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => innerHeight - yScale(d.value))
        .attr("fill", "steelblue")
        .on("mouseover", (event, d) => {
          tooltip.style("opacity", 1);
          tooltip
            .html(`${d.label}: ${d.value}`)
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 28}px`);
        })
        .on("mousemove", (event) => {
          tooltip
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", () => {
          tooltip.style("opacity", 0);
        });

      // X-axis
      g.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScale))
        .append("text")
        .attr("class", "x-axis-label")
        .attr("x", innerWidth / 2)
        .attr("y", margin.bottom - 10)
        .attr("text-anchor", "middle")
        .text(data.label);

      // Y-axis
      g.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScale))
        .append("text")
        .attr("class", "y-axis-label")
        .attr("x", -innerHeight / 2)
        .attr("y", -margin.left + 10)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text("Value");
    } else if (chartType === "line") {
      // Line Chart
      const line = d3
        .line()
        .x((d, i) => xScale(data.labels[i]) + xScale.bandwidth() / 2)
        .y((d) => yScale(d));

      g.append("path")
        .data([data.data])
        .attr("class", "line")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2);

      // X-axis
      g.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScale))
        .append("text")
        .attr("class", "x-axis-label")
        .attr("x", innerWidth / 2)
        .attr("y", margin.bottom - 10)
        .attr("text-anchor", "middle")
        .text(data.label);

      // Y-axis
      g.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScale))
        .append("text")
        .attr("class", "y-axis-label")
        .attr("x", -innerHeight / 2)
        .attr("y", -margin.left + 10)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text("Value");
    } else if (chartType === "pie") {
      // Pie Chart
      const radius = Math.min(innerWidth, innerHeight) / 2;
      const pie = d3.pie().value((d) => d.value);
      const arc = d3.arc().innerRadius(0).outerRadius(radius);

      g.attr("transform", `translate(${innerWidth / 2},${innerHeight / 2})`);

      const pieChart = g
        .selectAll(".arc")
        .data(
          pie(
            data.data.map((value, index) => ({
              value,
              label: data.labels[index],
            }))
          )
        )
        .enter()
        .append("g")
        .attr("class", "arc");

      pieChart
        .append("path")
        .attr("d", arc)
        .attr("fill", (d) => d3.schemeCategory10[d.index])
        .on("mouseover", (event, d) => {
          tooltip.style("opacity", 1);
          tooltip
            .html(`${d.data.label}: ${d.data.value}`)
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 28}px`);
        })
        .on("mousemove", (event) => {
          tooltip
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", () => {
          tooltip.style("opacity", 0);
        });

      pieChart
        .append("text")
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text((d) => d.data.label);
    }
  }, [data, chartType]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      D3.js
      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "5px",
          borderRadius: "4px",
          pointerEvents: "none",
          opacity: 0,
        }}
      >
        Tooltip
      </div>
      <svg ref={svgRef} width="400" height="300"></svg>
    </div>
  );
};

export default D3Chart;
