import { Link } from "react-router";
function Home() {
    return (
        <>
        {/* HERO SECTION */}
        <section className="hero">
            <div className="container h-100">
                <div className="row h-100 gap-6 gap-md-0">
                    <div className="col-12 col-md-5 h-100 d-flex flex-column justify-content-center align-items-center position-relative order-2 order-md-1 mb-6 mb-md-0">
                        <h1 className="fs-1 mb-6 w-100">
                            Hello<br />
                            I'm Nelson
                        </h1>
                        <p className="paragraph-md text-start w-100 pb-1">我是一個擁有 10 年經驗的 UI/UX 設計師 和 前端工程師</p>
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
        {/* SERVICES SECTION */}
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
        {/* PROJECTS SECTION */}
        <section className="projects">
            <div className="container">
                <p className="projects-item text-center">專案作品</p>
                <h2 className="projects-item-title text-center mb-6 mb-md-10">PROJECTS</h2>
                <ul>
                    <li className="project-card bg-cover-center bg-primary-50 text-center p-md-7">
                        <div className="project-card-content p-6 p-md-10">
                            <time className="mb-3 d-block" dateTime="2025-10-16">Oct 16, 2025</time>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">平面設計・網頁設計</p>
                            <h3 className="fs-7 fs-md-6 fw-bold mb-3">品牌視覺與電商整合，多肉植物品牌電商建置</h3>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗</p>
                            <Link to="#" className="project-card-button btn-reset rounded-pill bg-neutral-700 text-neutral-0 fs-10 fs-md-9">前往專案</Link>
                        </div>
                    </li>
                    <li className="project-card bg-cover-center bg-primary-50 text-center p-md-7">
                        <div className="project-card-content p-6 p-md-10">
                            <time className="mb-3 d-block" dateTime="2025-10-16">Oct 16, 2025</time>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">平面設計・網頁設計・前端切版</p>
                            <h3 className="fs-7 fs-md-6 fw-bold mb-3">數位產品 UI/UX 設計，個人化財務視覺化軟體</h3>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的操作介面</p>
                            <Link to="#" className="project-card-button btn-reset rounded-pill bg-neutral-700 text-neutral-0 fs-10 fs-md-9">前往專案</Link>
                        </div>
                    </li>
                    <li className="project-card bg-cover-center bg-primary-50 text-center p-md-7">
                        <div className="project-card-content p-6 p-md-10">
                            <time className="mb-3 d-block" dateTime="2025-10-16">Oct 16, 2025</time>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">前端切版・後端開發</p>
                            <h3 className="fs-7 fs-md-6 fw-bold mb-3">品牌識別與包裝設計，法式甜點品牌視覺重塑</h3>
                            <p className="fs-10 fs-md-9 fw-normal mb-3">以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象</p>
                            <Link to="#" className="project-card-button btn-reset rounded-pill bg-neutral-700 text-neutral-0 fs-10 fs-md-9">前往專案</Link>
                        </div>
                    </li>
                </ul>
                <div className="d-flex justify-content-center">
                    <Link
                        className="btn-reset rounded-pill bg-neutral-700 text-neutral-0 fs-10 fs-md-9 px-5 py-3 px-md-6 py-md-3"
                        to="#"
                    >
                        探索更多
                    </Link>
                </div>
            </div>
        </section>
        {/* BLOGS SECTION */}
        <section className="blogs">
            <div className="container">
                <div className="blogs-header">
                    <div className="blogs-header-text">
                        <h2>
                            <span className="d-block fs-10 fs-md-9 fw-normal fw-bold">
                                部落格
                            </span>
                            <span className="d-block fs-2 fs-md-1 fw-bold">
                                BLOGS
                            </span>
                        </h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link className="btn-reset btn-outline rounded-pill text-neutral-700 fs-10 fs-md-9 px-5 py-3 px-md-6 py-md-3" to="#">探索更多</Link>
                    </div>
                </div>
                <ul className="d-flex gap-6 overflow-x-auto text-neutral-700 hide-scrollbar">
                    <li className="col-md-4 blogs-card">
                        <div>
                            <img
                                className="blogs-card-img mb-2 mb-2 mb-md-3" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_2.png?raw=true"
                                alt="手機顯示行動應用介面設計畫面"
                            />
                        </div>
                        <div>
                            <p className="fw-normal fs-10 fs-md-9 mb-2 mb-md-3">
                                <span>UI/UX 設計</span>
                                <span>・</span>
                                <span>網頁設計</span>
                                <span>・</span>
                                <span>前端技術</span>
                            </p>
                            <h3 className="fs-7 fs-md-6 fw-bold mb-2 mb-md-3">10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統</h3>
                            <div className="d-flex fw-normal fs-10 fs-md-9 mb-2 mb-md-3">
                                <time datetime="2022-10-16">
                                    <span className="d-mb-block">Oct 16,</span>
                                    <span className="d-mb-block">2022</span>
                                </time>
                                <div className="d-flex ml-auto gap-3">
                                    <div className="d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2 me-md-3">
                                            visibility
                                        </span>
                                        <span className="social-text">110 views</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2 me-md-3">
                                            share
                                        </span>
                                        <span className="social-text">2 shares</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-md-4 blogs-card">
                        <div>
                            <img
                                className="blogs-card-img mb-2 mb-2 mb-md-3" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_3.png?raw=true"
                                alt="手桌面上的盆栽與復古相機"
                            />
                        </div>
                        <div>
                            <p className="fw-normal fs-10 fs-md-9 mb-2 mb-md-3">
                                <span>品牌設計</span>
                                <span>・</span>
                                <span>平面設計</span>
                                <span>・</span>
                                <span>UI/UX 設計</span>
                            </p>
                            <h3 className="fs-7 fs-md-6 fw-bold mb-2 mb-md-3">從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯</h3>
                            <div className="d-flex fw-normal fs-10 fs-md-9 mb-2 mb-md-3">
                                <time datetime="2022-10-16">
                                    <span className="d-mb-block">Oct 16,</span>
                                    <span className="d-mb-block">2022</span>
                                </time>
                                <div className="d-flex ml-auto gap-3">
                                    <div className="d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2 me-md-3">
                                            visibility
                                        </span>
                                        <span className="social-text">110 views</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2 me-md-3">
                                            share
                                        </span>
                                        <span className="social-text">2 shares</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-md-4 blogs-card">
                        <div>
                            <img
                                className="blogs-card-img mb-2 mb-2 mb-md-3" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_5.png?raw=true"
                                alt="筆電上顯示程式碼，使用者正在開發"
                            />
                        </div>
                        <div>
                            <p className="fw-normal fs-10 fs-md-9 mb-2 mb-md-3">
                                <span>前端技術</span>
                                <span>・</span>
                                <span>後端架構</span>
                                <span>・</span>
                                <span>AI 趨勢應用</span>
                            </p>
                            <h3 className="fs-7 fs-md-6 fw-bold mb-2 mb-md-3">揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性</h3>
                            <div className="d-flex fw-normal fs-10 fs-md-9 mb-2 mb-md-3">
                                <time datetime="2022-10-16">
                                    <span className="d-mb-block">Oct 16,</span>
                                    <span className="d-mb-block">2022</span>
                                </time>
                                <div className="d-flex ml-auto gap-3">
                                    <div className="d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2 me-md-3">
                                            visibility
                                        </span>
                                        <span className="social-text">110 views</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2 me-md-3">
                                            share
                                        </span>
                                        <span className="social-text">2 shares</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        {/* SUBSCRIPTION SECTION */}
        <section className="subscriptions">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-12 col-md-5 subscription-img p-0">
                        <img className="" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/subscription.png?raw=true" alt="" />
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="subscriptions-content text-neutral-0">
                            <div className="sub-header">
                                <h2>
                                    <span className="d-block fs-10 fs-md-9 fw-normal fw-bold">
                                        電子報訂閱
                                    </span>
                                    <span className="d-block fs-4 fs-md-1 fw-bold">
                                        SUBSCRIPTION
                                    </span>
                                </h2>
                            </div>
                            <p className="subscription-desc fw-normal">
                                你也在追求設計美感與技術落地的完美平衡嗎？作為資深設計師兼工程師，我深知跨領域協作的痛點。訂閱電子報，我將分享如何利用 AI 工具提升產能！
                            </p>
                            <div className="subscription-form input-group">
                                <input className="form-control" type="email" placeholder="電子信箱" aria-label="電子信箱" />
                                <button className="subscription-submit rounded-pill" type="button">送出</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;