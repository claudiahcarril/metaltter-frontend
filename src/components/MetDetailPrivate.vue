<template>
    <div class="met">
        <div class="met-avatar" @click="$emit('goProfile', met)">
            <img :src="imagesUrl + met.postedBy.avatar" alt="sndfsnb" width="80" height="80">
        </div>
        <div class="met-body">
            <div class="met-name" @click="$emit('goProfile', met)">{{ met.postedBy.name}}</div>
            <div class="met-username" @click="$emit('goProfile', met)">@{{ met.postedBy.username }}</div>
            <div class="met-content">{{ met.message }}</div>
            <div v-if="met.image !== ''" class="met-image">
                <img :src="imagesUrl + met.image" alt="sndfsnb">
            </div>
            <div v-else></div>
            <div class="kudos" >
                <img src="/img/hand.png" alt="" width="25" height="25">
                <div class="met-kudos">{{ met.kudos }}</div>
            </div>
        </div>
        <div class="met-info">
            <div class="met-datecreated">{{ met.dateCreated }}</div>
            <div class="edit-met">
                <ButtonMet>
                    <template v-slot:left-icon>
                        <i class="bi bi-pencil-fill"></i>
                    </template>
                    <template v-slot:right-text>
                        <span>Editar</span>
                    </template>
                </ButtonMet>
                <ButtonMet v-on:click="removeMet">
                    <template v-slot:left-icon>
                        <i class="bi bi-trash"></i>
                    </template>
                    <template v-slot:right-text>
                        <span>Borrar</span>
                    </template>
                </ButtonMet>
            </div>
            <div class="remove-met">

            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { Met } from '@/models/mets'
import config from '@/config'
import ButtonMet from './ButtonMet.vue'
import useMets from '@/composable/useMet'
import { propsToAttrMap } from '@vue/shared'

export default defineComponent({
    name: 'MetDetailPrivate',
    components: {
        ButtonMet,
    },

    props: {
        met: {
            type: Object as PropType<Met>,
                required: true  
        },
    },

    setup(props) {
        const { met, removeMet, fetchMetById } = useMets()

        return{ 
            imagesUrl: config.imagesUrl,

            async removeMet() {
                const metSelected = await fetchMetById(met.value.id)
                // const metId2 = {_id: props.met._id}
                console.log(metSelected)
                // console.log(metId2)
                // await removeMet(metId)
            }
            
         }
    }

})
</script>




<style scoped>

.met {
    display: flex;
    flex-direction: row;
    width: 800px;
    min-height: 150px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    margin: 20px 0 40px 0;
    background-color: #EFEFEF;
    border-radius: 20px;
}

.met:hover {
    background-color: #E4E4E4;
}

.met-avatar > img {
    border-radius: 50%;
    margin: 15px 0 0 15px;
}

.met-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 15px 15px 20px 25px;
    width: 60%;
}

.met-name {
    font-size: x-large;
    color: black;
    font-weight: 700;
}

.met-username {
    font-size: 1.1rem;
    color: black;
    font-weight: 600;
    margin-bottom: 10px;
}

.met-content {
    font-size: 0.9rem;
    color: black;
    text-align: start;
    margin-bottom: 15px;
}

.met-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: end;
}

.met-image > img {
    max-width: 350px;
}


.kudos {
    display: flex;
    flex-direction: row;
    color: black;
    font-weight: 600;
    font-size: 20px;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
}

.met-datecreated {
    font-size: 0.8rem;
    color: black;
    margin: 15px 15px 0 0
}


a {
    text-decoration: none;
    color: white;
    margin-left: 5px;
}

</style>

