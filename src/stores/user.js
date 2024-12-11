import { defineStore } from 'pinia'
import request from "@/net/index.js";

export const useAccount = defineStore('userInfo', {
	state: () => {
		return {
			userInfo: {
				avatar: '',
				userName: '',
				nickName: '',
				email: '',
				sex: '',
				phoneNumber: '',
				roles: []
			},
			shoopingCart: {
				count: 0
			}
		}
	},
	getters: {
		getAvatar(state) {
			if (state.userInfo.avatar) {
				return `${request.defaults.baseURL}${state.userInfo.avatar}`
			} else {
				return '/img/avatar/profile.jpg'
			}
		},
	},
})