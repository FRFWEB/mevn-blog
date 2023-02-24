<template>
    <div>
        <div class="position-relative">
        <button type="button" @click="openSubMenu" id="btn_master" class="btn btn-primary btn-master"></button>
            <div>
                <ButtonPost />
                <ButtonYTVue />
                <ButtonJokerVue />
            </div>
        </div> 
    </div>
</template>
<script>
import ButtonJokerVue from './ButtonJoker.vue'
import ButtonPost from './ButtonPost.vue'
import ButtonYTVue from './ButtonYT.vue'
export default {
    name: "ButtonMaster",
    components:{
        ButtonJokerVue,
        ButtonPost,
        ButtonYTVue
    },
    data() {
        return {
            thumbnailPost: ''
        }
    },
    methods: {
        openSubMenu(){
            let getSubMenuItems = document.querySelectorAll('#submenu-item')
            let getMasterButton = document.getElementById('btn_master')
            //OPEN MASTER BUTTON
            if(getMasterButton.classList.contains('btn-master')) {
                getMasterButton.classList.remove('btn-master')
                getMasterButton.classList.add('btn-master-close')
            }else{
                getMasterButton.classList.add('btn-master')
                getMasterButton.classList.remove('btn-master-close')
            }
            //OPEN BUTTONS OF SUB MENU ITEMS
            getSubMenuItems.forEach((item)=>{
                item.classList.contains('open-item') ? item.classList.remove('open-item') : item.classList.add('open-item')
            })
        }
    },
}
</script>
<style scoped>
    textarea{
        resize: none;
        height: 200px;
    }
    .btn-master, .btn-master-close{
        width: 80px;
        height: 80px;
        position: fixed;
        bottom: 20px;
        right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-master-close::after{
        content: "";
        border: 4px solid #fff;
        border-left: transparent;
        padding: 17px;
        border-right: transparent;
        position: absolute;
        border-bottom: transparent;
        top: 35px;
        transition: all ease-in-out 0.3s;
        transform: rotate(45deg);
        left: 10px;
    }
    .btn-master-close::before{
        content: "";
        border: 4px solid #fff;
        border-top: transparent;
        padding: 15px;
        border-bottom: transparent;
        border-right: transparent;
        position: absolute;
        left: 10px;
        top: 17px;
        transition: all ease-in-out 0.3s;
        transform: rotate(220deg);
    }
    .btn-master::after{
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
    .btn-master::before{
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
</style>