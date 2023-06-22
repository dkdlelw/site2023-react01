import React from "react";

const youtubeTag = [
  { name: "바이오펑크" },
  { name: "사이버펑크" },
  { name: "스팀펑크" },
  { name: "포스트아포칼립스" },
  { name: "우주 오페라" },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag container">
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
