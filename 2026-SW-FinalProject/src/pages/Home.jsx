function Home() {
    return (
        <section className="hero">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-5 h-100 d-flex flex-column justify-content-center align-items-center relative">
                        <h1 className="fs-1 mb-6 w-100">
                            Hello<br />
                            I'm Nelson
                        </h1>
                        <p className="paragraph-md text-start w-100 pb-1">我是一個擁有 10 年經驗的 UIUX 設計師 和 前端工程師</p>
                        <p className="paragraph-md text-start w-100">喜歡把美學和程式結合，打造一個又一個精美的網頁設計！</p>
                    </div>
                    <div className="col-md-7 h-100 d-flex justify-content-center align-items-center">
                        <img className="hero-img" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_person.png?raw=true" alt="Hero Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;