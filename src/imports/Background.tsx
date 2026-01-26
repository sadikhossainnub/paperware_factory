import svgPaths from "./svg-2fiv6umoz3";
import imgShoppingBag01011003X1024Png from "figma:asset/26c3dd878dc6b8092048a743d91266cdd41f2a79.png";
import { imgGroup } from "./svg-7j41x";

function Group() {
  return (
    <div className="absolute inset-[0.5%_-3.04%_-23.3%_-0.38%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7.362px_-4.297px] mask-size-[1920px_860px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1985.69 1056.05">
        <g id="Group">
          <path d={svgPaths.p1e884e80} fill="var(--fill-0, #180F18)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p1ba1fc70} fill="var(--fill-0, #040404)" fillOpacity="0.51" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p127db100} fill="var(--fill-0, #F5F5F5)" fillOpacity="0.42" id="Vector_3" />
            <path d={svgPaths.p87cda00} id="Vector_4" stroke="url(#paint0_linear_473_390)" strokeWidth="1.11111" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p237ee800} fill="var(--fill-0, #F5F5F5)" fillOpacity="0.42" id="Vector_5" />
            <path d={svgPaths.pcf6ac80} id="Vector_6" stroke="url(#paint1_linear_473_390)" strokeWidth="1.11111" />
          </g>
          <path d={svgPaths.p2b214c00} fill="var(--fill-0, #905B00)" id="Vector_7" />
          <path d={svgPaths.p2301ab00} fill="var(--fill-0, #905B00)" id="Vector_8" />
          <path d={svgPaths.p100d4200} fill="var(--fill-0, #805613)" id="Vector_9" />
          <path d={svgPaths.p25cf8b00} fill="var(--fill-0, #060400)" id="Vector_10" />
          <path d={svgPaths.p190e9100} fill="var(--fill-0, #180F18)" id="Vector_11" />
          <path d={svgPaths.p104b7d00} fill="var(--fill-0, #180F18)" id="Vector_12" />
          <path d={svgPaths.p3500cf00} fill="var(--fill-0, #180F18)" id="Vector_13" />
          <path d={svgPaths.p33a6700} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p29cac400} fill="var(--fill-0, #FABF37)" id="Vector_15" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_473_390" x1="784.388" x2="844.135" y1="652.928" y2="677.134">
            <stop stopColor="white" stopOpacity="0.21" />
            <stop offset="1" stopColor="#E8DADA" stopOpacity="0.63" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_473_390" x1="1103.28" x2="1163.03" y1="652.928" y2="677.134">
            <stop stopColor="white" stopOpacity="0.21" />
            <stop offset="1" stopColor="#E8DADA" stopOpacity="0.63" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[860px] overflow-clip right-0 top-0 w-[1920px]" data-name="Component 1">
      <ClipPathGroup />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[825.08px] left-0 overflow-clip top-0 w-[1920px]" data-name="Component 4">
      <Component />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[33px] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="css-4hzbpn mb-0">Explore our handpicked selection of standout</p>
        <p className="css-4hzbpn mb-0">products, each thoughtfully chosen to bring</p>
        <p className="css-4hzbpn mb-0">you the perfect balance of quality,</p>
        <p className="css-4hzbpn mb-0">functionality, and design—tailored to elevate</p>
        <p className="css-4hzbpn mb-0">your lifestyle and meet your everyday needs</p>
        <p className="css-4hzbpn">with ease and style.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[466.66px]" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return <div className="h-[477.08px] shrink-0 w-full" data-name="Container" />;
}

function Container3() {
  return <div className="h-[24px] max-w-[467px] shrink-0 w-full" data-name="Container" />;
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[50px] pt-0 px-0 relative w-full" data-name="Container">
      <Container4 />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-col h-[571.08px] items-start justify-center relative shrink-0 w-[467px]" data-name="Group - 1 / 4">
      <Container5 />
    </div>
  );
}

function Group14Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pl-0 pr-[10px] py-0 relative shrink-0 w-[477px]" data-name="Group - 1 / 4:margin">
      <Group1 />
    </div>
  );
}

function ShoppingBag01011003X1024Png() {
  return (
    <div className="h-[476.77px] max-w-[467px] relative shrink-0 w-[467px]" data-name="shopping-bag-01-01-1003x1024.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShoppingBag01011003X1024Png} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <ShoppingBag01011003X1024Png />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black text-center w-full">
        <p className="css-4hzbpn leading-[39px]">Paper Bag</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[467px] relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[50px] pt-0 px-0 relative w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function Group2() {
  return (
    <div className="content-stretch flex flex-col h-[571.08px] items-start justify-center relative shrink-0 w-[467px]" data-name="Group - 2 / 4">
      <Container9 />
    </div>
  );
}

function Group24Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pl-0 pr-[10px] py-0 relative shrink-0 w-[477px]" data-name="Group - 2 / 4:margin">
      <Group2 />
    </div>
  );
}

function Container10() {
  return <div className="h-[475.83px] shrink-0 w-full" data-name="Container" />;
}

function Container11() {
  return <div className="h-[24px] max-w-[467px] shrink-0 w-full" data-name="Container" />;
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[50px] pt-0 px-0 relative w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function Group3() {
  return (
    <div className="content-stretch flex flex-col h-[571.08px] items-start justify-center relative shrink-0 w-[467px]" data-name="Group - 3 / 4">
      <Container13 />
    </div>
  );
}

function Group34Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pl-0 pr-[10px] py-0 relative shrink-0 w-[477px]" data-name="Group - 3 / 4:margin">
      <Group3 />
    </div>
  );
}

function Container14() {
  return <div className="h-[476.77px] shrink-0 w-full" data-name="Container" />;
}

function Container15() {
  return <div className="h-[24px] max-w-[467px] shrink-0 w-full" data-name="Container" />;
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[50px] pt-0 px-0 relative w-full" data-name="Container">
      <Container16 />
    </div>
  );
}

function Group4() {
  return (
    <div className="content-stretch flex flex-col h-[571.08px] items-start justify-center relative shrink-0 w-[467px]" data-name="Group - 4 / 4">
      <Container17 />
    </div>
  );
}

function Group44Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pl-0 pr-[10px] py-0 relative shrink-0 w-[477px]" data-name="Group - 4 / 4:margin">
      <Group4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex inset-[0_-964.33px_0_-477px] items-start" data-name="Container">
      <Group14Margin />
      <Group24Margin />
      <Group34Margin />
      <Group44Margin />
    </div>
  );
}

function RegionCarousel() {
  return (
    <div className="h-[571.08px] overflow-clip relative shrink-0 w-full" data-name="Region - Carousel">
      <Container18 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Component 1">
          <path d={svgPaths.p29ee1c00} fill="var(--fill-0, #905B00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-[#fad585] content-stretch flex items-start left-0 p-[10px] rounded-[50px] top-[526.08px]" data-name="Component 4">
      <Component2 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Component 1">
          <path d={svgPaths.p8b8280} fill="var(--fill-0, #905B00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute bg-[#fad585] content-stretch flex items-start p-[10px] right-0 rounded-[50px] top-[526.08px]" data-name="Component 4">
      <Component5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <RegionCarousel />
      <Component4 />
      <Component6 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="capitalize css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center">
        <p className="css-ew64yg leading-[28px] text-[20px]">Discover More</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Component 1">
          <path d={svgPaths.p19b7980} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Container">
      <Component7 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-start justify-center relative">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-start px-[43px] py-[23px] relative rounded-[50px] shrink-0" data-name="Component 2">
      <div aria-hidden="true" className="absolute border-3 border-black border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function OverlayBlur() {
  return (
    <div className="bg-[rgba(255,255,255,0)] blur-[0px] content-stretch flex flex-col items-start mix-blend-saturation relative shrink-0 w-full" data-name="Overlay+Blur">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0 w-[466.67px]" data-name="Container">
      <Container19 />
      <OverlayBlur />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[33px] not-italic relative shrink-0 text-[20px] text-black text-right w-full">
        <p className="css-4hzbpn mb-0">Our most loved and talked-about products</p>
        <p className="css-4hzbpn mb-0">are ready to impress and delivered straight to</p>
        <p className="css-4hzbpn">your door.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[466.6600036621094px] pb-[150px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative self-stretch shrink-0 w-[466.66px]" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[20px] items-start max-w-[1440px] pb-[100px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container24 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[240px] py-0 right-0 top-[calc(50%+30px)] translate-y-[-50%]" data-name="Container">
      <Container28 />
    </div>
  );
}

export default function Background() {
  return (
    <div className="relative size-full" data-name="Background">
      <Component3 />
      <Container29 />
    </div>
  );
}