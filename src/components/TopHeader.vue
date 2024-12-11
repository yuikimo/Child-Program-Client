<script setup>
import { useAccount } from '@/stores/user';
import { clearToken, getToken } from '@/utils/token';
import request from '@/net';
import { ref } from 'vue';
import Swal from 'sweetalert2';
import router from '@/router';

const account = useAccount();
const isLogin = ref(!!getToken());

function logout() {
	request.post('/logout').then(({ data }) => {
		if (data.code === 200) {
			Swal.fire({
				title: '退出登录成功',
				text: '即将回到首页...',
				icon: 'success',
			}).then(() => {
				router.push('/');
			});
			account.userInfo = {
				avatar: '',
				userName: '',
				nickName: '',
				email: '',
				role: [],
			};
			account.shoopingCart.count = 0;
			clearToken();
			isLogin.value = !!getToken();
		}
	});
}
</script>

<template>
	<div class="top-header">
		<div class="container h-100">
			<div class="row h-100 align-items-center">
				<div class="col-md-6 col-lg-7">
					<div class="contact-info d-flex align-items-center">
						<a href="mailto:info@doorsoft">
							<span class="icon-mail"></span>
							<span class="text-white contact-desc">alma.lawson@example.com</span>
						</a>
						<a href="">
							<span class="icon-phone-alt-solid-11"></span>
							<span class="text-white contact-desc">123 - 456 - 7890</span>
						</a>
					</div>
				</div>

				<div class="col-md-6 col-lg-5">
					<div class="d-flex align-items-center top-social-conatct">
						<!-- Dropdown -->
						<div class="top-social-icon">
							<ul class="header-icon">
								<li><span class="text-white">关注我们 :</span></li>
								<li>
									<a href="#"><span class="icon-facebook-f"></span></a>
								</li>
								<li>
									<a href="#"><span class="icon-linkedin-in"></span></a>
								</li>
								<li>
									<a href="#"><span class="icon-twitter"></span></a>
								</li>
								<li>
									<a href="#"><span class="icon-instagram"></span></a>
								</li>
							</ul>
						</div>

						<div
							class="contact-info"
							v-if="isLogin"
							style="display: flex; align-items: center; margin-left: 20px">
							<div
								style="
									color: white;
									text-align: right;
									font-size: 13px;
									line-height: 15px;
								">
								<div>{{ account.userInfo.nickName }}</div>
								<div style="color: gray">
									{{ account.userInfo.email ?? '暂无电子邮件地址' }}
								</div>
							</div>
							<div class="user">
								<img
									:src="account.getAvatar"
									alt=""
									class="user-avatar" />
								<div class="dropdown-box">
									<div
										@click="router.push('/account')"
										style="
											display: flex;
											align-items: center;
											gap: 7px;
											cursor: pointer;
										">
										<i class="icon-flag-usa"></i>
										个人信息
									</div>
									<div
										style="
											display: flex;
											align-items: center;
											gap: 7px;
											cursor: pointer;
										"
										@click="router.push('/order-list')">
										<i class="icon-database"></i>
										我的订单
									</div>
									<div
										style="
											display: flex;
											align-items: center;
											gap: 7px;
											cursor: pointer;
										"
										@click="logout">
										<i class="icon-right-arrow-1"></i>
										退出登录
									</div>
								</div>
							</div>
						</div>

						<div
							class="contact-info"
							v-if="!isLogin">
							<a
								class="login-btn"
								href="/login"
								style="margin-left: 10px">
								<span class="icon-user-notes"></span>
								登录
							</a>
						</div>
						<div
							class="contact-info"
							v-if="!isLogin">
							<a
								class="login-btn"
								href="/register"
								style="margin-left: 10px">
								<span class="icon-user-plus-solid-1"></span>
								注册
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.user {
	position: relative;

	.user-avatar {
		height: 35px;
		width: 35px;
		margin-left: 10px;
		border-radius: 50%;
	}

	.dropdown-box {
		top: 40px;
		width: 210px;
		right: 0;
		transition: all 300ms ease-in-out;
		font-size: 15px;
		line-height: 29px;
		padding: 16px 24px;
		position: absolute;
		border-radius: 8px;
		opacity: 0;
		visibility: hidden;
		background-color: white;
		border: 1px solid #dee1e6;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

		div:hover {
			color: #f8941f;
		}
	}

	&:hover {
		.dropdown-box {
			top: 35px;
			opacity: 1;
			visibility: visible;
		}
	}
}
</style>
