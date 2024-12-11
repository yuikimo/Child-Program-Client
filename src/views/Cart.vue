<script setup>
import request from '@/net';
import { computed, onMounted, ref } from 'vue';
import Swal from 'sweetalert2';
import router from '@/router';
import HeaderBreadcrumb from '@/components/HeaderBreadcrumb.vue';

const cartList = ref([]);

const total = computed(() =>
	cartList.value.map((item) => item.count * item.price).reduce((a, b) => a + b, 0),
);

onMounted(() => {
	request.get('/system/cart/my-list').then(({ data }) => {
		cartList.value = data.data;
	});
});

function deleteItem(id) {
	request.delete(`/system/cart/delete/${id}`).then(({ data }) => {
		if (data.code === 200) {
			Swal.fire({
				title: '删除成功',
				text: '该商品已从购物车中移出',
				icon: 'success',
			});
			const index = cartList.value.findIndex((item) => item.id == id);
			cartList.value.splice(index, 1);
		}
	});
}

function increaseCount(id) {
	request.put(`/system/cart/increase/${id}`).then(({ data }) => {
		const item = cartList.value.find((item) => item.id === id);
		item.count++;
	});
}

function decreaseCount(id) {
	request.put(`/system/cart/decrease/${id}`).then(({ data }) => {
		const item = cartList.value.find((item) => item.id === id);
		if (--item.count <= 0) {
			const index = cartList.value.findIndex((item) => item.id === id);
			cartList.value.splice(index, 1);
		}
	});
}
</script>

<template>
	<div>
		<!-- Breadcrumb Section -->
		<header-breadcrumb :path="['购物车']" />
		<!-- Shooping Cart Section -->
		<div class="product-cart-area">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="cart-table">
							<div class="table-responsive">
								<table class="table">
									<thead class="table-navy">
										<tr>
											<th></th>
											<th></th>
											<th>课程名称</th>
											<th>单价</th>
											<th>数量</th>
											<th>合计</th>
										</tr>
									</thead>
									<tbody>
										<tr
											v-for="item in cartList"
											:key="item.id">
											<td>
												<span
													class="icon-icon_close_alt2"
													style="cursor: pointer"
													@click="deleteItem(item.id)"></span>
											</td>
											<td class="cart-pro-img">
												<img
													:src="`/img/course/list/list-${item.courseId}.png`"
													alt="" />
											</td>
											<td>{{ item.title }}</td>
											<td>{{ item.price }}</td>
											<td>
												<div class="qty-pro-area">
													<form class="cart-form">
														<div
															class="order-plus-minus d-flex align-items-center">
															<div
																class="quantity-button-handler"
																@click="decreaseCount(item.id)">
																-
															</div>
															<input
																class="form-control cart-quantity-input"
																type="text"
																name="quantity"
																:value="item.count" />
															<div
																class="quantity-button-handler"
																@click="increaseCount(item.id)">
																+
															</div>
														</div>
														<div class="fav-icon">
															<i class="icon-icon_ribbon_alt"></i>
														</div>
													</form>
												</div>
											</td>
											<td>${{ item.price * item.count }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div class="col-12">
						<div
							class="coupon-cart-btn-area"
							style="margin-top: 0px"></div>
					</div>
				</div>

				<div class="row justify-content-end">
					<div class="col-lg-5 col-xl-4">
						<div class="cart-total-card">
							<h4>购物车合计</h4>

							<div class="cart-list">
								<p>合计</p>
								<p>${{ total }}</p>
							</div>

							<div class="cart-list">
								<div class="cart-tax-pri">
									<p>增值税</p>
									<p>CN (3.375%)</p>
								</div>
								<p>${{ (total * 0.03375).toFixed(2) }}</p>
							</div>

							<div class="total-order">
								<h5>结算价格</h5>
								<div class="total-order-desc">
									<h6>${{ (total * 1.03375).toFixed(2) }}</h6>
									<span>除去增值税: ${{ total }}</span>
								</div>
							</div>

							<button
								type="submit"
								class="pro-btn mt-4"
								@click="router.push('/order')">
								<span class="icon-padlock"></span>
								立即结账
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped></style>
