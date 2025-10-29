<template>
  <ElSkeleton animated class="skeleton">
    <template #template>
      <div class="skeleton__image-wrapper">
        <ElSkeletonItem
          variant="rect"
          style="height: 100%; width: 100%; border-radius: 12px"
        />
      </div>
      <div class="skeleton__body">
        <ElSkeletonItem
          v-for="i in 2"
          :key="i"
          variant="text"
          style="height: 16px"
        />
        <div class="skeleton__row">
          <ElSkeletonItem variant="text" style="height: 16px; flex: 1 1 auto" />
          <ElSkeletonItem variant="text" style="height: 16px; width: 20%" />
        </div>
        <ElDivider border-style="dashed" style="margin: 0; border-width: 2px" />
        <div
          class="skeleton__footer"
          style="display: flex; justify-content: space-between; gap: 20px"
        >
          <div
            class="skeleton__user"
            style="display: flex; gap: 10px; width: 50%"
          >
            <ElSkeletonItem
              variant="circle"
              style="height: 30px; width: 30px"
            />
            <div
              class="skeleton__user-info"
              style="
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;
                gap: 6px;
              "
            >
              <ElSkeletonItem variant="text" style="height: 12px; width: 70%" />
              <ElSkeletonItem variant="text" style="height: 14px" />
            </div>
          </div>
          <ElSkeletonItem variant="button" style="width: 90px; height: 32px" />
        </div>
      </div>
    </template>
  </ElSkeleton>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.skeleton {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;

  &__image-wrapper {
    aspect-ratio: 1;
  }

  &__body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
}
</style>
