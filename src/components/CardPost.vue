<template>
    <div>
        <div class="card mb-3">
            <a href="{{postUrl}}">
          <img :src="thumbnail" class="card-img-top img-fluid img-thumbnaill rounded" alt="{{altName}}">
          <div class="card-body">
            <h5 class="card-title text-dark fw-bold">{{title}}</h5>
            <p class="card-text text-dark">{{shortText(description)}}</p>
            <p class="card-text text-dark"> <span class="fw-bold">Publish:</span> {{publish}}</p>
            </div>
             </a>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardPost",
    props:{
        title: String,
        description: String,
        publish: String,
        thumbnail: String,
        altName: String,
        postUrl: String
    },
    methods: {
        shortText(text){
            return text.slice(0,120)
        }
    },
}
</script>
<style scoped>
a{
    text-decoration: none;

}
</style>