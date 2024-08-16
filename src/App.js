import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [small_width, setWidth] = useState('');
  const [small_height, setHeight] = useState('');
  const [result, setResult] = useState(0);
  const savewidth = (e) => {
    setWidth(e.target.value);
  };
  const saveheight = (e) => {
    setHeight(e.target.value);
  };
  const width = 274;
  const height = 414;
  const maxRectangles = (width, height, small_width, small_height) => {
    // 가로 방향으로 배치했을 때

    var count_width =
      Math.floor(width / small_width) * Math.floor(height / small_height);
    var remaining_width = width % small_width;
    var additional_count_width =
      Math.floor(remaining_width / small_height) *
      Math.floor(height / small_width);

    // 세로 방향으로 배치했을 때
    var count_height =
      Math.floor(width / small_height) * Math.floor(height / small_width);
    remaining_width = width % small_height;
    var additional_count_height =
      Math.floor(remaining_width / small_width) *
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
    setResult(maxRectangles(width, height, small_width, small_height));
  }, [width, height, small_width, small_height]);


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
      <h1>{result}</h1>
    </div>
  );
}

export default App;
