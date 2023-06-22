import React from "react";
import { Link } from "react-router-dom";

const MovieTag = () => {
    return (
        <div className="movie__tag">
            <ul>
                <li>
                    <Link to="/">바이오펑크</Link>
                </li>
                <li>
                    <Link to="/">사이버펑크</Link>
                </li>
                <li>
                    <Link to="/">스팀펑크</Link>
                </li>
                <li>
                    <Link to="/">포스트 아포칼립스</Link>
                </li>
                <li>
                    <Link to="/">우주 오페라</Link>
                </li>
            </ul>
        </div>
    );
};

export default MovieTag;
