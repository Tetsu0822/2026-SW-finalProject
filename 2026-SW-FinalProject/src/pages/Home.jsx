import { Link } from "react-router";
function Home() {
    return (
        <>
        <section className="hero">
            <div className="container h-100">
                <div className="row h-100 gap-6 gap-md-0">
                    <div className="col-12 col-md-5 h-100 d-flex flex-column justify-content-center align-items-center position-relative order-2 order-md-1 mb-6 mb-md-0">
                        <h1 className="fs-1 mb-6 w-100">
                            Hello<br />
                            I'm Nelson
                        </h1>
                        <p className="paragraph-md text-start w-100 pb-1">我是一個擁有 10 年經驗的 UIUX 設計師 和 前端工程師</p>
                        <p className="paragraph-md text-start w-100">喜歡把美學和程式結合，打造一個又一個精美的網頁設計！</p>
                        <div className="hero-link label-md">
                            <Link className="heroBtn active" to="/contact">與我聯絡</Link>
                            <Link className="heroBtn" to="/profile">我的履歷</Link>
                        </div>

                        {/* 左上小花裝飾 */}
                        <img className="decorate-3 flower-left-top" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_3.png?raw=true" alt="" />
                        {/* 左上小花線條 */}
                        <img className="decorate-4" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_4.png?raw=true" alt="" />

                        {/* 右下小花裝飾 */}
                        <img className="decorate-3 flower-left-bottom" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_3.png?raw=true" alt="" />
                        {/* 右下小花線條 */}
                        <img className="decorate-5" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_5.png?raw=true" alt="" />
                        {/* 行動版右下小花線條 */}
                        <img className="decorate-6" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_6.png?raw=true" alt="" />
                    </div>
                    <div className="col-12 col-md-7 h-100 position-relative ms-auto order-1 order-md-2">
                        <img className="hero-img" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_person.png?raw=true" alt="Hero Image" />
                        <img className="decorate-1" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_1.png?raw=true" alt="" />
                        <img className="decorate-2" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_2.png?raw=true" alt="" />
                        {/* 右上方小花 */}
                        <img className="decorate-3 flower-right-center" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_3.png?raw=true" alt="" />
                    </div>
                </div>

            </div>
        </section>
        <section className="services">
            <div className="container">
                <p className="fs-xxxs">服務項目</p>
                <h2 className="fs-1 mb-6">SERVICES</h2>
                <div className="services-list">
                    <div className="services-card">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h3 className="services-card-title">
                                GRAPHIC
                            </h3>
                            <div className="services-card-icon">
                                <span className="material-symbols-outlined">
                                    format_color_fill
                                </span>
                            </div>
                        </div>
                        <h4 className="fs-5">平面設計</h4>
                        <p className="services-card-description">Service Description</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;