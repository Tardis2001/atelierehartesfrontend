<template>
    <div class="container">
            <div class = "row">
                    <div class="col-12 text-center container-sm">
                        <h4>Novo Post</h4>
                    </div>
            </div>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-md-6 px-5 px-md-0">
                        <form>
                            <div class="form-group row g-3">
                                <div class="col-12">
                                    <label>Titulo</label>
                                    <input type="text" class="form-control" v-model="title" required id="title" >
                                </div>
                                <div class="col-12">
                                    <label>Corpo do Post</label>
                                    <textarea type="text" class="form-control" v-model="body" rows="5" required id="title" ></textarea>
                                </div>
                                <div class="col-6"></div>
                                <div class="col-6 d-flex justify-content-end float-end my-2 align-self-end">
                                    <button type="submit" @click="addPost" class="btn btn-primary float-end align-self-end">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-3"></div>
                </div>
        </div>
   
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'
export default{
    data(){
        return{
            id : null,
            title : null,
            body : null
        }
    },
    props:["baseURL"],
    methods : {
        addPost(){
            const newPost = {
                id : this.id,
                title : this.title,
                body : this.body 
            }
            axios({
                method:'post',
                url:this.baseURL+"blog/posts/addPost"+"?token="+this.token,
                data:JSON.stringify(newPost),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).then(res => {
                this.$emit("fetchData");
                this.$router.push({name : 'AdminBlog'})
                swal({
                    text:"Post adicionado com sucesso!!",
                    icon:"success",
                    closeOnClickOutside:true,
                })
            })
        }
    },
    mounted() {
        this.token = localStorage.getItem('token');
        if (!localStorage.getItem('token')) {
            this.$router.push({name : 'Signin'});
        }
    }
}
</script>
<style>
</style>