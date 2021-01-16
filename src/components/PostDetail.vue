<template>
    <div>
        <h3>Post Details</h3>
        <p><b>{{post.title}}</b></p>
        <p>{{post.body}}</p>
        <div>
             <router-link :to="{ path: '/post-list'}" class="btn btn-info">Back</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
        }
    },
    computed: {
        post(){
            return this.$store.getters.postDetail;
        }
    },
    mounted (){
        this.getPost();
    },
    methods: {
        getPost(){
            this.$store.dispatch('getPost',this.$route.params.id)
        }
    }
}
</script>