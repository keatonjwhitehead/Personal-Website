<template>
<div>
     <component v-for="(field, index) in schema" :key="index" :is="field.fieldType" :value="formData[field.name]" @input="updateForm(field.name, $event)" v-bind="field">
     </component>
</div>
</template>

<script>
import selectList from "./selectList.vue";
import arrayInput from "./arrayInput.vue";
import dynamicInput from "./dynamicInput.vue";

export default {
     name: "formGenerator",
     components: {
          selectList,
          arrayInput,
          dynamicInput
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
