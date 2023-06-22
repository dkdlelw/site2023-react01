import React from "react";

const unsplashTag = [
  { name: "SF", query: "Sience fiction" },
  { name: "사이버펑크", query: "cyberpunk" },
  { name: "스팀펑크", query: "steampunk" },
  { name: "포스트아포칼립스", query: "post apocalypse" },
  { name: "우주 오페라", query: "space opera" },
];

const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    const clickedTag = unsplashTag.find(
      (tag) => tag.name === e.target.innerText
    );
    if (clickedTag) {
      const query = encodeURIComponent(clickedTag.query);
      onSearch(query);
    }
  }

  return (
    <div className="unsplash__tag container">
      <div>
        {unsplashTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnsplashTag;
