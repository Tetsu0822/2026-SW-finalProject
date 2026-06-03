function Footer() {
    return (
        <footer className="bg-primary-900">
            <div className="container">
                <div className="contact">
                    <div className="contact-title">
                        <p>與我聯絡</p>
                        <h2 id="contact-heading">CONTACT</h2>
                        <p>若有數位產品設計和開發相關問題</p>
                        <p>歡迎填寫表單 或 直接與我聯絡！</p>
                        <div className="social">
                            <ul className="social-list" aria-label="社群連結">
                                <li>
                                    <a className="social-item" href="#" aria-label="Instagram">
                                        <i className="bi bi-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="social-item" href="#" aria-label="Line">
                                        <i className="bi bi-line" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="social-item" href="#" aria-label="LinkedIn">
                                        <i className="bi bi-linkedin" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className="contact-email">
                            <i className="bi bi-envelope-open email-icon" aria-hidden="true"></i>
                            <a className="email" href="mailto:service@hexschool.com">service@hexschool.com</a>
                        </p>
                    </div>

                    <form className="contact-form" aria-labelledby="contact-heading">
                        <div className="form-row">
                            <label className="visually-hidden" htmlFor="name">姓名</label>
                            <input id="name" name="name" type="text" className="inputItem" placeholder="姓名" autoComplete="name" />
                            <label className="visually-hidden" htmlFor="phone">手機號碼</label>
                            <input id="phone" name="phone" type="tel" className="inputItem" placeholder="手機號碼" autoComplete="tel" />
                        </div>
                        <label className="visually-hidden" htmlFor="email">電子信箱</label>
                        <input id="email" name="email" type="email" className="inputItem" placeholder="電子信箱" autoComplete="email" />
                        <label className="visually-hidden" htmlFor="message">備註</label>
                        <textarea id="message" name="message" className="inputTextarea" placeholder="備註"></textarea>
                        <button className="submitBtn" type="submit">送出</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer;