// 引入mockjs
import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据

const produceNewsData = function () {
    const articles = [];
    for (let i = 0; i < 10; i++) {
        const newArticleObject = {
            accessPulishCount:Mock.mock('@zip'),
            articleBrief: Random.csentence(50, 100),
            articleCategroy:Mock.mock({
                "string|1-10": "★"
              }),
            articleId:Mock.mock('@zip'),
            articleImg:Random.dataImage('300x250', 'mock的图片'),
            content:'',
            id:'',
            lable:'tar',
            likeStar:2,
            time:Random.date(),
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            visited:102,
            authorname: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
    return {
        articles
    }
}
console.log( produceNewsData());

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('news/index', 'get',produceNewsData)
