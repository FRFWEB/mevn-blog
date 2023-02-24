<template>
<div>
  <header class="position-fixed w-100 bg-info ">
    <div class="row">
      <div class="col-12">
        <h1 class="p-2 text-center text-white">ALL IN ONE</h1>
      </div>
    </div>
  </header>
  <main>
    <div class="container-fluid container-content">
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
    </div>
  </main>

  <ButtonMaster />

<!--   <div class="transition"></div> -->
</div>
</template>

<script>
import CardPost from './components/CardPost.vue'
import ButtonMaster from './components/ButtonMaster.vue'
export default {
  name: 'App',
  components: {
    CardPost,
    ButtonMaster
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
          debounce(addMoreContent, 3000)
        }
       function addMoreContent() {
          let boxContent = document.querySelector('#app .container-fluid .row')
          for (let index = 0; index < 8; index++) {
              boxContent.innerHTML += `
              <div class="col-3">
                <div>
                <div class="card mb-3">
                  <a href="{{postUrl}}" class="card-content">
                  <img src="https://loremflickr.com/320/240?random=${index}" class="card-img-top img-fluid img-thumbnaill rounded" alt="Lorem">
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
          }
          deleteLoading('#tmp-loading')
        }
        function debounce (callback, time) {
            createLoading(document.createElement('div'))
            let debounceTiempo;
            clearTimeout(debounceTiempo)
            debounceTiempo = setTimeout(callback , time);
        }

        function createLoading(elementTmp){
          let tmpElement = elementTmp
          tmpElement.classList.add('transition')
          tmpElement.setAttribute('id', 'tmp-loading')
          return document.body.append(tmpElement)
        }

        function deleteLoading(elementIdTmp){
          let getTmpLoading = document.querySelector(elementIdTmp)
          return getTmpLoading.remove()
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
    body::-webkit-scrollbar{
        width: 5px;
        background: #c4c4c4;
        height: 5px;
    }
    body::-webkit-scrollbar-thumb{
      background: #000;
      border-radius: 5px;
    }
    header{
      z-index: 1;
      box-shadow: 6px 3px 5px 0px rgba(0,0,0,0.75);
      -webkit-box-shadow: 6px 3px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 6px 3px 5px 0px rgba(0,0,0,0.75);
    }
    .container-content{
      padding-top: 5%;
    }

    body::before{
      content: '';
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    }

    .transition{
        border-left: 30px solid #333;
        height: 100vh;
        position: fixed;
        top: 0;
        transition: all 2s ease-in-out;
        animation: transition-left 4s infinite;
        z-index: 10;
        background: #3335;
        width: 100%;
    }

    @keyframes transition-left{
      0%{
        border-left: 200px solid #333;
        left: 0;
      }
      40%{
        border-left: 30px solid #333;
        left: 50%;
      }
      70%{
        border-left: 200px solid #333;
        left: 50%;
      }
      100%{
        border-left: 30px solid #333;
        left: 98%;
      }
    }

    @keyframes body-opacity{
      0%{
        opacity: 0.8;
      }
      40%{
        opacity: 0.5;
      }
      70%{
        border-left: 200px solid #333;
        left: 50%;
      }
      100%{
        border-left: 30px solid #333;
        left: 98%;
      }
    }
</style>
