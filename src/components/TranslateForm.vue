<template>
  <div id="translateForm">
    <form v-on:submit="submitForm"  class="needs-validation" novalidate>
        <div class="form-inline m-5 main-form">
            <textarea v-model="textToTranslate" class="form-control textarea-autosize m-2 w-75" id="textareaExampleField" rows="auto" placeholder="Enter Text Here..." required></textarea>
            <select v-model="language" class="form-control custom-select m-2" >
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="ko">Korean</option>
                <option value="ja">Japanese</option>
                <option value="hi">Hindi</option>
                <option value="ar">Arabic</option>
                <option value="pa">Punjabi</option>
            </select>
            <button class="btn btn-primary m-2">Translate</button>
        </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'TranslateForm',
  data(){
        return{
            textToTranslate: "",
            language: "en"
        }
  },
  methods:{
      submitForm(e){
            this.$emit("formSubmit", this.textToTranslate, this.language);
          e.preventDefault();
      }
  }
}
</script>

<style>
    .main-form{
        display: flex;
        flex-direction: column;
    }
</style>
