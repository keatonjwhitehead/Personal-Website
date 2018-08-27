<template>
<div>
     <label>{{ label }}</label>
     <input class="arrayInput" type="number" :name="name" :value="value" @input="$emit('input', $event.target.value)" :placeholder="placeholder"> {{inputNum}}
</div>
</template>
<script>
export default {
     name: 'arrayInput',
     props: ['placeholder', 'label', 'name', 'value', 'inputNum'],

}
</script>
<style scoped>
.arrayInput {
     width: 40px;
}
</style>
