<template>
	<div class="home-page">
		<div class="banner">
			<div class="container">
				<h1 class="logo-font">conduit</h1>
				<p>A place to share your knowledge.</p>
			</div>
		</div>
		<div class="container page">
			<div class="row">
				<div class="col-md-9">
					<Suspense>
						<template #default>
							<Feed />
						</template>
						<template #fallback>
							Articles are downloading...
						</template>
					</Suspense>
				</div>

				<div class="col-md-3">
					<Suspense>
						<template #default>
							<PopularTags />
						</template>
						<template #fallback>
							Popular tags are downloading...
						</template>
					</Suspense>
				</div>
			</div>
		</div>
	</div>
</template>
