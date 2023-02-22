<template>
    <div>
        <button type="button" class="btn btn-primary btn-new-post" data-bs-toggle="modal" data-bs-target="#modalPost"></button>

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
textarea{
    resize: none;
    height: 200px;
}
    .btn-new-post{
    width: 80px;
    height: 80px;
    position: fixed;
    bottom: 20px;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .btn-new-post::after{
        content: "";
        border: 4px solid #fff;
        border-left: transparent;
        padding: 17px;
        border-right: transparent;
        position: absolute;
        border-bottom: transparent;
        top: 39px;
        transition: all ease-in-out 0.3s;
    }
    .btn-new-post::before{
        content: "";
        border: 4px solid #fff;
        border-top: transparent;
        padding: 15px;
        border-bottom: transparent;
        border-right: transparent;
        position: absolute;
        left: 37px;
        transition: all ease-in-out 0.3s;
    }
    /*
    .btn-new-post:hover::after{
        content: "";
        border: 4px solid #fff;
        border-left: transparent;
        padding: 20px;
        border-right: transparent;
        position: absolute;
        border-bottom: transparent;
        top: 32px;
        transform: rotate(38deg);
        left: 5px;
       
    }
    .btn-new-post:hover::before{
        content: "";
        border: 4px solid #fff;
        border-top: transparent;
        padding: 20px;
        border-bottom: transparent;
        border-right: transparent;
        position: absolute;
        left: 30px;
        transform: rotate(45deg);
        top: 32px;
        
    }
    */
</style>