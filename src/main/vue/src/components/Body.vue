<template>
  <div>{{ msg }}</div>
  <div>{{ error }}</div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default ({
  setup() {
        const error = ref('');
        const msg = ref('');

        const getDataFromSpringServer = async () => {
            try{
                const res = await axios.get(`http://mydomain/api/hello`);
                msg.value = res.data;
                //msg.value = "hello dahye";
            }catch(err){
                error.value = err;
            }
        }; 

      getDataFromSpringServer();
      
      return {
        error,
        msg
      }; 
    }
    
})
  
</script>

<style>

</style>
