<script setup>
import HeaderBreadcrumb from '@/components/HeaderBreadcrumb.vue';
import { reactive } from 'vue';
import request from '@/net/index.js';
import Swal from 'sweetalert2';

const advice = reactive({
	name: '',
	email: '',
	phone: '',
	message: '',
});

function createUserAdvice() {
	request.post('/system/advice/create', advice).then(({ data }) => {
		if (data.code !== 200) {
			Swal.fire({ title: '提交意见', text: `提交失败: ${data.msg}`, icon: 'error' });
		} else {
			Swal.fire({ title: '提交意见', text: '您的意见已经成功提交', icon: 'success' });
		}
	});
}
</script>

<template>
	<div>
		<header-breadcrumb :path="['关于我们', '联系我们']" />
		<div
			class="contact-us-area page-2"
			style="padding-bottom: 80px">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<div class="contact-img">
							<img
								src="/img/bg-img/inner/contact.png"
								alt="" />
						</div>
					</div>
					<div class="col-lg-6">
						<div class="conatct-content-area">
							<div
								class="section-title-area"
								style="margin-bottom: 0">
								<h6>联系我们</h6>
								<h3 class="mb-4 mt-3">欢迎填写您的意见并投递</h3>
								<form
									id="contact-form-mejor"
									novalidate="novalidate">
									<div class="form-floating mb-5">
										<input
											type="text"
											v-model="advice.name"
											class="form-control"
											id="name"
											placeholder="Name" />
										<label
											class="lable-text"
											for="name">
											名字
										</label>
									</div>
									<div class="form-floating mb-5">
										<input
											type="email"
											v-model="advice.email"
											class="form-control"
											id="email"
											placeholder="Email" />
										<label
											class="lable-text"
											for="email">
											电子邮件
										</label>
									</div>
									<div class="form-floating mb-5">
										<input
											type="number"
											v-model="advice.phone"
											class="form-control"
											id="phone"
											placeholder="Phone" />
										<label
											class="lable-text"
											for="phone">
											手机号
										</label>
									</div>
									<div class="form-floating mb-5">
										<textarea
											class="form-control"
											v-model="advice.message"
											placeholder="Message"
											id="message"></textarea>
										<label
											class="lable-text"
											for="message">
											消息
										</label>
									</div>
								</form>
								<button
									@click="createUserAdvice"
									class="auth-btn w-100">
									投递意见
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="contact-map">
			<div
				class="container"
				style="padding-bottom: 80px">
				<div class="row">
					<div class="col-12">
						<div class="conatct-info-meta">
							<!-- Single Card -->
							<div class="contact-single-info-card">
								<div class="contact-icon">
									<i class="icon-phone-alt-solid-11"></i>
								</div>
								<h4>Contact Phone Number</h4>
								<p>(603) 555-012 / (603) 555-012</p>
							</div>

							<!-- SIngle Card -->
							<div class="contact-single-info-card">
								<div class="contact-icon">
									<i class="icon-mail"></i>
								</div>
								<h4>Our Email Address</h4>
								<p>michelle.rivera@example.com</p>
							</div>

							<!-- SIngle Card -->
							<div class="contact-single-info-card">
								<div class="contact-icon">
									<i class="icon-Vec1tor"></i>
								</div>
								<h4>Our Location</h4>
								<p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<iframe
				src="https://map.baidu.com/search/%E5%B9%BF%E5%B7%9E%E8%BD%AF%E4%BB%B6%E5%AD%A6%E9%99%A2/@12634931.900245275,2670217.0137984,18.21z?querytype=s&da_src=shareurl&wd=%E5%B9%BF%E5%B7%9E%E8%BD%AF%E4%BB%B6%E5%AD%A6%E9%99%A2&c=257&src=0&pn=0&sug=0&l=18&b=(12634342.753843015,2669895.176595693;12635939.824398564,2670670.323810939)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1"></iframe>
		</div>
	</div>
</template>

<style lang="less" scoped>
.conatct-info-meta {
	position: static;

	.contact-single-info-card {
		position: static;
		border-radius: 10px;
	}
}
</style>
