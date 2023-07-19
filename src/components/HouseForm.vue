<template>
  <form @submit.prevent="createCar()">
        <div class="form-floating mb-3">
            <input v-model="editable.bedrooms" required type="number" max="50" class="form-control" id="bedroom" placeholder="Bedroom Count">
            <label for="make">Bedroom Count</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editable.bathrooms" required type="number" max="50" class="form-control" id="bathroom" placeholder="Bathroom Count">
            <label for="make">Bathroom Count</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editable.levels" required type="number" max="50" class="form-control" id="levels" placeholder="Stories Count">
            <label for="make">How Many Stories</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editable.imgUrl" required type="text" maxlength="300" class="form-control" id="imgUrl" placeholder="Image URL">
            <label for="make">ImageUrl</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editable.year" required type="number" min="1800" max="2030" class="form-control" id="year" placeholder="Year">
            <label for="make">Year Built</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editable.price" required type="number" min="1000" max="100000000" class="form-control" id="price" placeholder="Price">
            <label for="make">Asking Price</label>
        </div>
        <div class="form-floating mb-3">
            <textarea v-model="editable.description" class="form-control" maxlength="1000" placeholder="Leave a description here"
                id="description" style="height: 100px"></textarea>
            <label for="description">Description</label>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';
import { Modal } from 'bootstrap';

export default {
    setup() {
        const createCar = async() => {
            try {
                await housesService.createHouse(editable.value)
                Modal.getOrCreateInstance('#formModal').hide()
            } catch (error) {
                Pop.error(error.message)
            }
        }

        const editable = ref({})

        return {
            createCar,
            editable
        }
    }
}
</script>

<style lang="scss" scoped>

</style>