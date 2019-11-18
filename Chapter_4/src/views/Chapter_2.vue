<template>
    <div class="numberSum">
      <p>Sum of numbers: {{ numberTotal }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return{
            numbers: [5, 6, 9, 2, 1]
        }
    },
    computed: {
        numberTotal: {
            get(){
                return this.numbers.reduce((sum, val) => sum + val)
            },
            set(newValue){
                const oldValue = this.numberTotal;
                const difference = newValue - oldValue;
                this.numbers.push(difference);
            }
        }
    }
};
</script>