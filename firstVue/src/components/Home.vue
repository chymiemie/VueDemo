<template>
    <div>
        <h3>{{msg}}</h3>
    </div>
</template>

<script >
    export default{
        name: 'home',
        data(){
            return {
                msg: '这里是Home视图'
            }
        }
    }
</script>

<style scoped>
    h3{
        background-color: #82c;
    }
</style>