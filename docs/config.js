// docs/config.js

// 1. 定义真题年份列表（严格对应您的 data 目录名称）
const YEARS_LIST = [
  { id: "Heisei_29_Spring", name: "平成29年度 春期" },
  { id: "Heisei_29_Autumn", name: "平成29年度 秋期" },
  { id: "Heisei_30_Spring", name: "平成30年度 春期" },
  { id: "Heisei_30_Autumn", name: "平成30年度 秋期" },
  { id: "Heisei_31_Spring", name: "平成31年度 春期" },
  { id: "Reiwa_1_Autumn",  name: "令和元年度 秋期" },
  { id: "Reiwa_2_Autumn",  name: "令和2年度 秋期" },
  { id: "Reiwa_3_Spring",  name: "令和3年度 春期" },
  { id: "Reiwa_3_Autumn",  name: "令和3年度 秋期" },
  { id: "Reiwa_4_Spring",  name: "令和4年度 春期" },
  { id: "Reiwa_4_Autumn",  name: "令和4年度 秋期" },
  { id: "Reiwa_5_Spring",  name: "令和5年度 春期" },
  { id: "Reiwa_5_Autumn",  name: "令和5年度 秋期" },
  { id: "Reiwa_6_Spring",  name: "令和6年度 春期" },
  { id: "Reiwa_6_Autumn",  name: "令和6年度 秋期" },
  { id: "Reiwa_7_Spring",  name: "令和7年度 春期" },
  { id: "Reiwa_7_Autumn",  name: "令和7年度 秋期" }
];

// 2. 定义科目B 5大核心题型
const QUESTIONS_LIST = [
  { id: "Q01_Information_Security", title: "問1 情報セキュリティ" },
  { id: "Q02_Business_Strategy",    title: "問2 経営戦略" },
  { id: "Q05_Network",              title: "問5 ネットワーク" },
  { id: "Q09_Project_Management",   title: "問9 プロジェクトマネジメント" },
  { id: "Q10_Service_Management",   title: "問10 サービスマネジメント" }
];

// 自动输出系统数据源
const EXAM_DATA = {};
YEARS_LIST.forEach(year => {
  EXAM_DATA[year.id] = {
    yearName: year.name,
    questions: QUESTIONS_LIST
  };
});