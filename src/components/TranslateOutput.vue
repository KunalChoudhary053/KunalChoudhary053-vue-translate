<template>
  <div id="translateOutput" class="m-5">
    <h2>Translation: {{translatedText}}</h2>
  </div>
</template>

<script>
// import TranslateForm from './TranslateForm'

export default {
  name: 'TranslateOutput',
  props: [
    "translatedText"
  ]
}
</script>

<style>

</style>
