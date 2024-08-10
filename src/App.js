import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [small_width, setWidth] = useState('');
  const [small_height, setHeight] = useState('');
  const [result, setResult] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 251, height: 371 }); // Initial dimensions

  const savewidth = (e) => {
    setWidth(e.target.value);
  };
  const saveheight = (e) => {
    setHeight(e.target.value);
  };

  const maxRectangles = (width, height, small_width, small_height) => {
    // 가로 방향으로 배치했을 때
    const count_width =
      Math.floor(width / small_width) * Math.floor(height / small_height);
    const remaining_width = width % small_width;
    const additional_count_width =
      Math.floor(remaining_width / small_height) *
      Math.floor(height / small_width);

    // 세로 방향으로 배치했을 때
    const count_height =
      Math.floor(width / small_height) * Math.floor(height / small_width);
    const remaining_height = height % small_height;
    const additional_count_height =
      Math.floor(remaining_height / small_width) *
      Math.floor(height / small_height);

    // 두 방향 중에서 더 많이 배치할 수 있는 방향을 선택
    if (
      count_width + additional_count_width >
      count_height + additional_count_height
    ) {
      return count_width + additional_count_width;
    } else {
      return count_height + additional_count_height;
    }
  };

  useEffect(() => {
    if (small_width && small_height) {
      setResult(
        maxRectangles(
          dimensions.width,
          dimensions.height,
          small_width,
          small_height
        )
      );
    }
  }, [small_width, small_height, dimensions]);

  const handleSizeChange = (width, height) => {
    setDimensions({ width, height });
  };

  return (
    <div className="App">
      <h1>CLNK 스티커 최대 개수</h1>
      <br />
      <h2>가로 세로 상관없이 사이즈를 한칸에 하나씩 입력하면 됩니다.</h2>
      <input
        type="text"
        id="input"
        placeholder="가로"
        value={small_width}
        onChange={savewidth}
      />
      <input
        type="text"
        id="input"
        placeholder="세로"
        value={small_height}
        onChange={saveheight}
      />
      <br />
      <button onClick={() => handleSizeChange(251, 371)}>251x371</button>
      <button onClick={() => handleSizeChange(274, 414)}>274x414</button>
      <br />
      <h1>{result}</h1>
    </div>
  );
}

export default App;
