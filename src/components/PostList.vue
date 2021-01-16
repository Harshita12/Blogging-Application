<template>
  <div>
    <div class="d-flex">
      <div class="mr-auto">
        <h3>Post List</h3>
      </div>
      <div>
        <input
          type="text"
          class="form-control w-325"
          v-model="search"
          v-on:keyup="onSearch()"
          placeholder="Search by title..."
        />
      </div>
    </div>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Post Id</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in posts" :key="index">
            <th scope="row">{{ item.id }}</th>
            <td>
                <router-link :to="{ path: '/post/'+ item.id}">{{ item.title }}</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pb-5 pl-15 bottom-0">
        <div class="row display-inline-flex">
          <div
            @click="prevPage()"
            class="arrow-icon cursor_pointer"
            :class="{ disabledPagination: pageNum <= 1 }"
          >
            <i class="fa fa-angle-left"></i>
          </div>
          <div class="pagination paggination-5">
            {{ pageNum }} of {{ totalPage }}
          </div>
          <!-- <div class="pagination2 pr-5">of 10</div> -->
          <div
            @click="nextPage()"
            class="arrow-icon cursor_pointer"
            :class="{ disabledPagination: pageNum >= totalPage }"
          >
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      search: "",
      pageNum: 1,
      totalPage: 10,
    };
  },
  mounted() {
    this.getPostList();
  },
  methods: {
    getPostList() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.allPosts = response.data;
          this.allPostsCopy = response.data;
          this.totalPage = this.allPosts.length / 10;
          this.posts = this.paginate(response.data, this.totalPage, 1);
        }).catch((error) => {
            console.warn('Something went wrong');
        });
    },
    onSearch() {
      if (this.search == "") {
        this.allPosts = this.allPostsCopy;
      }
      let postsCopy = this.allPosts;
      this.posts = postsCopy.filter(
        (item) => item.title.toLowerCase().indexOf(this.search) > -1
      );
      this.totalPage = Math.ceil(this.posts.length / 10);
      this.pageNum = 1;
      this.allPosts = this.posts;
      this.posts = this.paginate(this.allPosts, 10, this.pageNum);
    },
    paginate(array, page_size, page_number) {
      return array.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
    },
    nextPage() {
      this.pageNum = this.pageNum + 1;
      this.totalPage =  Math.ceil(this.allPosts.length / 10);
      this.posts = this.paginate(this.allPosts, 10, this.pageNum);
    },
    prevPage() {
      this.pageNum = this.pageNum - 1;
      this.totalPage =  Math.ceil(this.allPosts.length / 10);
      this.posts = this.paginate(this.allPosts, 10, this.pageNum);
    },
  },
};
</script>

<style>
.post_head {
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 30px;
}
.w-325 {
  width: 325px;
}
.pagination {
  min-width: 32px;
  height: 32px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #74797d;
  text-align: center;
  font-size: 13px;
  line-height: 23px !important;
  color: #4a4a4a;
  padding-left: 11px !important;
  padding-top: 3px;
}
.pagination2 {
  min-width: 40px;
  height: 32px;
  background-color: #ffffff;
  font-size: 13px;
  line-height: 23px !important;
  color: #4a4a4a;
  padding-left: 6px !important;
}
.disabledPagination {
  pointer-events: none;
}
.arrow-icon {
  width: 32px;
  height: 32px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #74797d;
  text-align: center;
  font-size: 23px;
  line-height: 10px !important;
  color: #848181;
  padding-top: 3px;
  /* cursor: pointer; */
}
.position-absolute {
  position: absolute;
}
.bottom-0 {
  bottom: 0px;
}
.display-inline-flex {
  display: inline-flex !important;
}
.paggination-5 {
  padding-right: 1rem !important;
}
.cursor_pointer {
  cursor: pointer;
}
</style>
