<template>
<div>
     <component v-for="(field, index) in schema" :key="index" :is="field.fieldType" :value="formData[field.name]" @input="updateForm(field.name, $event)" v-bind="field">
     </component>
</div>
</template>

<script>
import numberInput from "./numberInput.vue";
import selectList from "./selectList.vue";
import textInput from "./textInput.vue";
export default {
     name: "formGenerator",
     components: {
          numberInput,
          selectList,
          textInput
     },
     props: ["schema", "value"],
     data() {
          return {
               formData: this.value || {}
          };
     },
     methods: {
          updateForm(fieldName, value) {
               this.$set(this.formData, fieldName, value);
               this.$emit("input", this.formData);
          }
     }
};
</script>
