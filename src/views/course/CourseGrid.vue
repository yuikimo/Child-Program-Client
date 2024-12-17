<script setup>
import { ref } from 'vue';
import { createRandomInt } from '@/utils/data';
import CourseBreadcrumb from '@/components/course/CourseBreadcrumb.vue';
import request from '@/net';
import Swal from 'sweetalert2';
import { useAccount } from '@/stores/user';
import router from '@/router';
import { getToken } from '@/utils/token';

const data = ref([]);
const account = useAccount();

request.get(`/system/course/list`).then((res) => {
	data.value = res.data.rows;
});

function addCourseToCart(id) {
	if (!getToken()) {
		router.push('/login');
		return;
	}
	request.post(`/system/cart/add/${id}`).then(() => {
		account.shoopingCart.count++;
		Swal.fire({
			title: '添加成功',
			text: '课程已添加到购物车中',
			icon: 'success',
		});
	});
}
</script>

<template>
	<div>
		<!-- Breadcrumb Section -->
		<course-breadcrumb :course-count="data.length" />
		<!-- Featured Course Section -->
		<div class="featured-course-4-area single-page">
			<div class="container">
				<div class="row">
					<!-- Single Card -->
					<div
						class="col-md-6 col-lg-4"
						v-for="course in data"
						:key="course">
						<div class="course-card-4-area">
							<!-- Shape -->
							<div
								class="care-shape-4 wow fadeInDown"
								data-wow-delay="700ms"
								style="
									visibility: visible;
									animation-delay: 700ms;
									animation-name: fadeInDown;
								">
								<img
									src="/img/bg-img/home-2/care-shap.png"
									alt="" />
							</div>
							<div
								class="course-img-4 bg-img"
								style="background-image: url(/img/bg-img/home-4/shape-2.png)">
								<div class="course-title-img">
									<img
										:src="`/img/course/teacher/c-${course.id}.png`"
										alt="" />
								</div>
								<!-- Shape -->
								<div class="course-shape-4">
									<img
										src="/img/bg-img/home-4/shape-3.png"
										alt="" />
								</div>
								<div class="course-offer-4">
									<div class="offer-bg-shape relative">
										<img
											src="/img/bg-img/home-4/shape-4.png"
											alt="" />
									</div>
									<div class="offer-content-4">
										<p>-10%</p>
										<span>折扣</span>
									</div>
								</div>
							</div>
							<!-- Content -->
							<div class="course-content-info-4">
								<div
									class="course-content-rating d-flex justify-content-between align-items-center">
									<p>
										<i class="icon-star1"></i>
										4.5
										<span>(100 次购买)</span>
									</p>
									<div class="ribbon-icon">
										<i class="icon-icon_ribbon_alt"></i>
									</div>
								</div>
								<!-- info -->
								<div class="course-info-meta-4 d-flex align-items-center">
									<p>
										<i class="icon-Home"></i>
										{{ createRandomInt() }} 名学生正在学习
									</p>
									<p>
										<i class="icon-book-solid-1"></i>
										{{ course.lesson }} 节课程
									</p>
								</div>
								<h2>
									<a :href="`/course/detail/${course.id}`">{{ course.title }}</a>
								</h2>
								<p class="course-desc-4">
									{{ course.description }}
								</p>
								<div class="auth-info-4 d-flex align-items-center">
									<img
										class="auth-img"
										:src="`/img/course/avatar/c-${course.id}.png`"
										alt="" />
									<p>
										主讲教师
										<a href="#">{{ course.teacher }}</a>
									</p>
								</div>
								<!-- Price & Cart -->
								<div
									class="course-footer-4 d-flex align-items-center justify-content-between">
									<div class="course-price">
										<p>
											${{ (course.price * 0.9).toFixed(0) }}
											<span>${{ course.price }}</span>
										</p>
									</div>
									<div class="course-buy">
										<p>
											<a
												href="#"
												@click="addCourseToCart(course.id)">
												<i class="icon-icon_cart_alt"></i>
												&nbsp;
												<span>添加到购物车</span>
											</a>
										</p>
									</div>
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
