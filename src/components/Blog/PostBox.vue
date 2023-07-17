<template>
    <div style="white-space: pre-line;" class="container text-break d-flex flex-column justify-content-center bd-highlight mb-3">
        <h1 style="white-space: pre-line;" >{{post.title}}</h1>
        <p style="white-space: pre-line;" >{{post.body}}</p>
    </div>
</template>
<script>
export default{
    name:"PostBox",
    props:["post"],

}
</script>
<style scoped>
</style>