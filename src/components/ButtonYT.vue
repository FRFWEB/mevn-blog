<template>
    <div>
        <div class="position-relative content-sub-menu">
            <button type="button" class="btn btn-primary btn-sub-menu" id="submenu-item" data-bs-toggle="modal" data-bs-target="#modalYT">2</button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="modalYT" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title fs-5" id="exampleModalLabel">Create Post</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit="generateYTContent" method="post" id="ytVideoCreate">
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label">Paste Youtube URL</label>
                      <input type="url" v-model="postTitle" class="form-control" placeholder="Title Post">
                    </div>                  
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" form="ytVideoCreate">Generate YT video</button>
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
           
        }
    },
    methods: {
        generateYTContent(){
            console.log('yt content')
        }
    }
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
    .content-sub-menu:nth-child(1) .open-item {
        position: fixed;
        right: 120px;
        bottom: 105px;
        width: 50px;
        height: 50px;
        z-index: 1;
    }
    .content-sub-menu:nth-child(1) .open-item:hover::after{
        content: 'Upload YT Video';
        color: #fff;
        background: #333;
        position: absolute;
        top: -50px;
        padding: 4px 10px;
        left: -40px;
        width: 140px;
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