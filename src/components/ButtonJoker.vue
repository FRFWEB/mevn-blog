<template>
    <div>
        <div class="position-relative content-sub-menu">
            <button type="button" @click="generateJoke" class="btn btn-primary btn-sub-menu" id="submenu-item">3</button>
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
        generateJoke(){
            console.log('generate joke')
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
    .content-sub-menu:nth-child(1) .open-item {
        position: fixed;
        right: 125px;
        bottom: 20px;
        width: 50px;
        height: 50px;
        z-index: 1;
    }
    .content-sub-menu:nth-child(1) .open-item:hover::after{
        content: 'Generar Chiste';
        color: #fff;
        background: #333;
        position: absolute;
        top: -50px;
        padding: 4px 10px;
        left: -50px;
        width: 150px;
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