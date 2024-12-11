<script setup>
import HeaderBreadcrumb from '@/components/HeaderBreadcrumb.vue';
import { onMounted, reactive, ref, useTemplateRef, watchEffect } from 'vue';
import { useAccount } from '@/stores/user.js';
import request from '@/net/index.js';
import Swal from 'sweetalert2';
import router from '@/router/index.js';
import { clearToken } from '@/utils/token.js';

const uploadRef = useTemplateRef('uploadRef');

const account = useAccount();

const userInfo = reactive({
	nickName: '',
	phonenumber: '',
	email: '',
	sex: '',
});

const password = reactive({
	old: '',
	new: '',
	repeat: '',
});

function onFileChange(event) {
	const file = event.target.files[0];
	const form = new FormData();
	form.append('avatarfile', file);
	request
		.post('/system/user/profile/avatar', form, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		.then(({ data }) => {
			if (data.code === 200) {
				Swal.fire({
					title: '更新头像',
					text: '头像更新成功!',
					icon: 'success',
				});
				account.userInfo.avatar = data.imgUrl;
			}
		});
}

function savePassword() {
	if (password.new.length < 6) {
		Swal.fire({
			title: '更新密码',
			text: '密码长度必须大于等于6位',
			icon: 'warning',
		});
		return;
	}
	if (password.new != password.repeat) {
		Swal.fire({
			title: '更新密码',
			text: '两次输入的密码不一致请重新检查',
			icon: 'warning',
		});
		return;
	}
	request
		.put(
			`/system/user/profile/updatePwd?oldPassword=${password.old}&newPassword=${password.new}`,
		)
		.then(({ data }) => {
			if (data.code === 200) {
				Swal.fire({
					title: '更新密码',
					text: '密码更新成功',
					icon: 'success',
				});
				clearToken();
				account.userInfo = {};
				router.push('/login');
			} else {
				Swal.fire({
					title: '更新密码',
					text: `密码更新失败: ${data.msg}`,
					icon: 'error',
				});
			}
		});
}

function saveProfile() {
	if (
		userInfo.phonenumber &&
		(userInfo.phonenumber.length !== 11 || !userInfo.phonenumber.startsWith('1'))
	) {
		Swal.fire({
			title: '更新个人设置',
			text: '您的手机号填写不正确，请重新输入',
			icon: 'warning',
		});
		return;
	}
	if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userInfo.email)) {
		Swal.fire({
			title: '更新个人设置',
			text: '您的电子邮件格式填写不正确，请重新输入',
			icon: 'warning',
		});
		return;
	}
	request.put('/system/user/profile', userInfo).then(({ data }) => {
		if (data.code === 200) {
			Swal.fire({
				title: '更新个人设置',
				text: '您的个人信息已经更新成功！',
				icon: 'success',
			});
			Object.assign(account.userInfo, userInfo);
		}
	});
}

watchEffect(() => {
	userInfo.nickName = account.userInfo.nickName;
	userInfo.phonenumber = account.userInfo.phonenumber;
	userInfo.email = account.userInfo.email;
	userInfo.sex = account.userInfo.sex;
});
</script>

<template>
	<div>
		<header-breadcrumb :path="['个人设置']" />
		<div class="log-regi-area">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<div
							class="user-avatar-box"
							@click="uploadRef.click()">
							<img
								:src="account.getAvatar"
								class="user-avatar" />
							<div class="user-avatar-mask">+</div>
							<input
								type="file"
								ref="uploadRef"
								@change="onFileChange"
								hidden />
						</div>
						<h4 style="margin-bottom: 25px">个人信息设置</h4>
						<div class="form-floating mb-4">
							<input
								type="email"
								class="form-control"
								id="floatingInput1"
								v-model="userInfo.nickName"
								placeholder="Username Or Email address *" />
							<label
								class="lable-text"
								for="floatingInput1">
								用户昵称 *
							</label>
						</div>
						<div class="form-floating relative mb-4">
							<input
								type="text"
								class="form-control relative"
								v-model="userInfo.phonenumber"
								id="floatingPassword2"
								placeholder="Password *" />
							<label
								class="lable-text"
								for="floatingPassword2">
								手机号码 *
							</label>
						</div>
						<div class="form-floating relative mb-4">
							<input
								type="text"
								class="form-control relative"
								v-model="userInfo.email"
								id="floatingPassword3"
								placeholder="Password *" />
							<label
								class="lable-text"
								for="floatingPassword3">
								电子邮件 *
							</label>
						</div>
						<div style="display: flex; gap: 30px">
							<label>
								<input
									type="radio"
									value="0"
									v-model="userInfo.sex" />
								男
							</label>
							<label>
								<input
									type="radio"
									value="1"
									v-model="userInfo.sex" />
								女
							</label>
						</div>
						<button
							type="submit"
							@click="saveProfile"
							class="auth-btn w-100 mt-5">
							保存信息
						</button>
					</div>
					<div class="col-lg-6">
						<h4 style="margin-bottom: 25px">重置密码</h4>
						<div class="form-floating mb-4">
							<input
								type="password"
								class="form-control"
								v-model="password.old"
								id="floatingInput6"
								placeholder="Username *" />
							<label
								class="lable-text"
								for="floatingInput6">
								旧密码 *
							</label>
						</div>
						<div class="form-floating mb-4">
							<input
								type="password"
								class="form-control"
								v-model="password.new"
								id="floatingInput7"
								placeholder="Username *" />
							<label
								class="lable-text"
								for="floatingInput7">
								新密码 *
							</label>
						</div>
						<div class="form-floating mb-4">
							<input
								type="password"
								class="form-control"
								v-model="password.repeat"
								id="floatingInput8"
								placeholder="Username *" />
							<label
								class="lable-text"
								for="floatingInput8">
								重复新密码 *
							</label>
						</div>
						<button
							type="submit"
							class="auth-btn w-100 mt-5"
							@click="savePassword">
							更新密码
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.col-lg-6 {
	padding: 0 40px;
}

.user-avatar-box {
	width: fit-content;
	position: relative;
	margin-bottom: 20px;
	cursor: pointer;

	.user-avatar {
		height: 100px;
		width: 100px;
		border-radius: 10px;
	}

	.user-avatar-mask {
		color: white;
		height: 100px;
		width: 100px;
		font-size: 30px;
		line-height: 100px;
		text-align: center;
		border-radius: 10px;
		top: 0;
		display: none;
		position: absolute;
		background-color: rgba(11, 11, 11, 0.5);
	}

	&:hover {
		.user-avatar-mask {
			display: block;
		}
	}
}
</style>
