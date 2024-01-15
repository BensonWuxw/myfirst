// views/home/booklist 里设置五本书的数据
var bookList = [
    //红色课程
    [{
        author: "马国栋",
        title: "毛泽东《渔家傲·反第二次大“围剿”》",
        url: "http://sqh.gnnu.edu.cn/api/image/55535.01红色课堂_求真务实.jpg",
        id: 156,
        isClass: !0
    }, {
        author: "马国栋",
        title: "刘伯坚《狱中月夜》",
        url: "http://sqh.gnnu.edu.cn/api/image/15625.01红色课堂_清正廉洁.jpg",
        id: 3275,
        isClass: !0
    }, {
        author: "马国栋",
        title: "瞿秋白《卜算子·咏梅》",
        url: "http://sqh.gnnu.edu.cn/api/image/15224.01红色课堂_一心为民.jpg",
        id: 159,
        isClass: !0
    }],
    //红色记忆
    [
        {
            author: "中央苏区史红色文化系列展（军事篇）",
            title: "三大纪律八项注意",
            url: "http://sqh.gnnu.edu.cn/api/image/83655.0军事.jpg"
        }, 
        {
            author: "中央苏区史红色文化系列展（卫生防疫及防空防毒篇）",
            title: "中央军委总军医处",
            url: "http://sqh.gnnu.edu.cn/api/image/23103.02.jpg"
        }, 
        {
            author: "中央苏区史红色文化系列展（宣传篇）",
            title: "《青年实话》”",
            url: "http://sqh.gnnu.edu.cn/api/image/78701.0宣传.jpg"
        }
    ],
    //红色艺术
    [{
        author: "陈勇",
        title: "《红云》",
        url: "http://sqh.gnnu.edu.cn/api/image/67446.0作品：《红云》陈勇.png"
    }, {
        author: "索启",
        title: "《“巧设龙门阵”记开国将军周彬少将》",
        url: "http://sqh.gnnu.edu.cn/api/image/43861.0作品：《“巧设龙门阵”记开国将军周彬少将》索启.png"
    }, {
        author: "肖承光",
        title: "《红土谣》",
        url: "http://sqh.gnnu.edu.cn/api/image/55580.0作品：《红土谣》肖承光.png"
    }],
    //红色走读
    [{
        author: "中国青年网",
        title: "赣师学子三下乡 | 赓续红色基因，关爱留守儿童",
        url: "http://sqh.gnnu.edu.cn/api/image/60224.0赓续红色基因.png"
    }, {
        author: "中国青年网",
        title: "赣师学子三下乡 | 文化融入心坎，赋能乡村振兴",
        url: "http://sqh.gnnu.edu.cn/api/image/84948.0文化融入心坎.png"
    }, {
        author: "中国青年网",
        title: "赣师学子三下乡 | 推普泽乡亮青春，彰显华夏龙文化",
        url: "http://sqh.gnnu.edu.cn/api/image/2501.0推普泽乡亮青春.png"
    }],
    //红色研究
    [{
        author: "王钰",
        title: "世界版图上歌咏：中国红色音乐的海外传播百年史",
        url: "http://sqh.gnnu.edu.cn/api/image/82981.0红色研究 - 红色音乐.jpg"
    }, {
        author: "林卓虹",
        title: "新世纪以来红色文化发展及趋势研究评析",
        url: "http://sqh.gnnu.edu.cn/api/image/91655.0红色研究 - 新世纪以来红色文化发展趋势.jpg"
    }, {
        author: "杨增岽",
        title: "历史、理论与现实三重维度下改革开放精神弘扬理路",
        url: "http://sqh.gnnu.edu.cn/api/image/41123.0红色研究 - 历史理论现实三重维度.jpg"
    }]
]

// src\components\headerItemNav.vue 设置导航跳转
var navUrl = {
    redClass: "https://sqh.gnnu.edu.cn/homeVideo?num=0", //红色课程
    redMemory: "http://sqh.gnnu.edu.cn/homeVideo?num=1",//红色记忆
    redArt: "http://sqh.gnnu.edu.cn/homeVideo?num=2",//红色艺术
    redExperience: "http://sqh.gnnu.edu.cn/homeVideo?num=3",//红色走读
    redStudy: "http://sqh.gnnu.edu.cn/homeVideo?num=4",//红色研究
    checkMore: "http://sqh.gnnu.edu.cn/home/usage",//概览页面 平台介绍 卷轴右下角更多链接
}

// index.less .class-list-item1 ~ .class-list-item10设置轮播图片
var lunboNumber = 4;  // 轮播数量最大设置了10个