<script setup>
import { ref, watchEffect } from 'vue';
import request from '@/net/index.js';
const vips = [
	{
		id: 1,
		name: '普通会员',
		price: '35',
		limit: 1,
		disable: ['vip1', 'vip2', 'vip3'],
		colorClass: [],
		desc: [
			'少儿编程基础课程免费学习',
			'线下老师一对一指导',
			'免费使用少儿编程开发器件',
			'全天候在线咨询服务',
			'更多在线直播课程',
		],
	},
	{
		id: 2,
		name: '黄金会员',
		price: '100',
		limit: 1,
		disable: ['vip2', 'vip3'],
		colorClass: ['two'],
		desc: [
			'少儿编程全套课程免费学习',
			'线下老师一对一指导',
			'免费使用少儿编程开发器件',
			'全天候在线咨询服务',
			'更多在线直播课程',
			'每周一次家庭教育服务',
			'周一到周五放学托管服务',
		],
	},
];

const eventList = ref([]);
watchEffect(() => {
	request
		.get(`/system/event/list?pageNum=1&pageSize=4`)
		.then(({ data }) => {
			eventList.value = data.rows;
		});
});
</script>

<template>
	<div>
		<!-- Hero Section -->
		<div class="hero-area-2">
			<!-- Shape -->
			<div class="hero-2-curbe-shape">
				<img
					src="/img/bg-img/hero-2-shape.png"
					alt="" />
			</div>
			<div
				class="hero-2-shape-1 wow fadeInDown"
				data-wow-delay="900ms"
				style="visibility: visible; animation-delay: 900ms; animation-name: fadeInDown">
				<img
					src="/img/bg-img/home-2/shape-1.png"
					alt="" />
			</div>

			<div class="hero-2-shape-2">
				<img
					src="/img/bg-img/home-2/shape-2.png"
					alt="" />
			</div>

			<div class="hero-2-shape-3">
				<img
					src="/img/bg-img/home-2/shape-4.png"
					alt="" />
			</div>

			<div class="container h-100">
				<div class="row h-100 align-items-center justify-content-between">
					<div class="col-lg-5">
						<!-- Content text -->
						<div class="hero-content-text">
							<h6
								class="wow fadeInUp"
								data-wow-delay="500ms"
								style="
									visibility: visible;
									animation-delay: 500ms;
									animation-name: fadeInUp;
								">
								<i class="icon-icon_document_alt"></i>
								欢迎加入我们
							</h6>
							<h2
								class="wow fadeInUp"
								data-wow-delay="900ms"
								style="
									visibility: visible;
									animation-delay: 900ms;
									animation-name: fadeInUp;
								">
								最好的少儿编程课程
							</h2>

							<div
								class="hero-btn-area mt-5 wow fadeInUp"
								data-wow-delay="1300ms"
								style="
									visibility: visible;
									animation-delay: 1300ms;
									animation-name: fadeInUp;
								">
								<a
									class="btn-1"
									href="/about">
									了解更多
									<span class="icon-right-arrow-11"></span>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-7">
						<div class="welcome-img-2 text-center relative">
							<img
								class="wel-img-2 wow fadeInUp"
								data-wow-delay="500ms"
								src="/img/bg-img/hero-2.png"
								alt=""
								style="
									visibility: visible;
									animation-delay: 500ms;
									animation-name: fadeInUp;
								" />

							<div class="shape-box">
								<img
									src="/img/bg-img/home-2/shape-5.png"
									alt="" />
							</div>

							<div
								class="bag-shape wow fadeInLeft"
								data-wow-delay="1000ms"
								style="
									visibility: visible;
									animation-delay: 1000ms;
									animation-name: fadeInLeft;
								">
								<img
									src="/img/bg-img/home-2/shape-3.png"
									alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 编程课程 Section -->
		<div class="care-program-area">
			<div class="container">
				<div class="row justify-content-center">
					<!-- title -->
					<div class="col-lg-6">
						<div
							class="section-title-area text-center wow fadeInDown"
							data-wow-delay="500ms"
							style="
								visibility: visible;
								animation-delay: 500ms;
								animation-name: fadeInDown;
							">
							<h6>能学到什么？</h6>
							<h2 class="mb-0">少儿编程课程安排</h2>
						</div>
					</div>
				</div>

				<div class="row">
					<!-- Single Card -->
					<div class="col-md-6 col-lg-4">
						<div
							class="single-care-card relative text-center wow fadeInLeft"
							data-wow-delay="700ms"
							style="
								visibility: visible;
								animation-delay: 700ms;
								animation-name: fadeInLeft;
							">
							<div
								class="care-shape wow fadeInDown"
								data-wow-delay="1400ms"
								style="
									visibility: visible;
									animation-delay: 1400ms;
									animation-name: fadeInDown;
								">
								<img
									src="/img/bg-img/home-2/care-shap.png"
									alt="" />
							</div>
							<div class="care-card-img-content">
								<div class="care-img">
									<img
										src="/img/bg-img/care-1.jpeg.jpg"
										alt="" />
								</div>

								<div class="care-content-text">
									<h4>图形化创意编程</h4>
									<p>
										学生将通过学习，掌握图形化编程的所有语法，以及编程中 90%
										的核心语句和算法，具备基本的计算思维（Computational
										Thinking）和编程能力，为代码编程打下坚实的基础。
									</p>
									<div class="care-count-info">
										<p class="mb-0">
											<span>课时:</span>
											约2小时45分钟
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Single Card -->
					<div class="col-md-6 col-lg-4">
						<div
							class="single-care-card relative text-center wow fadeInLeft"
							data-wow-delay="900ms"
							style="
								visibility: visible;
								animation-delay: 900ms;
								animation-name: fadeInLeft;
							">
							<div
								class="care-shape wow fadeInDown"
								data-wow-delay="1400ms"
								style="
									visibility: visible;
									animation-delay: 1400ms;
									animation-name: fadeInDown;
								">
								<img
									src="/img/bg-img/home-2/care-shap.png"
									alt="" />
							</div>
							<div class="care-card-img-content">
								<div class="care-img">
									<img
										src="/img/bg-img/care-2.jpeg.jpg"
										alt="" />
								</div>

								<div class="care-content-text">
									<h4>Python 人工智能编程</h4>
									<p>
										学生将学习
										Python编程语言、数据结构和设计模式等知识，掌握其中的常用语法，从调用程序
										API
										开始，到算法和数据结构的学习，每一节课程都会结合生活中的实际应用场景，搭建真实环境下的各类典型应用。
									</p>

									<div class="care-count-info">
										<p class="mb-0">
											<span>课时:</span>
											约2小时45分钟
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Single Card -->
					<div class="col-md-6 col-lg-4">
						<div
							class="single-care-card relative text-center wow fadeInLeft"
							data-wow-delay="1100ms"
							style="
								visibility: visible;
								animation-delay: 1100ms;
								animation-name: fadeInLeft;
							">
							<div
								class="care-shape wow fadeInDown"
								data-wow-delay="1400ms"
								style="
									visibility: visible;
									animation-delay: 1400ms;
									animation-name: fadeInDown;
								">
								<img
									src="/img/bg-img/home-2/care-shap.png"
									alt="" />
							</div>
							<div class="care-card-img-content">
								<div class="care-img">
									<img
										src="/img/bg-img/care-3.jpeg.jpg"
										alt="" />
								</div>

								<div class="care-content-text">
									<h4>硬件专题课</h4>
									<p>
										从基础的电学知识，到传感器、芯片原理一应俱全。每一个主题都需要孩子从项目拆机规划开始、搭建结构、设计电路、编写程序、调试等等解决现实工程问题。动手动脑，提升硬件编程能力，培养科技小创客。
									</p>
									<div class="care-count-info">
										<p class="mb-0">
											<span>课时:</span>
											约2小时45分钟
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 会员介绍 Section -->
		<div
			class="popular-cate-2-area bg-img bg-overlay relative"
			style="background-image: url(/img/bg-img/popular.png)">
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
					<div class="col-lg-4">
						<div class="section-title-area cate-heading">
							<h6
								class="wow fadeInDown"
								data-wow-delay="500ms"
								style="
									visibility: visible;
									animation-delay: 500ms;
									animation-name: fadeInDown;
								">
								欢迎加入我们
							</h6>
							<h2
								class="wow fadeInDown"
								data-wow-delay="700ms"
								style="
									visibility: visible;
									animation-delay: 700ms;
									animation-name: fadeInDown;
								">
								加入少儿编程俱乐部，让自己的孩子赢在起跑线
							</h2>
							<p
								class="mb-5 wow fadeInDown"
								data-wow-delay="900ms"
								style="
									visibility: visible;
									animation-delay: 900ms;
									animation-name: fadeInDown;
								">
								现在加入会员，还送价值288的入会大礼包，双十一特惠活动
							</p>

							<a
								class="btn-1 wow fadeInDown"
								data-wow-delay="1100ms"
								href="/course/vip"
								style="
									visibility: visible;
									animation-delay: 1100ms;
									animation-name: fadeInDown;
								">
								了解更多
								<span class="icon-right-arrow-11"></span>
							</a>
						</div>
					</div>

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
									<span class="cate-price-title">￥{{ vip.price }} /</span>
									<span class="month-desc">月</span>
								</h2>
								<h6>{{ vip.limit }} 个小朋友可用</h6>
								<ul>
									<li
										v-for="item in vip.desc"
										:key="item">
										{{ item }}
									</li>
								</ul>

								<div class="price-btn-area">
									<a
										class="price-btn"
										href="/course/vip">
										立即购买
										<span class="icon-right-arrow-11"></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Counter up Section -->
		<div class="counter-area-home-2">
			<div
				class="counter-shape wow fadeInLeft"
				data-wow-delay="900ms"
				style="visibility: visible; animation-delay: 900ms; animation-name: fadeInLeft">
				<img
					src="/img/bg-img/counter-shape.png"
					alt="" />
			</div>
			<div class="container">
				<div class="row justify-content-center">
					<!-- Single card -->
					<div class="col-sm-6 col-lg-4">
						<div
							class="single-counter-2-card d-flex align-items-center wow fadeInDown"
							data-wow-delay="500ms"
							style="
								visibility: visible;
								animation-delay: 500ms;
								animation-name: fadeInDown;
							">
							<!-- icon -->
							<div class="counter-2-icon">
								<span class="icon-ruler-combined-solid-1"></span>
							</div>
							<!-- text -->
							<div class="counter-2-text">
								<h2>
									<span class="counter">23</span>
									<span>k</span>
								</h2>
								<p>Online Courses</p>
							</div>
						</div>
					</div>

					<!-- Single card -->
					<div class="col-sm-6 col-lg-4">
						<div
							class="single-counter-2-card d-flex align-items-center wow fadeInDown"
							data-wow-delay="700ms"
							style="
								visibility: visible;
								animation-delay: 700ms;
								animation-name: fadeInDown;
							">
							<!-- icon -->
							<div class="counter-2-icon">
								<span class="icon-book-solid-11"></span>
							</div>
							<!-- text -->
							<div class="counter-2-text">
								<h2>
									<span class="counter">5</span>
									<span>k+</span>
								</h2>
								<p>Online Courses</p>
							</div>
						</div>
					</div>

					<!-- Single card -->
					<div class="col-sm-6 col-lg-4">
						<div
							class="single-counter-2-card d-flex align-items-center wow fadeInDown"
							data-wow-delay="900ms"
							style="
								visibility: visible;
								animation-delay: 900ms;
								animation-name: fadeInDown;
							">
							<!-- icon -->
							<div class="counter-2-icon">
								<span class="icon-ruler-combined-solid-1"></span>
							</div>
							<!-- text -->
							<div class="counter-2-text">
								<h2>
									<span class="counter">58</span>
									<span>k+</span>
								</h2>
								<p>Online Student</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Event Section -->
		<div class="upcoming-event-area relative" style="margin-top: 30px">
			<!-- all shape img -->
			<div class="up-shape-1">
				<img
					src="/img/bg-img/home-2/shpe-11.png"
					alt="" />
			</div>
			<div
				class="up-shape-2 wow fadeInUp"
				data-wow-delay="700ms"
				style="visibility: visible; animation-delay: 700ms; animation-name: fadeInUp">
				<img
					src="/img/bg-img/home-2/shpe-12.png"
					alt="" />
			</div>

			<div
				class="up-shape-3 wow fadeInUp"
				data-wow-delay="1500ms"
				style="visibility: visible; animation-delay: 1500ms; animation-name: fadeInUp">
				<img
					src="/img/bg-img/home-2/shpe-13.png"
					alt="" />
			</div>

			<div class="container">
				<div class="row justify-content-center">
					<!-- title -->
					<div class="col-lg-6">
						<div
							class="section-title-area text-center wow fadeInDown"
							data-wow-delay="500ms"
							style="
								visibility: visible;
								animation-delay: 500ms;
								animation-name: fadeInDown;
							">
							<h6>活动列表</h6>
							<h2 class="mb-0">最新活动</h2>
						</div>
					</div>
				</div>

				<div class="row align-items-end">
					<div class="col-md-5">
						<!-- Image -->
						<div
							class="event-image wow fadeInUp"
							data-wow-delay="700ms"
							style="
								visibility: visible;
								animation-delay: 700ms;
								animation-name: fadeInUp;
							">
							<img
								src="/img/bg-img/event.png"
								alt="" />
						</div>
					</div>

					<div class="col-md-1"></div>

					<div class="col-md-6">
						<div class="event-content-text">
							<!-- Single Card -->
							<div v-for="event in eventList" :key="event.id"
								class="single-event-card d-flex align-items-center wow fadeInRight"
								data-wow-delay="900ms"
								style="
									visibility: visible;
									animation-delay: 900ms;
									animation-name: fadeInRight;
								">
								<div class="event-price">
									<h5>{{ event.location }}</h5>
								</div>
								<div class="event-card-content">
									<p>{{ event.startTime }} - {{ event.endTime }}</p>
									<h4>{{ event.title }}</h4>
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
