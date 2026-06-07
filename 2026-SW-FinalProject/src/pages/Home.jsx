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
                <p className="services-item">服務項目</p>
                <h2 className="services-item-title mb-6">SERVICES</h2>
                <div className="services-list">
                    <div className="services-card">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h3 className="services-card-title fs-10 fs-md-9">
                                GRAPHIC
                            </h3>
                            <div className="services-card-icon">
                                <span className="material-symbols-outlined">
                                    format_color_fill
                                </span>
                            </div>
                        </div>
                        <h4 className="fs-6 fs-md-5">平面設計</h4>
                        <div className="services-footer">
                            <div className="services-footer-text fs-10 fs-md-9">
                                美感易用並重，以 Figma 打造符合直覺的數位體驗
                            </div>
                            <a className="services-footer-icon" href="#">
                                <span className="material-symbols-outlined">
                                    arrow_outward
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h3 className="services-card-title fs-10 fs-md-9">
                                WEBSITE
                            </h3>
                            <div className="services-card-icon">
                                <span className="material-symbols-outlined">
                                    screenshot_monitor
                                </span>
                            </div>
                        </div>
                        <h4 className="fs-5">網頁設計</h4>
                        <div className="services-footer">
                            <div className="services-footer-text fs-10 fs-md-9">
                                美感易用並重，以 Figma 打造符合直覺的數位體驗
                            </div>
                            <a className="services-footer-icon" href="#">
                                <span className="material-symbols-outlined">
                                    arrow_outward
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h3 className="services-card-title fs-10 fs-md-9">
                                FRONTEND
                            </h3>
                            <div className="services-card-icon">
                                <span className="material-symbols-outlined">
                                    web
                                </span>
                            </div>
                        </div>
                        <h4 className="fs-5">前端切版</h4>
                        <div className="services-footer">
                            <div className="services-footer-text fs-10 fs-md-9">
                                精準轉譯設計稿細節，建構流暢穩定 RWD 響應式網頁
                            </div>
                            <a className="services-footer-icon" href="#">
                                <span className="material-symbols-outlined">
                                    arrow_outward
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h3 className="services-card-title fs-10 fs-md-9">
                                BACKEND
                            </h3>
                            <div className="services-card-icon">
                                <span className="material-symbols-outlined">
                                data_table
                                </span>
                            </div>
                        </div>
                        <h4 className="fs-5">後端開發</h4>
                        <div className="services-footer">
                            <div className="services-footer-text fs-10 fs-md-9">
                                佈署穩定系統架構，串接 API 並確保數據處理安全
                            </div>
                            <a className="services-footer-icon" href="#">
                                <span className="material-symbols-outlined">
                                    arrow_outward
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="projects">
            <div className="container">
                <p className="projects-item text-center">專案作品</p>
                <h2 className="projects-item-title text-center mb-6 mb-md-10">PROJECTS</h2>
                <ul>
                    <li className="project-card bg-cover-center bg-primary-50 text-center">
                        <div className="project-card-content p-6 p-md-10">
                            <time className="mb-3 d-block" dateTime="2025-10-16">Oct 16, 2025</time>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">平面設計・網頁設計</p>
                            <h3 className="fs-7 fs-md-6 fw-bold mb-3">品牌視覺與電商整合，多肉植物品牌電商建置</h3>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗</p>
                            <button className="project-card-button btn-reset rounded-pill bg-neutral-700 text-neutral-0 fs-10 fs-md-9">前往專案</button>
                        </div>
                    </li>
                    <li className="project-card bg-cover-center bg-primary-50 text-center">
                        <div className="project-card-content p-6 p-md-10">
                            <time className="mb-3 d-block" dateTime="2025-10-16">Oct 16, 2025</time>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">平面設計・網頁設計・前端切版</p>
                            <h3 className="fs-7 fs-md-6 fw-bold mb-3">數位產品 UI/UX 設計，個人化財務視覺化軟體</h3>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的操作介面</p>
                            <button className="project-card-button btn-reset rounded-pill bg-neutral-700 text-neutral-0 fs-10 fs-md-9">前往專案</button>
                        </div>
                    </li>
                    <li className="project-card bg-cover-center bg-primary-50 text-center">
                        <div className="project-card-content p-6 p-md-10">
                            <time className="mb-3 d-block" dateTime="2025-10-16">Oct 16, 2025</time>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">前端切版・後端開發</p>
                            <h3 className="fs-7 fs-md-6 fw-bold mb-3">品牌識別與包裝設計，法式甜點品牌視覺重塑</h3>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象</p>
                            <button className="project-card-button btn-reset rounded-pill bg-neutral-700 text-neutral-0 fs-10 fs-md-9">前往專案</button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Home;