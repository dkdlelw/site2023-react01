import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import YoutubeSlider from "../youtube/YoutubeSlider";
import YoutubeSearch from "../youtube/YoutubeSearch";
import YoutubeTag from "../youtube/YoutubeTag";
import YoutubeCont from "../youtube/YoutubeCont";

const YoutubePage = () => {
    const [youtubes, setYoutubes] = useState([]);

    useEffect(() => {
        fetch(
            "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=cyberpunk&type=video&key=AIzaSyA7K99aX_UKS2VDnyAlhnk6NApN4cHFfKg"
        )
            .then((response) => response.json())
            .then((result) => setYoutubes(result.items))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <Contents>
                <ContTitle title="youtube" />
                <YoutubeSlider />
                <YoutubeSearch />
                <YoutubeTag />
                <YoutubeCont youtubes={youtubes} />
            </Contents>
        </>
    );
};

export default YoutubePage;
