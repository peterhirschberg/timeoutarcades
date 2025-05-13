<template>
  <article class="content-page">
    <h1 class="heading">SIGN THE GUESTBOOK</h1><br>

    <v-text-field label="Your Name" v-model="name" persistent-hint hint="Required"></v-text-field>
    <v-text-field label="Your Location" v-model="location" persistent-hint hint="Required"></v-text-field>
    <v-text-field label="Your Message!" v-model="message" persistent-hint hint="Required"></v-text-field>

    <br><br>

    <v-img contain :src="'/captcha/' + captchaIndex + '.jpg'" width="280px"></v-img>
    <v-text-field label="This is a picture of a ..." v-model="captcha" persistent-hint hint="Required"></v-text-field>

    <br><br>    

    <v-btn color="primary" @click="onSign" ref="submit" :disabled="!formEnabled">SUBMIT</v-btn>

  </article>
</template>

<script>
const axios = require('axios')

export default {
  name: 'SignGuestbook',
  data() {
    return {
      name: '',
      location: '',
      message: '',
      captcha: '',
      captchaIndex: 0,
      formEnabled: false
    }
  },
  mounted() {
    this.captchaIndex = Math.ceil(Math.random() * 5)
    console.log(this.captchaIndex)
    this.updateSubmitButton()
  },
  methods: {
    async onSign() {
      const captchaNames = [
        'cat', 'dog', 'horse', 'car', 'house'
      ]
      if (this.captcha.toLowerCase() === captchaNames[this.captchaIndex-1]) {
        const date = new Date()
        const timestamp = date.getTime().toString()
        axios.post('https://ol6wo1dv47.execute-api.us-east-2.amazonaws.com/prod/guestbook?guestid=' + timestamp, {
          message: this.message.replace(/"/g, '').replace(/'/g, ''),
          name: this.name.replace(/"/g, '').replace(/'/g, ''),
          location: this.location.replace(/"/g, '').replace(/'/g, ''),
          timestamp
        }).then(() => {
            console.log('OK!')
            this.$router.push('Guestbook').catch(err => {})
          }
        )
        .catch(error => {
          console.log('GUESTBOOK ERROR: ' + error)
        })
      } else {
        alert('Please correct your CAPTCHA response')
      }
    },
    updateSubmitButton() {
      if (this.name.trim().length > 0 && this.location.trim().length > 0 && this.message.trim().length > 0 && this.captcha.trim().length > 0) {
        this.formEnabled = true
      }
      else {
        this.formEnabled = false
      }
    }
  },
  watch: {
    name(value) {
      this.updateSubmitButton()
    },
    location(value) {
      this.updateSubmitButton()
    },
    message(value) {
      this.updateSubmitButton()
    },
    captcha(value) {
      this.updateSubmitButton()
    }
  }
}
</script>

<style scoped lang="scss">
</style>

