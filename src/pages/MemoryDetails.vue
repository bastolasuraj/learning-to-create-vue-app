<template>
<base-layout :page-title="loadedMemory.title" page-default-back-link='/memories'>
<h2 v-if="!loadedMemory">Memories Not found</h2>
<h2 v-else>Here you have it.</h2>
</base-layout>
</template>
<script>
export default{
    data(){
        return{
            memoryId:this.$route.params.id,
        }
    },
    computed:{
        loadedMemory(){
            return this.$store.getters.memory(this.memoryId)
        }
    },
    // watch:{
    //     '$route'(currentRoute){
    //         this.memoryId = currentRoute.params.id;
    //     }
    // }
}
</script>
