<script setup>
import HeaderBreadcrumb from '@/components/HeaderBreadcrumb.vue';
import { computed } from 'vue';
import { useAccount } from '@/stores/user';
import { getToken } from '@/utils/token';
import router from '@/router';

const account = useAccount();

const role = computed(() => {
	const role = account.userInfo.roles;
	if (!role.length) return null;
	else return account.userInfo.roles[0];
});
const vips = [
	{
		id: 1,
		name: '普通会员',
		price: '88',
		limit: 3,
		disable: ['vip1', 'vip2', 'vip3'],
		colorClass: [],
		desc: [
			'3套少儿编程基础课程免费学习',
			'线下老师在线指导课程作业',
			'免费使用相关开发器件',
			'全天候在线咨询服务',
			'更多在线直播课程',
		],
	},
	{
		id: 2,
		name: '黄金会员',
		price: '188',
		limit: 5,
		disable: ['vip2', 'vip3'],
		colorClass: ['two'],
		desc: [
			'3套少儿编程基础课程免费学习',
			'线下老师在线指导课程作业',
			'免费使用相关开发器件',
			'全天候在线咨询服务',
			'更多在线直播课程',
			'每周一次家庭上门辅导',
			'周一到周五放学托管服务',
		],
	},
	{
		id: 3,
		name: '铂金会员',
		price: '288',
		limit: 10,
		disable: ['vip3'],
		colorClass: ['three'],
		desc: [
			'3套少儿编程基础课程免费学习',
			'线下老师在线指导课程作业',
			'免费使用相关开发器件',
			'全天候在线咨询服务',
			'更多在线直播课程',
			'每周三次家庭上门辅导',
			'周一到周五放学托管服务',
			'周末独立兴趣班培训',
		],
	},
];

if (!getToken()) {
	router.push('/login');
}
</script>

<template>
	<div>
		<header-breadcrumb :path="['充值会员']" />
		<!-- Pirce Section -->
		<div
			class="popular-cate-2-area pricing-page relative"
			style="padding-top: 80px">
			<div
				class="cate-2-shape wow fadeInRight"
				data-wow-delay="1200ms"
				style="visibility: visible; animation-delay: 1200ms; animation-name: fadeInRight">
				<img
					src="/img/bg-img/home-2/shape-6.png"
					alt="" />
			</div>
			<div class="container">
				<div class="row">
					<div
						class="col-md-6 col-lg-4"
						v-for="vip in vips"
						:key="vip">
						<div
							class="cate-price-card wow fadeInUp"
							:class="vip.colorClass"
							data-wow-delay="700ms"
							style="
								visibility: visible;
								animation-delay: 700ms;
								animation-name: fadeInUp;
							">
							<div class="cate-price-body">
								<h2>
									{{ vip.name }}
									<br />
									<span class="cate-price-title">{{ vip.price }} /</span>
									<span class="month-desc">月</span>
								</h2>
								<h6>提供{{ vip.limit }}套课程在线文档</h6>

								<ul>
									<li
										v-for="item in vip.desc"
										:key="item">
										{{ item }}
									</li>
								</ul>

								<div
									class="price-btn-area"
									v-if="!vip.disable.includes(role?.roleKey)">
									<a
										class="price-btn"
										:href="`/course/vip/order?id=${vip.id}`">
										立即购买
										<span class="icon-right-arrow-11"></span>
									</a>
								</div>
								<div
									class="price-btn-area"
									v-else>
									<a
										class="price-btn"
										style="background-color: #0b0b0b; cursor: not-allowed">
										您已成为此会员
										<span class="icon-briefcase"></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped></style>
