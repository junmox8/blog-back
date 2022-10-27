const { Op } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const { Categorie, User } = require("../models/index");
module.exports = {
  async init() {
    await sequelize.sync({ force: true });
    await User.create({
      username: "a",
      password: "a",
      avatar:
        "http://pic.soutu123.cn/element_origin_min_pic/01/54/05/625746fd5b60878.jpg!/fw/700/quality/90/unsharp/true/compress/true",
      name: "未命名1",
      introduction: "简介",
    });
    await Categorie.bulkCreate([
      {
        name: "tornado",
      },
      {
        name: "flask",
      },
      {
        name: "scikit-learn",
      },
      {
        name: "plotly",
      },
      {
        name: "dash",
      },
      {
        name: "fastapi",
      },
      {
        name: "pyqt",
      },
      {
        name: "scrapy",
      },
      {
        name: "beautifulsoup",
      },
      {
        name: "numpy",
      },
      {
        name: "scipy",
      },
      {
        name: "pandas",
      },
      {
        name: "matplotlib",
      },
      {
        name: "httpx",
      },
      {
        name: "web3.py",
      },
      {
        name: "pytest",
      },
      {
        name: "eclipse",
      },
      {
        name: "tomcat",
      },
      {
        name: "hibernate",
      },
      {
        name: "spring",
      },
      {
        name: "maven",
      },
      {
        name: "struts",
      },
      {
        name: "kafka",
      },
      {
        name: "intellij-idea",
      },
      {
        name: "java-ee",
      },
      {
        name: "spring boot",
      },
      {
        name: "spring cloud",
      },
      {
        name: "jvm",
      },
      {
        name: "junit",
      },
      {
        name: "log4j",
      },
      {
        name: "servlet",
      },
      {
        name: "mybatis",
      },
      {
        name: "nio",
      },
      {
        name: "dubbo",
      },
      {
        name: "线性回归",
      },
      {
        name: "链表",
      },
      {
        name: "贪心算法",
      },
      {
        name: "动态规划",
      },
      {
        name: "排序算法",
      },
      {
        name: "最小二乘法",
      },
      {
        name: "b树",
      },
      {
        name: "模拟退火算法",
      },
      {
        name: "散列表",
      },
      {
        name: "随机森林",
      },
      {
        name: "支持向量机",
      },
      {
        name: "启发式算法",
      },
      {
        name: "宽度优先",
      },
      {
        name: "广度优先",
      },
      {
        name: "深度优先",
      },
      {
        name: "图搜索算法",
      },
      {
        name: "剪枝",
      },
      {
        name: "哈希算法",
      },
      {
        name: "html",
      },
      {
        name: "css",
      },
      {
        name: "js",
      },
      {
        name: "vue2",
      },
      {
        name: "vue3",
      },
      {
        name: "git",
      },
      {
        name: "webpack",
      },
      {
        name: "nodejs",
      },
      {
        name: "express",
      },
      {
        name: "部署",
      },
      {
        name: "云服务",
      },
      {
        name: "react",
      },
      {
        name: "angular",
      },
      {
        name: "axios",
      },
      {
        name: "sequelize",
      },
      {
        name: "微信小程序",
      },
      {
        name: "uniapp",
      },
      {
        name: "taro",
      },
      {
        name: "nextjs",
      },
      {
        name: "nestjs",
      },
      {
        name: "nuxtjs",
      },
    ]);
  },
};
