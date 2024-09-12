import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3Chart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
  }, [data]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <svg ref={svgRef} width="500" height="300"></svg>
    </div>
  );
};

export default D3Chart;
