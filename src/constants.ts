import type { NavItem, HeroSlide, CoreValueItem, RoadmapItem, FeatureItem, PartnershipCard, GuideItem, FaqItem } from "./types";

// Vite의 base 경로를 자동 반영 (로컬: "/", GitHub Pages: "/sai-homepage/")
const BASE = import.meta.env.BASE_URL;

// ===== 네비게이션 =====
export const NAV_ITEMS: NavItem[] = [
  { id: "sai", label: "SAI", type: "scroll", target: "hero" },
  { id: "values", label: "핵심가치", type: "scroll", target: "core-values" },
  { id: "features", label: "주요기능", type: "scroll", target: "features" },
  { id: "partnership", label: "기업제휴", type: "scroll", target: "partnership" },
  { id: "faq", label: "고객지원", type: "link", target: "/faq" },
];

// ===== 히어로 캐러셀 (3슬라이드) =====
export const HERO_SLIDES: HeroSlide[] = [
  {
    label: ["나의 첫 AI 아트 컨설턴트"],
    title: ["미술품, 예술에서", "투자자산으로"],
    backgroundImage: `${BASE}images/bg/hero-slide1.webp`,
    backgroundVideo: `${BASE}videos/bg_01.mp4`,
  },
  {
    label: ["작품을 감상하던 시대에서", "미술자산에 투자하는 시대로,"],
    title: ["SAI가 미술 자산의", "가치 표준을 제시합니다."],
    backgroundImage: `${BASE}images/bg/hero-slide2.webp`,
    backgroundVideo: `${BASE}videos/bg_02.mp4`,
    overlayColor: "rgba(9,25,38,0.3)",
  },
  {
    label: ["미술자산가치를 데이터 기반으로 분석하여", "지속적인 운용을 지원하는"],
    title: ["AI 아트 컨시어지를", "지향합니다."],
    backgroundImage: `${BASE}images/bg/hero-slide3.webp`,
    backgroundVideo: `${BASE}videos/bg_03.mp4`,
    overlayColor: "rgba(0,0,0,0.3)",
  },
];

// ===== 핵심가치 1 =====
export const CORE_VALUES = {
  title: ["데이터와 전문성으로", "미술 자산관리의 새로운 기준을 제시합니다."],
  items: [
    {
      title: "검증된 전문성",
      description: "작품 구매/보관/운반/판매\n서울옥션 25년 노하우로 개별 상담 제공",
      photo: `${BASE}images/values/value-expertise-photo.webp`,
    },
    {
      title: "압도적 데이터 규모",
      description: "640만 경매 기록을 통한\n객관적인 작품 가치 분석",
      photo: `${BASE}images/values/value-data-photo.webp`,
    },
    {
      title: "편리한 정보 접근",
      description: "작가 생애부터 작품 최근 시세까지\n미술품 정보를 한 번에",
      photo: `${BASE}images/values/value-access-photo.webp`,
    },
  ] as CoreValueItem[],
};

// ===== 핵심가치 2 (로드맵) =====
export const ROADMAP = {
  title: ["단계별 확장을 통해", "미술자산관리의 표준이 되겠습니다."],
  items: [
    {
      phase: 1,
      title: "AI 아트\n컨시어지",
      description: '"AI+전문가"가 제공하는 내 작품\n가치평가 및 운송/보관/판매/구매 서비스',
      isCurrent: false,
    },
    {
      phase: 2,
      title: "AI 기반\n미술자산 관리",
      description: "내 포트폴리오 분석 보고서 제공\n(가치평가, 리스크/성과 분석)",
      isCurrent: false,
    },
    {
      phase: 3,
      title: "통합형\n아트 컨시어지",
      description: "내 포트폴리오 맞춤형 보고서 제공 및\n전문 서비스 연계",
      isCurrent: false,
    },
  ] as RoadmapItem[],
};

// ===== 주요기능 =====
export const FEATURES: FeatureItem[] = [
  {
    id: "art-search",
    category: "AI 아트 정보 검색",
    title: "작품 사진 한 장으로\n작가와 작품 찾기",
    description:
      "소장 작품의 사진을 찍어 올려보세요.\n어느 작가가 그렸는지, 제목은 무엇인지\n작가 및 작품 정보를 정리해 알려드립니다.",
    image: `${BASE}images/mockup/feature-search.webp`,
    layout: "left",
    bgColor: "white",
    guideHref: "/guide/art-search",
  },
  {
    id: "price-analysis",
    category: "AI 작품 시세 분석",
    title: "간편하게 알아보는\n내 작품 최근 시세",
    description:
      "640만건 경매 기록에서 추출한 유사 작품\n거래 데이터를 분석하여 가격 추이\n리포트를 제공합니다.",
    image: `${BASE}images/mockup/feature-price.webp`,
    layout: "right",
    bgColor: "white",
    guideHref: "/guide/price-analysis",
  },
  {
    id: "consulting",
    category: "전문가 1:1 상담",
    title: "미술자산 관리를 위한\n전담 아트 컨설턴트",
    description:
      "SAI와 대화하여 유용한 정보를 얻으셨나요?\n실물 자산을 관리하려면 전문가의 도움도 필요합니다.\n서울옥션블루 아트 전문 컨설턴트가 함께 합니다.",
    image: `${BASE}images/mockup/feature-consulting.webp`,
    layout: "left",
    bgColor: "white",
    guideHref: "/guide/consulting",
  },
  {
    id: "premium-service",
    category: "미술자산 맞춤 서비스",
    title: "아트 컬렉팅의 모든 것\n맞춤형 프리미엄 케어",
    description:
      "작품의 구매, 위탁 판매, 수장고 보관, 전문 운송 및 설치 등\n프리미엄 케어 서비스를 연계하여 제공합니다.",
    image: `${BASE}images/bg/feature-premium-bg.webp`,
    layout: "center",
    bgColor: "warm",
  },
];

// ===== 기업제휴 =====
export const PARTNERSHIP = {
  intro: "SAI는 B2B2C 서비스로 기업제휴를 통해 고객과 만납니다.",
  b2bTitle: ["파트너사의 경쟁력을 높이는", "아트 솔루션 인터페이스를 제공합니다."],
  cards: [
    {
      title: "전략적 비즈니스 협업",
      description: "파트너사 어플리케이션에 최적화된\n프리미엄 아트 엔진을 탑재하여 브랜드 가치를 제고하세요.",
    },
    {
      title: "독보적인 고객 충성도 확보",
      description: "VVIP 고객을 위한 차별화된 아트 컨시어지 서비스로\n고객 만족도가 높아집니다.",
    },
    {
      title: "유연한 시스템 연동",
      description: "SAI 서비스는 파트너사가 운용중인\n기존 모바일 서비스에 신속한 연동이 가능합니다.",
    },
    {
      title: "데이터 기반 고객 인사이트",
      description: "고객 분포와 이용 트렌드를 분석할 수 있는\n'SAI 파트너 센터' 대시보드를 제공합니다.",
    },
  ] as PartnershipCard[],
  cta: {
    text: "지금 SAI의 파트너가 되어 보세요.",
    buttonLabel: "기업제휴 문의",
    buttonHref: "mailto:help@seoulauctionblue.com",
    backgroundImage: `${BASE}images/bg/partnership-cta-bg.webp`,
  },
};

// ===== 이용가이드 =====
export const GUIDE_ITEMS: GuideItem[] = [
  {
    id: "art-search",
    category: "AI 아트 정보 검색",
    title: "AI 아트 정보 검색",
    summary: "소장 작품의 사진을 찍어 올려보세요.\n어느 작가가 그렸는지, 제목은 무엇인지\n작가 및 작품 정보를 정리해 알려드립니다.",
    image: `${BASE}images/mockup/feature-search.webp`,
    heroImage: `${BASE}images/bg/hero-slide1.webp`,
    steps: [
      {
        step: 1,
        title: "작품 사진을 올려주세요.",
        description: "",
        subSteps: [
          {
            number: "01",
            description: '"이미지 검색" 또는 "+" 버튼을 터치하여 작품 사진을 불러 올 수 있습니다.',
            images: [
              `${BASE}images/guide/art-search-1-01a.webp`,
              `${BASE}images/guide/art-search-1-01b.webp`,
            ],
          },
          {
            number: "02",
            description: "스마트폰의 앨범에서 검색할 사진을 선택해 주세요.",
            image: `${BASE}images/guide/art-search-1-02.webp`,
          },
          {
            number: "03",
            description: "앨범에서 사진을 선택하면 업로드됩니다.",
            image: `${BASE}images/guide/art-search-1-03.webp`,
          },
        ],
      },
      {
        step: 2,
        title: "작가/작품을 선택해주세요.",
        description: "",
        subSteps: [
          {
            number: "01",
            description: "하나의 작품이 특정되지 않는 경우, 예상되는 작가 목록에서 선택할 수 있습니다.",
            image: `${BASE}images/guide/art-search-2-01.webp`,
          },
          {
            number: "02",
            description: "작가 목록에서 선택 후 해당 작가의 작품 목록에서 대상을 선택할 수 있습니다.",
            image: `${BASE}images/guide/art-search-2-02.webp`,
          },
          {
            number: "03",
            description: "정확히 일치하는 작품이 있다면 바로 표시됩니다.",
            image: `${BASE}images/guide/art-search-2-03.webp`,
          },
        ],
      },
    ],
  },
  {
    id: "price-analysis",
    category: "AI 작품 시세 분석",
    title: "AI 작품 시세 분석",
    summary: "640만건 경매 기록에서 추출한 유사 작품\n거래 데이터를 분석하여 가격 추이\n리포트를 제공합니다.",
    image: `${BASE}images/mockup/feature-price.webp`,
    heroImage: `${BASE}images/bg/hero-slide2.webp`,
    steps: [
      {
        step: 1,
        title: "시세분석을 요청해주세요.",
        description: "",
        subSteps: [
          {
            number: "01",
            description: '"내 작품 시세 분석" 버튼을 선택하고, 작가명과 제목을 대화창에 입력해 주세요.',
            image: `${BASE}images/guide/price-1-01.webp`,
          },
          {
            number: "02",
            description: "시세 분석 결과를 원하는 작품의 작가명과 제목을 대화창에 입력하여 직접 전달합니다.",
            image: `${BASE}images/guide/price-1-02.webp`,
          },
          {
            number: "03",
            description: "AI가 작가의 작품을 분류 및 분석합니다.",
            image: `${BASE}images/guide/price-1-03.webp`,
          },
        ],
      },
      {
        step: 2,
        title: "작가/작품을 선택해주세요.",
        description: "",
        subSteps: [
          {
            number: "01",
            description: "하나의 작품이 특정되지 않는 경우, 예상되는 작가 목록에서 선택할 수 있습니다.",
            image: `${BASE}images/guide/price-2-01.webp`,
          },
          {
            number: "02",
            description: "선택한 작가의 작품 목록에서 작품을 선택해주세요.",
            image: `${BASE}images/guide/price-2-02.webp`,
          },
          {
            number: "03",
            description: "선택한 작품의 분석이 완료되면 시세 리포트가 표시됩니다.",
            image: `${BASE}images/guide/price-2-03.webp`,
          },
        ],
      },
    ],
  },
  {
    id: "consulting",
    category: "1:1 미술 컨설팅 신청",
    title: "1:1 미술 컨설팅 신청",
    summary: "SAI와 대화하여 유용한 정보를 얻으셨나요?\n실물 자산을 관리하려면 전문가의 도움도 필요합니다.\n서울옥션블루 아트 전문 컨설턴트가 함께 합니다.",
    image: `${BASE}images/mockup/feature-consulting.webp`,
    heroImage: `${BASE}images/bg/hero-slide3.webp`,
    steps: [
      {
        step: 1,
        title: "1:1 상담 분야를 선택해주세요.",
        description: "",
        subSteps: [
          {
            number: "홈",
            description: "홈 화면에서 작품 판매, 작품 보관, 이동/설치, 작품 구매, 기타 문의 중 원하는 분야를 선택해 주세요.",
            image: `${BASE}images/guide/consulting-1-01.webp`,
          },
          {
            number: "AI 채팅 중",
            description: "화면 하단의 1:1 미술 컨설팅 버튼을 누르면 컨설팅 페이지로 이동합니다.",
            image: `${BASE}images/guide/consulting-1-02.webp`,
          },
          {
            number: "메뉴",
            description: "우측 상단 햄버거 메뉴 → 1:1 미술 컨설팅 → + 버튼으로 접근합니다.",
            image: `${BASE}images/guide/consulting-1-03.webp`,
          },
        ],
      },
      {
        step: 2,
        title: "상담 신청 내용을 입력해주세요.",
        description: "",
        subSteps: [
          {
            number: "01",
            description: "작품 사진, 신청 내용, 연락처 정보를 입력해 주세요.",
            image: `${BASE}images/guide/consulting-2-01.webp`,
          },
          {
            number: "02",
            description: "입력을 완료하면 전담 아트 컨설턴트가 배정됩니다.",
            image: `${BASE}images/guide/consulting-2-02.webp`,
          },
          {
            number: "03",
            description: "전담 아트 컨설턴트가 배정되면 1:1 채팅을 통해 상담이 진행됩니다.",
            image: `${BASE}images/guide/consulting-2-03.webp`,
          },
        ],
      },
    ],
  },
];

// ===== 고객지원 (FAQ) =====
export const FAQ_CONTACT = {
  email: "help@seoulauctionblue.com",
  phone: "02-514-2505",
  hours: "평일 10:00-17:00 (점심 12:00~13:00, 토/일 공휴일 휴무)",
};

export const FAQ_KEYWORDS = ["전체", "서비스 이용", "작품 검색", "시세 분석", "전문가 상담", "기업제휴", "계정/기타"];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "SAI는 어떤 서비스인가요?",
    answer: "SAI(Seoul Auction Intelligence)는 서울옥션블루가 제공하는 AI 기반 미술 자산관리 서비스입니다. AI 아트 정보 검색, 작품 시세 분석, 전문가 1:1 상담 등의 기능을 통해 미술품을 투자자산으로 관리할 수 있도록 지원합니다.",
    keywords: ["서비스 이용"],
    date: "2026 02.03",
  },
  {
    question: "SAI 서비스는 어디서 이용할 수 있나요?",
    answer: "SAI는 B2B2C 서비스로, 제휴 파트너사의 앱을 통해 이용하실 수 있습니다. 현재 제휴 파트너사를 통해 서비스가 제공되고 있으며, 자세한 내용은 기업제휴 문의를 통해 확인하실 수 있습니다.",
    keywords: ["서비스 이용"],
    date: "2026 02.03",
  },
  {
    question: "SAI 서비스 이용에 별도 비용이 있나요?",
    answer: "SAI의 기본 기능(AI 아트 정보 검색, 시세 분석)은 파트너사 앱 내에서 무료로 이용하실 수 있습니다. 전문가 1:1 상담 및 프리미엄 케어 서비스는 별도 문의가 필요합니다.",
    keywords: ["서비스 이용"],
    date: "2026 02.03",
  },
  {
    question: "작품 사진으로 작가와 작품을 어떻게 찾나요?",
    answer: "SAI의 AI 아트 정보 검색 기능을 이용하시면 됩니다. 소장하고 계신 작품의 사진을 촬영하여 업로드하면, AI가 이미지를 분석하여 작가와 작품 정보를 찾아드립니다. 정확히 일치하는 경우 바로 결과를, 여러 후보가 있는 경우 후보 목록을 제공합니다.",
    keywords: ["작품 검색"],
    date: "2026 02.03",
  },
  {
    question: "어떤 종류의 작품을 검색할 수 있나요?",
    answer: "회화, 판화, 조각 등 다양한 장르의 미술 작품을 검색하실 수 있습니다. 서울옥션의 25년간 축적된 데이터베이스를 기반으로 국내외 작가의 작품 정보를 제공합니다.",
    keywords: ["작품 검색"],
    date: "2026 02.03",
  },
  {
    question: "시세 분석은 어떤 데이터를 기반으로 하나요?",
    answer: "SAI의 시세 분석은 640만 건 이상의 경매 기록 데이터를 기반으로 합니다. 유사 작품의 거래 데이터를 분석하여 가격 추이 리포트를 제공하며, 객관적인 시장 가치를 파악할 수 있습니다.",
    keywords: ["시세 분석"],
    date: "2026 02.03",
  },
  {
    question: "시세 분석 결과는 얼마나 정확한가요?",
    answer: "SAI의 시세 분석은 실제 경매 거래 데이터를 기반으로 하므로 시장 가격의 추이를 객관적으로 보여드립니다. 다만, 개별 작품의 상태, 프로베넌스 등 세부 요인에 따라 실제 거래가는 달라질 수 있으므로, 정확한 감정평가가 필요한 경우 전문가 상담을 권장합니다.",
    keywords: ["시세 분석"],
    date: "2026 02.03",
  },
  {
    question: "전문가 상담은 어떻게 신청하나요?",
    answer: "SAI 앱 내에서 '1:1 미술 컨설팅' 메뉴를 통해 상담을 신청하실 수 있습니다. 작품 판매, 보관, 이동/설치, 구매 등 원하는 분야를 선택하고, 작품 사진과 연락처를 입력하시면 전담 아트 컨설턴트가 배정되어 1:1 채팅으로 상담을 진행합니다.",
    keywords: ["전문가 상담"],
    date: "2026 02.03",
  },
  {
    question: "상담 가능한 시간이 있나요?",
    answer: "고객센터 운영시간은 평일 10:00~17:00 (점심 12:00~13:00)이며, 토/일/공휴일은 휴무입니다. 전문가 상담 신청은 24시간 가능하며, 배정된 컨설턴트가 영업일 기준으로 답변드립니다.",
    keywords: ["전문가 상담"],
    date: "2026 02.03",
  },
  {
    question: "기업제휴는 어떻게 문의하나요?",
    answer: "기업제휴 문의는 help@seoulauctionblue.com으로 이메일을 보내주시면 됩니다. SAI 서비스를 파트너사 앱에 연동하여 고객에게 프리미엄 아트 서비스를 제공할 수 있습니다.",
    keywords: ["기업제휴"],
    date: "2026 02.03",
  },
  {
    question: "파트너사에 제공되는 서비스 범위는 어떻게 되나요?",
    answer: "SAI는 파트너사 앱에 최적화된 프리미엄 아트 엔진을 탑재하여, AI 아트 정보 검색, 시세 분석, 전문가 상담 연계 등의 서비스를 제공합니다. 또한 'SAI 파트너 센터' 대시보드를 통해 고객 이용 트렌드를 분석할 수 있습니다.",
    keywords: ["기업제휴"],
    date: "2026 02.03",
  },
  {
    question: "개인정보는 어떻게 보호되나요?",
    answer: "서울옥션블루는 개인정보보호법에 따라 고객의 개인정보를 안전하게 관리합니다. 자세한 내용은 개인정보처리방침 페이지에서 확인하실 수 있습니다.",
    keywords: ["계정/기타"],
    date: "2026 02.03",
  },
  {
    question: "서비스 이용 중 문제가 발생하면 어디로 문의하나요?",
    answer: "서비스 이용 중 문제가 발생하면 고객센터(02-514-2505) 또는 이메일(help@seoulauctionblue.com)로 문의해 주세요. 평일 10:00~17:00 (점심 12:00~13:00) 동안 상담 가능합니다.",
    keywords: ["계정/기타"],
    date: "2026 02.03",
  },
];

// ===== 회사 정보 =====
export const COMPANY_INFO = {
  name: "(주)서울옥션블루",
  ceo: "이정풍",
  address: "서울특별시 강남구 언주로130길 35 7층",
  businessNumber: "248-88-00333",
  salesNumber: "2016-서울강남 00953",
  phone: "+82 (0)2 514 2505",
  copyright: "Copyright © 2026 Seoul Auction Blue Co. Ltd.  All rights reserved.",
};

// ===== Footer 링크 =====
export const FOOTER_LINKS = [
  { label: "이용 가이드", href: "/guide" },
  { label: "서비스 이용약관", href: "/terms" },
  { label: "개인정보처리방침", href: "/privacy" },
];

// ===== FAMILY SITE =====
export const FAMILY_SITES = [
  { label: "서울옥션블루", href: "https://www.seoulauctionblue.com/" },
  { label: "서울옥션", href: "https://www.seoulauction.com/" },
];
