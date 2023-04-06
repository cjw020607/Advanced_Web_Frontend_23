import Header from "../components/header"
import Footer from '../components/footer';
import Component1 from "../components/component1";
import Component2 from "../components/component2";
import Component3 from "../components/component3";
import Component4 from "../components/component4";
import Component5 from "../components/component5";
import Component6 from "../components/component6";
import Component7 from "../components/component7";
import Component8 from "../components/component8";
import Component10 from "../components/component10";

const MarketPage = () =>
    <>
        <Header />
        <Component1 title1='FEATURED SERVICES' contents={['네이버는 기술 플랫폼으로서 첨단 기술을 누구나 쉽게 활용할 수 있는 일상의 친숙한 서비스로 제공하기 위해','변화를 추구하고, 이용자와 호흡하며 항상 새로운 도전을 시도합니다.']}/>
        <Component2 />
        <Component3 head='커피이야기' content1='내 취향이 담긴 커피,' content2='투썸플레이스에는' content3='내 취향을 담아 섬세하게 만든' content4='나만의 커피가 있습니다.' content5='투썸플레이스 큐그레이더(Q-Grader)는 좋은 산지의 신선한 원두만을 선별해 각각 다른 개성의 세가지 블렌드를 제공합니다. 원두 타입별 최적의 밸런스를 맞춘 로스팅 포인트, 최상의 에스프레소 추출 기술이 더해져 투썸플레이스만의 커피가 완성됩니다.' img="https://www.twosome.co.kr/resources/images/content/img_p_coffeestory.jpg" />
        <Component4 />
        <Component5 content1='우리는 꿈을 현실로 만드는 여정에 함께하는 동반자들이다.' content2='우리는 사람들이 자신의 꿈을 실현하는 것을 도움으로써' content3='더 나은 세상을 만드는데 기여한다.' content4='기술과 서비스,' content5='그리고 혁신적인 아이디어로 우리 모두의 꿈을 현실로 만듭니다.' img='https://kakaoenterprise.com/wp-content/themes/kakaoenterprise/images/sub/info/about-intro-poster.jpg?v1.1' />
        <Component6 />
        <Component7 />
        <Component10 head='한 차원 높은 성능' contents={['프리미엄 기능과 원하는 방식으로 커스터마이징', '할 수 있는 기능으로 Mac 생산성을 한 차원 높여주세요.']} />
        <Component10 reverse={true} head='한 차원 높은 성능' contents={['프리미엄 기능과 원하는 방식으로 커스터마이징', '할 수 있는 기능으로 Mac 생산성을 한 차원 높여주세요.']} />
        <Footer />
    </>


export default MarketPage