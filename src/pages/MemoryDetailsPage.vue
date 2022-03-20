<template>
<base-layout :page-title="loadedMemory.title" page-default-back-link='/memories'>
<h2 v-if="!loadedMemory">Memories Not found</h2>
<memory-overview v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description">Here you have it.</memory-overview>
</base-layout>
</template>
<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue';
export default{
    components:{MemoryOverview},
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
