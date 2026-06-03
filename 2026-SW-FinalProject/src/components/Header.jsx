import { useState } from 'react';
import { Link } from 'react-router';
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-primary-50 px-md-10">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-inner d-flex flex-wrap align-items-center">
                            {/* Logo */}
                            <Link className="logo d-none d-md-block" to="/">
                                <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/0163848842b749c38a767e05caabbbd18d2f6dc9/2026-web-camp/device-pc.svg" alt="Nelson Logo" />
                            </Link>
                            {/* 行動版Logo */}
                            <Link className="logo-mobile d-block d-md-none" to="/">
                                <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/0163848842b749c38a767e05caabbbd18d2f6dc9/2026-web-camp/device-mobile.svg" alt="Nelson Logo" />
                            </Link>
                            {/* 行動版選單按鈕 */}
                            <button
                                className="nav-toggle d-md-none ms-auto"
                                type="button"
                                aria-label="Toggle navigation"
                                aria-controls="site-navigation"
                                aria-expanded={isMenuOpen}
                                onClick={handleToggleMenu}
                            >
                                <span className="material-symbols-outlined">dehaze</span>
                            </button>
                            {/* 主導覽選單 */}
                            <ul
                                id="site-navigation"
                                className={`nav-list label-md ms-md-auto ${isMenuOpen ? 'active' : ''}`.trim()}
                            >
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={handleCloseMenu}>服務項目</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={handleCloseMenu}>專案作品</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={handleCloseMenu}>部落格</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={handleCloseMenu}>與我聯絡</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;