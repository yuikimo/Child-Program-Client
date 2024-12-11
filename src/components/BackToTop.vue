<script setup>
import { useBackToTop } from '@/utils/common.js';
import { onMounted } from 'vue';

onMounted(useBackToTop);
</script>

<template>
	<div
		id="scrollToTop"
		class="scrolltop-show">
		<i class="icon-right-arrow-11"></i>
	</div>
</template>

<style lang="less" scoped></style>
