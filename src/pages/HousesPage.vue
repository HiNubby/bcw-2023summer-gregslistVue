<template>
    <div class="container-fluid">
        <div class="row mb-3">
            <div class="col-12">
                <h1>Houses</h1>
                <button v-if="account.id" class="btn btn-secondary fs-4" data-bs-toggle="modal"
                data-bs-target="#formModal">
                Create House Listing
        </button>
            </div>
        </div>
        <div class="row">
            <div v-for="house in houses" :key="house.id" class="col-md-10 m-auto mb-3">
                <HouseCard :house="house" />
            </div>
        </div>
    </div>
    <ModalComponent>
        <template #header>
            <h2>Post a House Listing</h2>
        </template>
        <template #body>
            <HouseForm />
        </template>
    </ModalComponent>
</template>

<script>
import { computed, onMounted } from 'vue'
import {housesService} from '../services/HousesService.js'
import { AppState } from '../AppState'
import HouseCard from '../components/HouseCard.vue'
import ModalComponent from '../components/ModalComponent.vue'
import HouseForm from '../components/HouseForm.vue'
export default {
    setup() {
        const getHouses = async() => {
            await housesService.getHouses();
        };
        onMounted(() => {
            getHouses();
        });
        return {
            account: computed(() => AppState.account),
            houses: computed(() => AppState.houses)
        };
    },
    components: { HouseCard, ModalComponent, HouseForm }
}
</script>

<style lang="scss" scoped>

</style>