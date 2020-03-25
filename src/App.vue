<template>
  <div id="app">
    <TranslateForm v-on:formSubmit="textTranslate" />
	<TranslateOutput v-text="translatedText"/>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'

export default {
  name: 'App',
  data(){
    return{
      translatedText: ''
    }
  },
  components: {
	TranslateForm,
	TranslateOutput
  },
  methods:{
        textTranslate(text, language){
            this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200323T140724Z.d65d1b4eb07c3cde.4b773d9d268d2f254a325eb2feee2a589d8d5549&lang='+language+'&text='+text).then((res) => {
				this.translatedText = res.data['text'][0]  
			})
        }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
