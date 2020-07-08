<template>
  <div class="about z-container" id="card">
    <div class="article-box">
      <div class="article-category">
        <Icon type="ios-bookmarks-outline" />文章列表
        <div class="article-num">
          共
          <span>{{count}}</span> 篇
        </div>
      </div>
      <div class="card-left">
        <!-- 文章卡片 -->
        <Card-item
          @changelike="changeliked"
          v-for="(item, index) in lists"
          :title="item.title"
          :time="item.time"
          :Itemimg="item.articleImg"
          :lable="item.lable"
          :categroy="item.articleCategroy"
          :content="item.articleBrief"
          :visited="item.visited"
          :like="item.likeStar"
          :id="item.id"
          :articleId="item.articleId"
          :accessPulishCount="item.accessPulishCount"
          :key="index"
        />
        <!-- <Page
          ref="page"
          :total="count"
          :page-size="4"
          class="page"
          v-show="pageShow"
          @on-change="Pagechange"
          show-total
        />-->
      </div>
    </div>

    <div class="right-box">
      <div class="card-right">
        <!-- 搜索框区 -->
        <div class="search">
          <input placeholder="输入文章关键词搜索.." type="text" v-model="likeSearch" />
          <button class="search-btn" @click="searchLike">search</button>
        </div>
        <Tag color="#eb2f96" bgcolor="#fff0f6">文章标签</Tag>
        
        <!-- 分类区 -->
        <div class="article-categroy">
          <div class="title">
            <i class="iconfont icon-yuanxing"></i>文章分类
            <span>more</span>
          </div>
          <div class="categroy-item">
            <!-- <Badge
              :count="item['COUNT(article_categroy)']"
              :bgcolor="categroyColor[index]"
              v-for="(item, index) in categroysList"
              :key="index"
            >
              <p
                @click="getCategroyInfo(item.article_categroy)"
                class="demo-badge"
              >{{item.article_categroy}}</p>
            </Badge> -->
             <Badge count="1" bgcolor="#2d8cf0">
              <p class="demo-badge" >Flutter系列</p>
            </Badge>
             <Badge count="6" bgcolor="#19be6b">
              <p class="demo-badge" >前端笔记</p>
            </Badge>
             <Badge count="3" bgcolor="#ed4014">
              <p class="demo-badge" >技术文章</p>
            </Badge>
             <Badge count="1" bgcolor="#f90">
              <p class="demo-badge" >数据结构</p>
            </Badge>
             <Badge count="2" bgcolor="#2d8cf0">
              <p class="demo-badge" >服务器配置</p>
            </Badge>
             <Badge count="2" bgcolor="#19be6b">
              <p class="demo-badge" >读书笔记</p>
            </Badge>
          </div>
        </div>
        <!-- 标签区 -->
        <div class="article-lable">
          <div class="title">
            <i class="iconfont icon-pailie"></i>文章标签
            <span>more</span>
          </div>
          <Tag
            class="tag"
            @click.native="getlableInfo(item)"
            :color="bgColor[index]"
            v-for="(item,index) in lablesList"
            :key="index"
          >{{item}}</Tag>
        </div>
        <!-- 最近文章区 -->
        <div class="time-article">
          <div class="title">
           <i class="iconfont icon-shizhong"></i>最近文章
            <span>more</span>
          </div>
          <div
            class="ItemList"
            v-for="(item, index) in navList"
            @click="timeArticle(item.article_id)"
            :key="index"
          >
            <Tooltip content="点击跳转到详情">{{item.title}}</Tooltip>
            <span>
              <Icon type="ios-clock-outline" />
              {{item.time | dateFilter}}
            </span>
          </div>
        </div>
        <!-- 交友信息区 -->
        <!-- <my-makefriends style="margin-right: 1rem;" /> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CardItem from "@/components/card-item/index.vue";
import Badge from "@/components/badge/index.vue";
import Tag from "@/components/tag/index.vue";
@Component({
  components: {
    CardItem,Badge,Tag
  }
})
export default class Article extends Vue {
  private lists: any = [];
  mounted() {
    this.$axios
      .get("news/index")
      .then((res: any) => {
        this.lists = res.data.articles;
        console.log(res.data.articles);
      })
      .catch(function(err: any) {
        console.log(err);
      });
    console.timeEnd("dddd");
  }
}
</script>
<style lang="scss" scoped>
#card {
  font-family: "leileiFont";
  .article-box {
    background: #fff;
    border-radius: 5px;
    margin: 2rem 0;
    .article-category {
      line-height: 20px;
      font-size: 15px;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-bottom: 1.5px solid lightseagreen;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      .article-num {
        display: inline-block;
        float: right;
        color: #333;
        span {
          color: orange;
          font-size: 20px;
        }
      }
    }
    .card-left {
      border: 1px solid #ccc;
      border-top: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      .page {
        text-align: right;
        margin: 1rem;
      }
    }
  }
  @media screen and (max-width: 568px) {
    .article-box {
      margin: 2rem;
    }
  }
  .right-box {
    margin: 2rem 1rem;
    .card-right {
      .search {
        width: 100%;
        margin-bottom: 1rem;
        input,
        .search-btn {
          outline: none;
          border: 1px solid #ccc;
        }
        input {
          width: 76%;
          border-right: none;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          padding: 4px 0;
          text-indent: 5px;
        }
        button.search-btn {
          cursor: pointer;
          width: 24%;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          background: deepskyblue;
          color: white;
          height: 32px;
          font-size: 13px;
        }
      }
      .article-lable,
      .article-categroy,
      .time-article {
        font-size: 14px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        border-radius: 5px;
        margin-bottom: 1rem;
        .title {
          line-height: 20px;
          padding: 0.5rem;
          border-bottom: 1.5px solid lightseagreen;
          span {
            display: block;
            float: right;
            color: rgb(96, 96, 248);
            font-size: 13px;
            cursor: pointer;
          }
          span:hover {
            color: orange;
          }
        }
        .tag {
          white-space: pre-wrap;
          margin: 0.4rem;
          cursor: pointer;
        }
        .tag:hover {
          opacity: 0.8;
        }
      }
      .article-categroy {
        .ivu-badge {
          border: 1px solid #ddd;
          border-radius: 5px;
          margin: 0.5rem;
          padding: 0.2rem;
          transition: opacity 0.6s;
        }
        .ivu-badge:hover {
          opacity: 0.8;
        }
        .categroy-item {
          margin-top: 0.8rem;
          .demo-badge {
            background: #fff;
            margin: 0.1rem;
            font-size: 13px;
            cursor: pointer;
          }
        }
      }
      .time-article {
        .ItemList {
          padding: 0.8rem 0.5rem;
          cursor: pointer;
          color: #555;
          border-bottom: 1px solid #ccc;
          transition: all 0.6s;
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            font-size: 12px;
            color: purple;
            font-weight: bold;
            white-space: nowrap;
          }
        }
        .ItemList:hover {
          background: #f2f2f2;
          color: lightgreen;
          padding-left: 0.8rem;
        }
        .ItemList:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
