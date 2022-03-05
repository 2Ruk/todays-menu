<template>
  <b-row>
    <b-col cols="6" class="text-white">
      <b-button class="w-100 rounded-1" variant="outline-warning" @click="menuShowSet(false)">랜덤으로 선택</b-button>
    </b-col>
    <b-col cols="6" class="text-white">
      <b-button class="w-100 rounded-1" variant="outline-warning" @click="menuShowSet(true)">카테고리에서 선택</b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MenuButton extends Vue {

  menuShowSet(menuShow: boolean) {
    this.$emit('menuShowSet',menuShow)
  }

}
</script>
