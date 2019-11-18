<template>
  <div class="exercise">
    <h1>Chapter 1</h1>
    <div class="ex_1">
      <p v-if="hours < 12">Good morning!</p>
      <p v-if="hours >= 12 && hours < 18">Good afternoon!</p>
      <p v-if="hours >= 18">Good evening!</p>
    </div>
    <div class="ex_2">
      <h1>Hello {{subject}}</h1>
    </div>
    <button :disabled="buttonDisabled">Test button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: new Date().getHours(),
      subject: "Gerald",
      buttonDisabled: true,
    }
  }
}
</script>

