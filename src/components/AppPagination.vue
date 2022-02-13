<script setup>
	import { computed } from 'vue'
	import { range } from '@/services'
	import AppLink from './AppLink.vue'

	const props = defineProps({
		total: {
			type: Number,
			required: true,
		},
		limit: {
			type: Number,
			required: true,
		},
		currentPage: {
			type: Number,
			required: true,
		},
		baseUrl: {
			type: String,
			required: true,
		},
	})

	const noOfPages = computed(() => {
		return range(1, Math.ceil(props.total / props.limit))
	})

	const isActivePage = pageNumber => props.currentPage === pageNumber
</script>

<template>
	<ul class="pagination">
		<li
			v-for="pageNumber in noOfPages"
			:key="pageNumber"
			:class="['page-item', { active: isActivePage(pageNumber) }]"
		>
			<RouterLink
				:aria-label="`Go to page ${pageNumber}`"
				:to="{ path: baseUrl, query: { page: pageNumber } }"
				class="page-link"
				>{{ pageNumber }}
			</RouterLink>
		</li>
	</ul>
</template>
