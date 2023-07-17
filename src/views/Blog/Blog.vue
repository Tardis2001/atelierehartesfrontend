<template>
    <div class="container">
        <div class="row my-4">
            <div class="col-12 text-center">
                <h4>Posts do meu Blog</h4>
            </div>
        </div>
        <!-- <div class="row">
            <div v-for="post of posts" :key="post.title" class="col-md-12 col-xl-12 col-12 col-sm-12 pt-3 clearfix justify-content-start d-flex">
                <PostBox :post="post"></PostBox>
                <router-link :to="{name : 'Post'}"></router-link>
            </div>

        </div>    -->
        <div class="row">
            <div v-for="post in displayedPosts" :key="post.id" style="white-space: pre-line;" class="col-md-12 col-xl-12 col-12 col-sm-12 pt-3 clearfix justify-content-start d-flex">
                <PostBox :post="post"></PostBox>
            </div>
        </div>
        <div class="row d-flex justify-content-center py-4 my-4">
            <nav>
                <ul class="pagination justify-content-center">
                    <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                        <a class="page-link" href="#" @click.prevent="previousPage">Anterior</a>
                     </li>
                    <li class="page-item" :class="{ 'active': page === currentPage }" v-for="page in total" :key="page">
                        <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
                    </li>
                    <li class="page-item" :class="{ 'disabled': currentPage === limit }">
                        <a class="page-link" href="#" @click.prevent="nextPage">Próxima</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
import PostBox from '@/components/Blog/PostBox.vue';
import axios from 'axios'
export default{
    name:'Blog',
    components:{PostBox},
    data(){
        return {
            posts : [],
            offset : 0,
            limit : 5,
            total : 0,
            currentPage: 1,
            pageNumber : 0
        }
    },
    props:["baseURL"],
    methods:{
        fetchPosts(){
            axios.get(this.baseURL+"blog/posts/?offset="+this.offset+"&pageNumber="+this.pageNumber+"&pageSize="+this.limit)
            .then(res => this.posts = res.data)
            .catch(err => console.log(err))
          
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        goToPage(){
            this.currentpage = page;
        }
    },
    mounted(){
        this.fetchPosts();
    },
    computed:{

        totalPages() {
            return Math.ceil(this.posts.length / this.limit);
        },
        displayedPosts() {
            const start = (this.currentPage - 1) * this.limit;
            const end = start + this.limit;
            return this.posts.slice(start, end);
        },
    }
}
</script>
<style scoped>
</style>