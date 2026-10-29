import { HeroSwiper } from "../components/HeroSwiper"
import { SectionSwiper } from "../components/SectionSwiper"
import { SectionTitle } from "../components/SectionTitle"
import "./scss/Home.scss"

export const Home = () => {
    return (
        <div className='container'>
            <HeroSwiper />
            <main>
                <section className="inner">
                    <SectionTitle
                        title="SPECIAL OFFER"
                        subTitle="다가오는 겨울을 맞아 스폐셜 혜택을 만나보세요" />
                    <SectionSwiper category="" count={4} />
                </section>

                <section className="inner">
                    <SectionTitle
                        title="NOW TRENDING"
                        subTitle="이번 시즌 가장 주목받는 인기 아이템 모음 zip" />
                    <div className="women-list">
                        <div className="women-left">
                            <img src="/images/women-big.jpg" alt="" />
                        </div>
                        <div className="women-right">
                            <SectionSwiper category="" count={2} />
                        </div>
                    </div>
                </section>

                <section>
                    <SectionTitle
                        title="낮과 밤 사이, 필요한 한 겹"
                        subTitle="부담 없이 따듯함을 더히는 경량 패딩" />
                    <SectionSwiper category="" count={5} />
                </section>
            </main>
        </div>
    )
}
