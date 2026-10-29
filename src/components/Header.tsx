
import "./scss/Header.scss"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/useProductStore"
import { useEffect, useState } from "react";

export const Header = () => {
    // 경로이동
    const location = useLocation();
    // console.log(location);
    // home = true, 나머지는 false
    const navigate = useNavigate();
    const isHome = location.pathname === "/";
    // 스크롤을 체크해줄 변수 만들기
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (!isHome) {
            // 서브페이지
            setIsScrolled(true)
            return
        }

        const handleScroll = () => {
            console.log(window.scrollY);
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener("scroll", handleScroll);
        // 서브 페이지 이동 후 home으로 오면 스크롤 이벤트가 없으므로 위치값 재 체크를 위해 호출
        handleScroll();

        // home에서 벗어나거나 컴포넌트가 사라질 때 이벤트 해지
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [isHome])

    const { menus, searchWordAll, onSetSearchWordAll } = useProductStore();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/searchPage")
    }

    return (
        <header className={isScrolled ? "active" : ""}>
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
                    <ul className="gnb-list">
                        <>
                            <li>
                                <Link to="/login">
                                    <img src="/images/loginMember.png" alt="로그인" />
                                    <span>로그인</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/join">
                                    <img src="/images/loginJoin.png" alt="회원가입" />
                                    <span>회원가입</span>
                                </Link>
                            </li>
                        </>
                        <li className="cart-icon">
                            <Link to="/cart">
                                <img src="/images/cart.png" alt="장바구니" />
                                <span className="cart-num">0</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="search-wrap">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                value={searchWordAll}
                                onChange={(e) => onSetSearchWordAll(e.target.value)}
                            />
                            <button type="submit">
                                <img src="/images/search.png" alt="돋보기" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}
