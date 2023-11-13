<template>
    <div class="card film-card">
        <img v-if="movie.img" :src="movie.img" class="card-img-top" alt="Movie Poster" />
        <div class="card-body">
            <h5 class="card-title">{{ movie.title.toUpperCase() }}</h5>
            <p class="card-text"><strong>Director:</strong> {{ movie.director }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Year:</strong> {{ movie.year }}</li>
        </ul>
        <div class="card-body d-flex justify-content-between">
            <button class="btn btn-primary">LIKE</button>
            <button class="btn btn-secondary">SHARE</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: Object,
    },
};
</script>

<style scoped lang="scss">
.film-card {
    width: 18rem;
    margin-bottom: 40px;
    margin: 10px;
}

.card-img-top {
    margin-top: 10px;
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
}

.btn-primary {
    background-color: #232A34;
}
</style>