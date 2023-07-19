<template>
    <div class="bg-white border border-dark rounded d-flex">
        <img class="img-fluid house-img rounded-start" :src="house.imgUrl" :alt="house.make + ' ' + house.model">
        <div class="p-3">
            <div class="mb-3">
                <h2>{{ house.year }} {{ house.make }} {{ house.model }}</h2>
                <p>{{ house.description }}</p>
                <h3>Listed by: {{ house.creator.name }} on {{ house.createdAt.toLocaleDateString() }}</h3>
                <img class="creator-picture" :src="house.creator.picture" :alt="house.creator.name">
            </div>
        </div>
    </div>
</template>

<script>
import { House } from '../models/House';

export default {
    props: {
        house: { type: House, required: true}
    },
    setup() {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

.house-img {
  width: 40%;
  object-fit: cover;
  object-position: center;
}

.creator-picture {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
}

</style>