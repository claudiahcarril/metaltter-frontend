<template>
    <div class="met">
        <div class="met-avatar">{{ met.postedBy.avatar }}</div>
        <div class="met-body">
            <div class="met-name">{{ met.postedBy.name }}</div>
            <div class="met-username">{{ met.postedBy.username }}</div>
            <div class="met-content">{{ met.message }}</div>
            <div class="met-image">{{ met.image }}</div>
            <div class="met-kudos">{{ met.kudos }}</div>
        </div>
        <div class="met-datecreated">{{ met.dateCreated }}</div>
    </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Met } from '@/models/mets'

export default defineComponent({
    name: 'MetDetail',

    props: {
        met: {
            type: Object as PropType<Met>,
                required: true  
        }
    },

    setup() {
        return{}
    }

})
</script>




<style scoped>

.met {
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 250px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    margin: 50px 100px 100px 100px;
    background-color: #d9d9d9;
}








</style>

