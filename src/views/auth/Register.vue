<script setup>
import { onMounted, reactive } from 'vue';
import request from '@/net';
import router from '@/router';
import Swal from "sweetalert2";

const visible = reactive({
	password: false,
	confirm: false,
});

const form = reactive({
	username: '',
	password: '',
	confirm: '',
	verifycode: '',
});
const verify = reactive({
	img: '',
	uuid: '',
});

function getVerifyCode() {
	request.get('/captchaImage').then(({ data }) => {
		verify.img = data.img;
		verify.uuid = data.uuid;
	});
}

function register() {
	if (form.password === '' || form.username === '') {
		Swal.fire({
			title: "注册失败",
			text: "请填写用户名或密码",
			icon: "warning"
		})
		return
	}
	if (form.password !== form.confirm) {
		Swal.fire({
			title: "注册失败",
			text: "两次输入的密码不一致",
			icon: "warning"
		})
		return
	}
	request.post('/register', {
		username: form.username,
		password: form.password,
		confirmPassword: form.confirm,
		code: form.verifycode,
		uuid: verify.uuid
	}).then(({ data }) => {
		if (data.code === 200) {
			Swal.fire({
				title: "注册成功",
				text: "即将为您跳转到登录页面进行登录",
				icon: "success"
			}).then(() => {
				router.push("/login")
			})
		} else {
			getVerifyCode()
			Swal.fire({
				title: "注册失败",
				text: data.msg,
				icon: "error"
			})
		}
	})
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
							<h2>注册</h2>
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control"
									id="floatingInput6"
									placeholder="Username *"
									v-model="form.username" />
								<label
									class="lable-text"
									for="floatingInput6">
									用户名 *
								</label>
							</div>
							<div class="form-floating mb-3">
								<input
									:type="visible.password ? 'text' : 'password'"
									class="form-control relative"
									id="floatingPassword4"
									placeholder="Password *"
									v-model="form.password" />
								<label
									class="lable-text"
									for="floatingPassword4">
									密码 *
								</label>

								<div
									class="password-key"
									@click="visible.password = !visible.password">
									<i class="icon-eye"></i>
								</div>
							</div>
							<div class="form-floating relative mb-4">
								<input
									:type="visible.confirm ? 'text' : 'password'"
									class="form-control relative"
									id="floatingPassword5"
									placeholder="Password *"
									v-model="form.confirm" />
								<label
									class="lable-text"
									for="floatingPassword5">
									确认密码 *
								</label>

								<div
									class="password-key"
									@click="visible.confirm = !visible.confirm">
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

							<div class="mb-20 rem-forgot-btn">
								<div class="forgot-pass">
									<a href="/login">已有账号?</a>
								</div>
							</div>

							<button
								type="submit"
								class="auth-btn w-100 mt-5"
								@click="register">
								立即注册
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped></style>
