<script setup>
import IndexHeader from './components/IndexHeader.vue';
import TopHeader from './components/TopHeader.vue';
import IndexFooter from './components/IndexFooter.vue';
import BackToTop from './components/BackToTop.vue';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAccount } from './stores/user';
import { getToken } from './utils/token';
import request from './net';

const account = useAccount();

const route = useRoute();
const isAuthPage = computed(() => route.name === 'login' || route.name === 'register');

onMounted(() => {
	if (getToken()) {
		request.get('/getInfo').then(({ data }) => Object.assign(account.userInfo, data.user));
		request
			.get('/system/cart/count')
			.then(({ data }) => (account.shoopingCart.count = data.data));
	}
});
</script>

<template>
	<div>
		<top-header v-if="!isAuthPage" />
		<index-header v-if="!isAuthPage" />
		<div class="smooth-body">
			<div class="smooth-content">
				<router-view />
				<index-footer v-if="!isAuthPage" />
			</div>
		</div>
		<back-to-top v-if="!isAuthPage" />
	</div>
</template>

<style scoped></style>
