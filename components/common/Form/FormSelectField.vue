<template>
    <select id="id" name="name" autocomplete="autocomplete" class=" mb-3 py-2 px-3  focus:border-green-200 focus:outline-none block w-full rounded-md border-0   text-black-100 shadow-sm ">
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