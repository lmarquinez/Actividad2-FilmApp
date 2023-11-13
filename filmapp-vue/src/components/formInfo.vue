<template>
    <div class="form-container">
        <div class="card">
            <div class="card-body">
                <form class="form" @submit.prevent="onSubmit">
                    <div class="mb-3">
                        <input v-model="newMovie.title" type="text" class="form-control" id="title" placeholder="Title"
                            required>
                    </div>
                    <div class="mb-3">
                        <input v-model="newMovie.year" type="number" class="form-control" id="year" placeholder="Year"
                            required>
                    </div>
                    <div class="mb-3">
                        <input v-model="newMovie.director" type="text" class="form-control" id="director"
                            placeholder="Director" required>
                    </div>
                    <div class="mb-3">
                        <input v-model="newMovie.img" type="text" class="form-control" id="img" placeholder="Image"
                            required>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        + Add
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newMovie: {
                title: '',
                year: null,
                director: '',
                img: '',
            },
        };
    },
    methods: {
        onSubmit() {
            console.log('Movie added:', this.newMovie);
        },
    },
};
</script>

<style scoped lang="scss">
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
}

.form {
    max-width: 500px;
    width: 100%;
}

.card {
    width: 100%;
    max-width: 500px;
    margin: auto;
}

.btn-primary {
    background-color: #232A34;
}
</style>