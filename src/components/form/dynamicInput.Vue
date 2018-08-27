<template>
<div>
     <label>{{ label }}</label>
     <input v-on: type="type" :name="name" :value="value" @input="$emit('input', $event.target.value)" :placeholder="placeholder" class="label">
</div>
</template>
<script>
export default {
     name: 'label',
     props: ['type', 'placeholder', 'label', 'name', 'value']
}
</script>
