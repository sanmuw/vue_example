<template>
    <li>
        {{ title }}
        <button v-on:click="$emit('remove')">X</button>
    </li>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        props: ['title']
    }
</script>
