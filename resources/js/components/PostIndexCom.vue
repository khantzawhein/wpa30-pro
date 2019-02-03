<template>
	<div class="row">
		<div class="col-12">
			<h1>Posts</h1>
			<br>
			<br>
			<router-link to="/posts/create" class="btn btn-success">Create Post</router-link> 
			<br>
			<br>
			<div v-if="posts.length > 0">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Category ID</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="post in posts">
							<td>{{ post.id }}</td>
							<td>{{ post.title }}</td>
							<td>{{ post.category_id }}</td>
							<td><router-link to = "/posts/edit" class ="btn btn-success">Edit</router-link></td>
							<td><button class="btn btn-danger" @click.prevent = "DeletePost()">Delete</button></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div v-else>
				<br>
				<br>
				<h1>No Posts</h1>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            axios.get("api/posts")
            .then(response => this.posts = response.data)
        },
        methods: {
        	DeletePost : function() {
        		
        	}
        }
    }

</script>