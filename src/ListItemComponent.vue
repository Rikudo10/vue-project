<script>
export default {
    props: {
        itemData: { type:Object, required: true}
    },
}
</script>

<template>
    <li><input type="checkbox" :checked="itemData.done">{{ itemData.id }} - {{ itemData.name }}</li>

</template>