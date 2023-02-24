<template>
    <div>
        <div class="position-relative content-sub-menu">
            <button type="button" class="btn btn-primary btn-sub-menu" id="submenu-item" data-bs-toggle="modal" data-bs-target="#modalPost">1</button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="modalPost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title fs-5" id="exampleModalLabel">Create Post</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit="createPost" method="post" id="postCreate">
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label">Title Post</label>
                      <input type="text" v-model="postTitle" class="form-control" placeholder="Title Post">
                    </div>
                    <div class="mb-3">
                       <label for="disabledTextInput" class="form-label">Post Content</label>
                       <textarea name="" v-model="postDescription" class="form-control"></textarea>
                    </div>
                    <div class="mb-3">
                       <label for="disabledTextInput" class="form-label">Upload image</label>
                       <input type="file" @change="uploadFilePost" class="form-control" />
                    </div>                  
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" form="postCreate">Create Post</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ButtonPost",
    data() {
        return {
            thumbnailPost: ''
        }
    },
    methods: {
        uploadFilePost(e){
            let files = e.target.files;
            if (!files.length){ return 'no have image'}
            //CONVERT IMAGE TO BASE64
            const FR = new FileReader();
             FR.readAsDataURL(files[0])
            FR.addEventListener("load", (evt)=> {
                this.thumbnailPost = evt.target.result
            }); 

        },
        convertDate(number){
            if(number < 10){
                return '0'+number
            }
            return number
        },
        createPost(e){
            e.preventDefault();
            let date = new Date()
            const objPost = {
                title: this.postTitle,
                description: this.postDescription,
                thumbnail: this.thumbnailPost,
                publish: date.getFullYear() + '-'+ this.convertDate(date.getMonth() + 1) + '-' + this.convertDate(date.getDate())
            }
            console.log(objPost)
            console.log('submit')
        }
    },
}
</script>
<style scoped>
    .btn-sub-menu {
        right: 53px;
        bottom: 40px;
        position: fixed;
        z-index: -1;
        transition: all ease-in-out 0.5s;
        width: 50px;
        height: 50px;
    }

    .content-sub-menu:nth-child(1) .open-item{
        position: fixed;
        right: 35px;
        bottom: 125px;
        width: 50px;
        height: 50px;
        z-index: 1;
    }
    .content-sub-menu:nth-child(1) .open-item:hover::after{
        content: 'New Post';
        color: #fff;
        background: #333;
        position: absolute;
        top: -50px;
        padding: 4px 10px;
        left: -25px;
        width: 100px;
    }
    .content-sub-menu:nth-child(1) .open-item:hover::before{
        content: '';
        border-bottom:15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid #000;
        border-left: 15px solid transparent;
        position: absolute;
        width: 20px;
        height: 20px;
        top: -20px;
        left: 5px;
    }
</style>