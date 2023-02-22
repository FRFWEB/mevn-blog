<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-3" v-for="(post, index) in posts" :key="index">
       <CardPost
        :title="post.title"
        :description="post.description"
        :thumbnail="post.thumbnail + index"
        :publish="post.publish"
        :altName="post.altName"
        />
    </div>
  </div>

  <ButtonPost />
</div>
</template>

<script>
import CardPost from './components/CardPost.vue'
import ButtonPost from './components/ButtonPost.vue'
export default {
  name: 'App',
  components: {
    CardPost,
    ButtonPost
  },
  methods: {
    postGenerator(){
      let count = 0
      while(count < 8){
        this.posts.push({
          title: "Lorem ipsum",
          description: "Cupidatat esse pariatur dolore reprehenderit elit fugiat irure magna velit duis incididunt ea cillum tempor. Excepteur dolor ad cupidatat duis laborum excepteur dolore commodo. Minim nisi deserunt laboris velit est nostrud dolore eiusmod aute dolor. Enim nulla exercitation duis sint deserunt officia eiusmod eu enim anim eu esse. Eu qui nulla occaecat ea labore duis irure pariatur do eiusmod.",
          thumbnail: "https://loremflickr.com/320/240?random=",
          publish: "20-02-2023",
          altName: "Lorem ipsum"
        })
        count++
      }
    },
    infiteScroll(){
      this.postGenerator()
      window.addEventListener('scroll', checkScrollDown)
      
      function checkScrollDown() {
        let mouseScrollY = window.innerHeight + window.pageYOffset
        let bodyScrollY = document.querySelector('#app').offsetHeight
        if(mouseScrollY >= bodyScrollY){
          let count = 0
          while(count < 8){
             document.querySelector('#app .container-fluid .row').innerHTML += `
          <div class="col-3">
            <div>
            <div class="card mb-3">
              <a href="{{postUrl}}">
              <img src="https://loremflickr.com/320/240?random=${count}" class="card-img-top img-fluid img-thumbnaill rounded" alt="Lorem">
              <div class="card-body">
                <h5 class="card-title text-dark fw-bold">Lorem ipsum</h5>
                <p class="card-text text-dark">Cupidatat esse pariatur dolore reprehenderit elit fugiat irure magna velit duis incididunt ea cillum tempor. Excepteur dolor ad cupidatat duis laborum excepteur dolore commodo. Minim nisi deserunt laboris velit est nostrud dolore eiusmod aute dolor. Enim nulla exercitation duis sint deserunt officia eiusmod eu enim anim eu esse. Eu qui nulla occaecat ea labore duis irure pariatur do eiusmod.</p>
                <p class="card-text text-dark"> <span class="fw-bold">Publish:</span> 20-02-2023</p>
              </div>
             </a>
            </div>
            </div> 
          </div>
           `
           count++
          }
          count = 0
        }
      }
    }
  },
  mounted() {
    this.infiteScroll()
  },
  data() {
    return {
      posts: []
    }
  },
}
</script>

<style>
#app {
}
</style>
