<script setup>
import { useHeaderSticky } from '@/utils/common.js';
import { computed, onMounted } from 'vue';
import { useAccount } from '@/stores/user';

onMounted(useHeaderSticky);
const account = useAccount();

const role = computed(() => {
	const role = account.userInfo.roles;
	if (!role.length) return null;
	else return account.userInfo.roles[0];
});

const routes = [
	{ name: '首页', route: '/' },
	{
		name: '课程列表',
		children: [
			{ name: '购买课程', route: '/course/list' },
			{ name: '充值会员', route: '/course/vip' },
		],
	},
	{
		name: '关于我们',
		children: [
			{ name: '公司介绍', route: '/about' },
			{ name: '画廊', route: '/about/gallery' },
			{ name: '师资团队', route: '/about/teachers' },
			{ name: '联系我们', route: '/about/contact' },
		],
	},
	{ name: '最新活动', route: '/event' },
	{ name: '编程播客', route: '/blog' },
];
</script>

<template>
	<header
		class="header-area home-2 bg--navy"
		id="header">
		<nav class="navbar navbar-expand-lg">
			<div class="container menu-area-">
				<!-- Navbar Brand -->
				<div class="mobile-menu">
					<a
						class="navbar-brand"
						href="index.html">
						<img
							src="/img/core-img/logo-2.png"
							alt="Brand" />
					</a>
				</div>

				<!-- Navbar Toggler -->
				<button
					class="navbar-toggler"
					id="navbarToggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent"
					aria-controls="navbarContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="icon-menu"></span>
				</button>

				<!-- Navbar -->
				<div
					class="collapse navbar-collapse"
					id="navbarContent">
					<ul
						class="navbar-nav navbar-nav-scroll mb-3 mb-lg-0"
						id="SupportHiveNav">
						<li
							class="dropdown-list"
							:class="{ 'with-sub': item.children }"
							v-for="item in routes"
							:key="item">
							<a :href="item.children ? '#' : item.route">{{ item.name }}</a>
							<div
								class="dropdown-toggler"
								v-if="item.children">
								<i class="icon-down-arrow-1"></i>
							</div>
							<ul v-if="item.children">
								<li
									v-for="sub in item.children"
									:key="sub">
									<a :href="sub.route">{{ sub.name }}</a>
								</li>
							</ul>
						</li>
					</ul>

					<div class="cart-search-area ml-auto d-flex align-items-center">
						<div class="search-home-2">
							<div class="header-action">
								<div class="search-toggle-open header-search">
									<div class="search-icon">
										<span class="icon-icon_search2"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="cart-btn-area relative">
							<a
								href="/cart"
								class="relative">
								<span class="icon-icon_cart_alt"></span>
							</a>
							<div class="cart-badge bg--dark">{{ account.shoopingCart.count }}</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<div
			class="vip-banner"
			:class="role.roleKey"
			v-if="role && role.roleKey.startsWith('vip')">
			🏆 欢迎您{{ account.userInfo.nickName }}， 尊贵的{{ role.roleName }}用户， 今天是{{
				new Date().toLocaleDateString()
			}}
		</div>
	</header>
</template>

<style lang="less" scoped>
.vip-banner {
	color: white;
	font-weight: bold;
	padding: 5px 10px;

	&.vip1 {
		background-color: #0095f1;
	}

	&.vip2 {
		background-color: #f1cb00;
	}

	&.vip3 {
		background: linear-gradient(to right, #f1ad00, #7d00f1);
	}
}
</style>
