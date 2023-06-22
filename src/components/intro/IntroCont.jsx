import React from "react";

const IntroCont = () => {
    return (
        <section id="introtSection" className="intro__wrap section bg-blue">
            <h3 className="blind">SF 소개</h3>
            <div className="intro__inner container">
                <div className="intro__title">
                    <em>Sience Fiction</em>
                    <h3>
                        SF장르
                        <br />
                        소개
                    </h3>
                    <p>
                        SF 장르에서 주로 다뤄지는
                        <br />
                        장르들에 대한 소개입니다.
                    </p>
                </div>
                <div className="intro__desc">
                    <div>
                        <h4 className="icon-bg1">
                            포스트 아포칼립스(Post-Apocalypse)
                        </h4>
                        <p>
                            포스트 아포칼립스란 대규모 재앙이나 파괴적인
                            사건으로 인해 현대 문명이 붕괴된 후의 세계를
                            가리키는 개념입니다. 이는 종종 대전쟁, 자연 재해,
                            전염병, 핵전쟁, 좀비 바이러스 등의 재앙적 사건을
                            통해 표현됩니다. 포스트 아포칼립스는 인류의 생존,
                            사회적 조직의 붕괴, 자원 부족, 산업 기술의 손실 등을
                            다루며, 새로운 생존 방식과 사회 질서의 형성을 다루는
                            작품들이 많이 나오는 장르입니다.
                        </p>
                    </div>
                    <div className="icon-bg2">
                        <h4>스팀펑크(Steampunk)</h4>
                        <p>
                            스팀펑크는 주로 19세기 말부터 20세기 초의 빅토리아
                            시대와 업적 시대를 배경으로 한 작품들을 지칭합니다.
                            스팀 엔진, 기계 장치, 시계 부품, 브라스, 구리 등의
                            소재와 기술적인 요소들이 풍부하게 사용되며, 현실과
                            판타지가 혼합된 스타일로 표현됩니다.
                        </p>
                    </div>
                    <div className="icon-bg3">
                        <h4>디젤펑크(Dieselpunk)</h4>
                        <p>
                            디젤 펑크는 스팀펑크와 유사한 장르입니다."스팀펑크의
                            세계관보다 조금 미래를 다뤄보면 어떨까?"하는 생각에
                            출발한 장르로 증기 기관, 기계 장치, 기계 공학, 산업
                            혁명과 같은 요소들을 강조하며, 스팀펑크와는 달리
                            내연기관을 사용하는 디젤 엔진을 중심으로 합니다.
                        </p>
                    </div>
                    <div className="icon-bg4">
                        <h4>사이버펑크(Cyberpunk)</h4>
                        <p>
                            사이버펑크(Cyberpunk)는 과학적인 발전과 기술적인
                            혁신이 진행된 미래 사회를 배경으로 한 문학적 장르와
                            서브컬처를 의미합니다. 이 장르는 주로 고도로
                            기술화된 도시, 가상현실, 인공지능, 컴퓨터 해킹 등과
                            같은 요소들을 강조하며, 기술과 인간의 관계, 사회적
                            부조리, 개인의 정체성 등을 탐구합니다.
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroCont;
