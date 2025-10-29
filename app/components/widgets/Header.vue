
<script lang="ts" setup> 
import Icon from '../shared/Icon.vue'; 
  
</script>
<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper row flex-between flex-middle">
        <NuxtLink to="/">
          <img
            src="/img/logo/logo-header.svg"
            :width="140"
            class="icon"
            alt="logo-header"
          />
          <Icon name="logo-header" folder="logo" :size="140" />
        </NuxtLink> 
        <!-- <UserProfileMenuPanel /> -->
      </div>
    </div>
  </header> 
</template>


<style lang="scss">
.header {
  background: #fff;
  border-bottom: 1px solid #e1d8f1;
   
}
</style>
