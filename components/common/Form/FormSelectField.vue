<template>
    <select id="id" name="name" autocomplete="autocomplete" class=" mb-3 py-2 px-3 h-10 sm:text-sm focus:border-green-200 focus:outline-none block w-72 rounded-md border-0   text-black-100 shadow-sm "
    
    :placeholder="placeholder">
                <option>Request demonstration</option>
                
              </select>
</template>
<script>
/* eslint-disable no-console */
export default {
    name: "FormInput",
    props: {
        id: String,
     
      name: String,
      autocomplete: String,
      type: String,
      
      isRequired: Boolean,
      
      placeholder: String,
      
     
        options: ["Request demonstration", "Request demonstration"],
      
    },
};
</script>