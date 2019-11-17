<template>
    <p class="paragraph">
        The number is <span class="number">10</span>
    </p>
</template>
<script>
export default {
    props: {
        number: {
            type: Number,
            required: true
        }
    }
}
</script>
<style scoped>
.paragraph {
    background-color: burlywood;
    color: brown;
}
.number {
    font-weight: bold;
}
</style>