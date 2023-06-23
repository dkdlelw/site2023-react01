import React, { useState } from "react";
import { Link } from "react-router-dom";

const PortCont = (props) => {
    const [selectedTab, setSelectedTab] = useState("literature");

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <section id="portSection" className={props.attr}>
            <div className="port__inner container">
                <div className="port__btn">
                    <ul>
                        <li
                            className={
                                selectedTab === "literature" ? "active" : ""
                            }
                        >
                            <Link
                                to="#"
                                onClick={() => handleTabClick("literature")}
                            >
                                문학
                            </Link>
                        </li>
                        <li
                            className={
                                selectedTab === "animation" ? "active" : ""
                            }
                        >
                            <Link
                                to="#"
                                onClick={() => handleTabClick("animation")}
                            >
                                애니메이션
                            </Link>
                        </li>
                        <li
                            className={selectedTab === "movies" ? "active" : ""}
                        >
                            <Link
                                to="#"
                                onClick={() => handleTabClick("movies")}
                            >
                                영화/드라마
                            </Link>
                        </li>
                        <li className={selectedTab === "games" ? "active" : ""}>
                            <Link
                                to="#"
                                onClick={() => handleTabClick("games")}
                            >
                                게임
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="port__cont">
                    {selectedTab === "literature" && (
                        <>
                            <div className="port">
                                <figure className="port__header">
                                    <img
                                        src="./assets/images/port/port_01.png"
                                        alt="포트폴리오"
                                    />
                                </figure>
                                <div className="port__body">
                                    <span className="pic">
                                        <img
                                            src="./assets/images/member/member01.jpg"
                                            alt="멤버"
                                        />
                                    </span>
                                    <div className="title">
                                        <h4>아이, 로봇</h4>
                                        <span>
                                            아이작 아시모프(Isaac Asimov){" "}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <img
                                        src="./assets/images/port/port_02.png"
                                        alt="포트폴리오"
                                    />
                                </figure>
                                <div className="port__body">
                                    <span className="pic">
                                        <img
                                            src="./assets/images/member/member02.jpg"
                                            alt="멤버"
                                        />
                                    </span>
                                    <div className="title">
                                        <h4>안드로이드는 전기양을 꿈꾸는가?</h4>
                                        <span>필립 K. 딕 (Philip K. Dick)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <img
                                        src="./assets/images/port/port_03.png"
                                        alt="포트폴리오"
                                    />
                                </figure>
                                <div className="port__body">
                                    <span className="pic">
                                        <img
                                            src="./assets/images/member/member04.jpg"
                                            alt="멤버"
                                        />
                                    </span>
                                    <div className="title">
                                        <h4>스페이스 오디세이 2001</h4>
                                        <span>
                                            아서 C. 클라크 (Stanley Kubrick)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <img
                                        src="./assets/images/port/port_04.png"
                                        alt="포트폴리오"
                                    />
                                </figure>
                                <div className="port__body">
                                    <span className="pic">
                                        <img
                                            src="./assets/images/member/member05.jpg"
                                            alt="멤버"
                                        />
                                    </span>
                                    <div className="title">
                                        <h4>1984</h4>
                                        <span>조지 오웰(George Orwell)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <img
                                        src="./assets/images/port/port_05.png"
                                        alt="포트폴리오"
                                    />
                                </figure>
                                <div className="port__body">
                                    <span className="pic">
                                        <img
                                            src="./assets/images/member/member06.jpg"
                                            alt="멤버"
                                        />
                                    </span>
                                    <div className="title">
                                        <h4>듄</h4>
                                        <span>
                                            프랭크 허버트(Frank Herbert)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <img
                                        src="./assets/images/port/port_06.png"
                                        alt="포트폴리오"
                                    />
                                </figure>
                                <div className="port__body">
                                    <span className="pic">
                                        <img
                                            src="./assets/images/member/member07.jpg"
                                            alt="멤버"
                                        />
                                    </span>
                                    <div className="title">
                                        <h4>11/22/63</h4>
                                        <span>스티븐 킹(Stephen King)</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {selectedTab === "animation" && (
                        <>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://www.netflix.com/kr/title/81054853">
                                        <img
                                            src="./assets/images/port/port_07.png"
                                            alt="애니메이션"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>사이버펑크 : 앳지러너</h4>
                                        <span>
                                            부패와 사이보그 임플란트로 가득한
                                            디스토피아 세상. 재능은 넘치지만
                                            무모한 길거리 소년이 무법의 용병,
                                            엣지러너가 되기 위해 사투를 벌인다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://laftel.net/item/16226/%EC%95%84%ED%82%A4%EB%9D%BC">
                                        <img
                                            src="./assets/images/port/port_08.png"
                                            alt="애니메이션"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>AKIRA</h4>
                                        <span>
                                            무너진 도쿄, 그리고 비밀리에
                                            진행되는 의문의 프로젝트! 제3차
                                            세계대전 이후 붕괴된 도쿄 그곳에
                                            새로 건설된 혼란스러운 도시
                                            ‘네오도쿄’ 오토바이를 몰며 폭주를
                                            일삼던 소년 ‘카네다’는 친구
                                            ‘테츠오’가 예상치 못한 사고를 당하며
                                            정부의 비밀 프로젝트 실험체가
                                            되었음을 알게 되는데…
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://laftel.net/item/16214">
                                        <img
                                            src="./assets/images/port/port_09.png"
                                            alt="애니메이션"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>공각기동대</h4>
                                        <span>
                                            때는 서기 2029년, 아시아의
                                            뉴포트라는 도시. 인간의 뇌도 통신
                                            네트워크의 일부가 된 사회에서 가장
                                            극악한 범죄는 ‘고스트 해킹’이다.
                                            인형사(Puppet Master)라 불리는
                                            정체불명의 악명 높은 고스트 해커가
                                            유럽에서 뉴포트로 주활동 무대를
                                            옮겼다는 소식이 들린다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://www.netflix.com/kr/title/81033445">
                                        <img
                                            src="./assets/images/port/port_10.png"
                                            alt="애니메이션"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>신세기 에반게리온</h4>
                                        <span>
                                            서드 임팩트를 막아라! 대재앙 세컨드
                                            임팩트가 발생한 지 15년 후, 사도의
                                            습격이 시작된다. 사도를 상대할 전투
                                            병기의 파일럿이 된 소년. 병기에 얽힌
                                            은폐된 진실에 다가가게 되는데.
                                            인류의 존망을 짊어진 그, 어떤 선택을
                                            내릴지.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://laftel.net/item/16191/%EC%8B%9C%EB%A6%AC%EC%96%BC-%EC%9D%B5%EC%8A%A4%ED%8E%98%EB%A6%AC%EB%A8%BC%EC%B8%A0-%EB%A0%88%EC%9D%B8">
                                        <img
                                            src="./assets/images/port/port_11.png"
                                            alt="애니메이션"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>serial experiments lain</h4>
                                        <span>
                                            더 이상 이곳에 있을 필요가 없다는
                                            말을 하며 자살한 요모타 치사.
                                            이와쿠라 레인은 얼마 전 자살한
                                            치사로부터 한 메일을 받게 된다.
                                            자신의 육체는 죽었지만 정신은
                                            와이어드(가상세계)에서 살아있다는
                                            내용이었다. 레인은 이를 계기로
                                            와이어드라는 가상 세계에 흥미를 갖게
                                            되고 아버지가 사준 최신 컴퓨터
                                            ‘나비’를 통해 와이어드에 접속한다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://laftel.net/item/13780">
                                        <img
                                            src="./assets/images/port/port_12.png"
                                            alt="애니메이션"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>파프리카</h4>
                                        <span>
                                            사이코 세라피스트 치바 아츠코는
                                            최첨단 테크놀로지를 이용하여
                                            정신치료의 수단으로 개발해내는
                                            정신의료연구소에서 근무하고 있으며
                                            때때로 연구소장의 의뢰로 극비리에
                                            의뢰자의 정신 세계의 근원인 꿈
                                            세계에서 문제의 원인을 밝혀내는
                                            치료를 실행했는데 꿈 속으로 들어간
                                            아츠코는 외견도 성격도 전혀 다른
                                            "파프리카"라는 새로운 인격을 갖게
                                            된다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {selectedTab === "movies" && (
                        <>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://www.netflix.com/kr/title/70136140">
                                        <img
                                            src="./assets/images/movie/movie07.png"
                                            alt="영화"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>스타트렉</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://www.netflix.com/kr/title/70136140">
                                        <img
                                            src="./assets/images/movie/movie08.png"
                                            alt="영화"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>2001 : 스페이스 오디세이</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://www.disneyplus.com/ko-kr/brand/star-wars">
                                        <img
                                            src="./assets/images/movie/movie09.png"
                                            alt="영화"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>스타워즈</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://www.tving.com/contents/M000145536">
                                        <img
                                            src="./assets/images/movie/movie10.png"
                                            alt="영화"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>인터스텔라</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://www.tving.com/contents/M000282734">
                                        <img
                                            src="./assets/images/movie/movie11.png"
                                            alt="영화"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>맨인블랙</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://www.disneyplus.com/ko-kr/movies/in-time/7fnAo3POG2Su">
                                        <img
                                            src="./assets/images/movie/movie12.png"
                                            alt="영화"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>인 타임</h4>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {selectedTab === "games" && (
                        <>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://store.steampowered.com/app/746850/Cloudpunk/">
                                        <img
                                            src="./assets/images/port/port_13.png"
                                            alt="게임"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>CLOUD PUNK</h4>
                                        <span>
                                            복잡하게 얽힌 거대한 사이버 펑크
                                            도시 Nivalis에서 Cloudpunk의
                                            배달부로 일한 첫날 밤, 당신에게
                                            말해줄 자신들의 이야기를 가진 인간,
                                            AI, 안드로이드의 다양한 등장인물을
                                            만나고 상호작용하게 될 것입니다
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://store.steampowered.com/app/1091500/Cyberpunk_2077/">
                                        <img
                                            src="./assets/images/port/port_14.png"
                                            alt="게임"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>사이버펑크 2077</h4>
                                        <span>
                                            사이버펑크 2077은 권력과 돈, 끝없는
                                            신체 개조에 집착하는 어두운 미래의
                                            위험천만한 메갈로폴리스, '나이트
                                            시티'를 배경으로 한 오픈 월드 액션
                                            어드벤처 RPG입니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://store.steampowered.com/app/447530/VA11_HallA_Cyberpunk_Bartender_Action/">
                                        <img
                                            src="./assets/images/port/port_15.png"
                                            alt="게임"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>
                                            VA-11 Hall-A: Cyberpunk Bartender
                                            Action
                                        </h4>
                                        <span>
                                            VA-11 HALL-A: 사이버펑크 바텐더
                                            액션은 웨이퍼스, 기술, 그리고
                                            디스토피아 이후의 삶에 대한 술입니다
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://store.steampowered.com/app/794540/Neo_Cab/">
                                        <img
                                            src="./assets/images/port/port_16.png"
                                            alt="게임"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>Neo Cab</h4>
                                        <span>
                                            자동화에 장악당한 세상에서 인간으로
                                            살아가세요. 로스오호스의 거리에서
                                            택시를 운행하는 마지막 인간 기사인
                                            리나의 입장에서 게임을 플레이하세요.
                                            당신에게 목숨이나 다름없는 친구가
                                            행방불명됐습니다. 돈도 없고 묵을
                                            곳도 없는 처지인 당신은 그저 운전을
                                            계속하는 수밖에 없습니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://store.steampowered.com/app/1368030/_/">
                                        <img
                                            src="./assets/images/port/port_17.png"
                                            alt="게임"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>기원: 변이</h4>
                                        <span>
                                            네온으로 가득 차있고 2D와 3D가
                                            결합된 사이버펑크의 세계
                                            ANNO：Mutationem에 오신 것을
                                            환영합니다! RPG 요소가 융합된 액션
                                            어드벤처 게임에서 일당백의 전투력을
                                            가진 고독한 늑대 같은 여인 “앤”과
                                            함께 사악한 대기업들로 충만된 거대한
                                            도시에서 신비로운 프린지 그룹과
                                            기괴한 생물체를 만나보세요
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="port">
                                <figure className="port__header">
                                    <a href="https://store.steampowered.com/app/589780/The_Red_Strings_Club/">
                                        <img
                                            src="./assets/images/port/port_18.png"
                                            alt="게임"
                                        />
                                    </a>
                                </figure>
                                <div className="port__body">
                                    <div className="title">
                                        <h4>The Red Strings Club</h4>
                                        <span>
                                            레드 스트링 클럽은 운명과 행복에
                                            관한 사이버펑크 서사 경험으로,
                                            대단히 다양한 도예, 바텐딩, 그리고
                                            사람들의 목소리를 흉내 내어 기업
                                            음모를 파헤치는 데 활용됩니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PortCont;
