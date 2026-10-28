import "./scss/Header.scss"
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore"

export const Header = () => {
    const { menus } = useProductStore();
    return (
        <header>
            <div className="inner">
                <div className="header-left">
                    <h1 className="logo">
                        <Link to="/"><img src="/images/logo.svg" alt="logo" /></Link>
                    </h1>
                    <nav>
                        <ul className="main-menu">
                            {menus.map(menu => (
                                <li key={menu.key}>
                                    <Link to={`/${menu.key}`}>{menu.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    로그인
                </div>
            </div>
        </header>
    )
}