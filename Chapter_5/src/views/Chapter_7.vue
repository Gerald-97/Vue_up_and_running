<template>
    <div class="form">
        <input type="text" name="title" placeholder="title" v-model="title">
        <button class="form_button" type="submit" @click.prevent="enterTitle">Submit</button>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'CreateLink',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions([
      'postLink'
    ]),
    submitForm() {
        this.postLink(this.title)
    }
  }
}
</script>