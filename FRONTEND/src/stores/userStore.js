import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {

    const user = ref(null);
 
    async function getUser () {
      await axios.get("/sanctum/csrf-cookie");
      const response = await axios.get("/api/user");
      user.value = response.data;
    }
    
    return { user, getUser }
});
