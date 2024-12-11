<script setup>
import request from '@/net';
import router from '@/router';
import { onMounted, reactive } from 'vue';
import Swal from 'sweetalert2';
import { setToken } from '@/utils/token';
import { useAccount } from '@/stores/user';

const account = useAccount();

const visible = reactive({
	password: false,
});

const verify = reactive({
	img: '',
	uuid: '',
});
const form = reactive({
	username: '',
	password: '',
	verifycode: '',
});

function login() {
	request
		.post('/login', {
			username: form.username,
			password: form.password,
			code: form.verifycode,
			uuid: verify.uuid,
		})
		.then(({ data }) => {
			if (data.code !== 200) {
				getVerifyCode();
				Swal.fire({
					title: '登录失败',
					text: '用户名或密码错误',
					icon: 'error',
				}).then(() => {
					router.push('/');
				});
			} else {
				Swal.fire({
					title: '登录成功',
					text: '欢迎进入少儿编程培训机构',
					icon: 'success',
				}).then(() => {
					setToken(data.token);
					request
						.get('/getInfo')
						.then(({ data }) => Object.assign(account.userInfo, data.user));
					request
						.get('/system/cart/count')
						.then(({ data }) => (account.shoopingCart.count = data.data));
					router.push('/');
				});
			}
		});
}

function getVerifyCode() {
	request.get('/captchaImage').then(({ data }) => {
		verify.img = data.img;
		verify.uuid = data.uuid;
	});
}

onMounted(getVerifyCode);
</script>

<template>
	<div>
		<div
			class="log-regi-area"
			style="height: 100vh; padding: 0">
			<div
				class="container"
				style="height: 100%; display: flex; align-items: center; justify-content: center">
				<div class="row">
					<div style="width: 500px">
						<div
							class="log-area"
							style="border-radius: 7px">
							<h2>登录</h2>
							<div class="form-floating mb-3">
								<input
									type="email"
									class="form-control"
									id="floatingInput1"
									placeholder="Username Or Email address *"
									v-model="form.username" />
								<label
									class="lable-text"
									for="floatingInput1">
									用户名 *
								</label>
							</div>
							<div class="form-floating relative mb-4">
								<input
									:type="visible.password ? 'text' : 'password'"
									class="form-control relative"
									id="floatingPassword2"
									placeholder="Password *"
									v-model="form.password" />
								<label
									class="lable-text"
									for="floatingPassword2">
									密码 *
								</label>

								<div
									class="password-key"
									@click="visible.password = !visible.password">
									<i class="icon-eye"></i>
								</div>
							</div>

							<div class="row">
								<div class="form-floating col-8 mb-4">
									<input
										type="password"
										class="form-control relative"
										id="floatingVerifyCode"
										placeholder="Password *"
										v-model="form.verifycode" />
									<label
										class="lable-text"
										for="floatingVerifyCode">
										验证码 *
									</label>
								</div>
								<div class="col-4">
									<img
										:src="`data:image/gif;base64,${verify.img}`"
										alt=""
										class="login-code-img"
										@click="getVerifyCode" />
								</div>
							</div>

							<div class="rem-forgot-btn">
								<div class="form-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="rememberMe1"
										checked="" />
									<label
										class="form-check-label"
										for="rememberMe1">
										记住我
									</label>
								</div>
								<div class="forgot-pass">
									<a href="/register">还没有账号?</a>
								</div>
							</div>

							<button
								type="submit"
								class="auth-btn w-100 mt-5"
								@click="login">
								立即登录
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped></style>
