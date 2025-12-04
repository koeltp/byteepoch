import type { TeekConfig } from "@teek/config";

// 文档配置
export const teekDocConfig: TeekConfig = {
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "bothWidthAdjustable",
    },
  },
};

// 博客基础配置
const teekBlogCommonConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,
  loading: true,
  wallpaper: {
    enabled: true,
    hideBanner: true,
  },
  footerInfo: {
    customHtml: `<span id="runtime"></span>`, // 需要搭配 .vitepress/theme/helper/useRuntime.ts 使用
    topMessage: [
      `<span><img src="./animals.png" style="width:750px" alt="字节时代"><span/>`,

      `<a title="Github release" target="_blank" href="https://github.com/koeltp/byteepoch/releases" style="margin-right: 10px;">
        <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/koeltp/byteepoch?logo=github">
      </a>

      <a title="Npm Version" target="_blank" href="https://www.npmjs.com/package/vitepress-theme-teek" style="margin-right: 10px;">
        <img src="https://img.shields.io/npm/v/vitepress-theme-teek?logo=npm&color=%09%23bf00ff" alt="https://img.shields.io/npm/v/vitepress-theme-teek?color=%09%23bf00ff">
      </a>

      <img src="https://img.shields.io/badge/v18.x-x?logo=node.js&label=node" alt="node version" style="margin-right: 10px;">
      <img src="https://img.shields.io/github/languages/code-size/Kele-Bingtang/vitepress-theme-teek?logo=Visual Studio Code&logoColor=blue" alt="GitHub code size in bytes" style="margin-right: 10px;">

      <a title="GitHub Discussions" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/discussions" style="margin-right: 10px;">
        <img src="https://img.shields.io/github/discussions/Kele-Bingtang/vitepress-theme-teek?color=9cf&logo=github" alt="GitHub Discussions">
      </a>

      <a title="MIT License" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/LICENSE" style="margin-right: 10px;">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License">
      </a>
      `,
      `
      <div style="display: flex;align-items: center;justify-content: flex-start;gap: 15px;padding: 10px;">
        <a href="https://www.snzy.cn/website/2025120122000092.html" title="太皮计算器小程序的十年之约" target="_blank" style="display: inline-block;">
          <img style="width:100px;height:36px; display:block;" src="https://www.snzy.cn/images/snzylogo.png" alt="太皮计算器小程序十年之约">
        </a>
        <a href="https://www.snzy.cn/certificate/zhengshu-2025120122000092.html" title="太皮计算器小程序正在履约中" target="_blank" style="display: inline-block;">
          <img src="https://www.snzy.cn/images/snzylyzs.png" alt="太皮计算器小程序正在履约中" style="height:36px; display:block;">
        </a>
       <a href="https://icp.ekucat.com/beian/2025120000.html" title="KUCAT盟2025120000号" target="_blank">KUCAT盟2025120000号</a>
      </div>
      `,
    ],
  },
  docAnalysis: {
    createTime: "2025-12-01",
    statistics: {
      provider: "busuanzi",
    },
  },
  friendLink: {
    list: [
      {
        name: "太皮导航",
        desc: "简洁好用的导航网站大全，自定义你的专属导航页。",
        avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
        link: "https://nav.taipi.top/",
      },
      {
        name: "字节时代",
        desc: "🚀 致力于打造高质量的技术分享平台。",
        avatar: "https://doc.xugaoyi.com/img/logo.png",
        link: "https://www.byteepoch.com/",
      },
    ],
    autoScroll: true,
  },
};

// 博客默认配置
export const teekBlogConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "🎉 ByteEpoch 字节时代",
    description: "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
    bgStyle: "partImg",
  },
};

// 博客小图配置
export const teekBlogParkConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "🎉 ByteEpoch 字节时代",
    bgStyle: "partImg",
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "switch",
  },
};

// 博客大图配置
export const teekBlogFullConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    coverImgMode: "full",
  },
  banner: {
    name: "🎉 ByteEpoch 字节时代",
    bgStyle: "fullImg",
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "types",
  },
  comment: {
    provider: "giscus",
    options: {
      repo: "Kele-Bingtang/vitepress-theme-teek",
      repoId: "R_kgDONpVfBA",
      category: "Announcements",
      categoryId: "DIC_kwDONpVfBM4Cm3v9",
    },
  },
  codeBlock: {
    overlay: true,
  },
  themeEnhance: {
    themeColor: {
      append: [
        {
          label: "博客扩展主题",
          tip: "博客扩展主题",
          options: [
            { label: "紫罗兰", value: "violet", color: "#7166f0" },
            { label: "珊瑚粉", value: "coral-pink", color: "#ff6b6b" },
            { label: "天蓝", value: "sky-blue", color: "#00bbf9" },
            { label: "蓝绿", value: "blue-green", color: "#00f5d4" },
            { label: "石板灰", value: "slate-gray", color: "#708090" },
            { label: "粉红", value: "pink", color: "#f15bb5" },
            { label: "黄绿", value: "yellow-green", color: "#8ac926" },
            { label: "橙红", value: "orange-red", color: "#ff9e6b" },
          ],
        },
      ],
    },
  },
};

// 博客全图配置
export const teekBlogBodyConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  pageStyle: "segment-nav",
  bodyBgImg: {
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
  },
  banner: {
    name: "🎉 ByteEpoch 字节时代",
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "types",
  },
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "original",
    },
  },
};

// 博客卡片配置
export const teekBlogCardConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    postStyle: "card",
  },
  homeCardListPosition: "left",
  banner: {
    name: "🎉 ByteEpoch 字节时代",
    bgStyle: "fullImg",
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "types",
  },
};
