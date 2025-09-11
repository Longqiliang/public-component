<template>
    <zx-mindmap-v2 style="height:calc( 100vh - 100px );" v-model="mindmapData" :name="mindmapName" :props="props" :readonly="true" :popover="true" :fit="true">
    </zx-mindmap-v2>
</template>
<script setup >
import { ref, reactive } from 'vue';

const mindmapData = ref({
  name: '思维导图',
  child: [
    {
      name: '根节点',
      child: [
        {
          name: '子节点1',
        },
        {
          name: '子节点2',
        },
        {
          name: '子节点3',
        },
      ],
    },
  ],
});

const props = {
    label: 'name',
    children: "child"
}

const mindmapName = "思维导图"

</script>
<style lang='scss'>
 
</style>
