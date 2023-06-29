<template>
    <div class="card">
        <div>
            <img src="category.imageURL" alt="Imagem do Produto" class="card-img-top">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{category.categoryName}}</h5>
            <p class="card-text">{{ category.categoryDescription }}.</p>
            <a href="#" class="btn btn-primary">Acessar</a>

        </div>
    </div>
</template>
<script>
export default{
    name : "CategoryBox",
    props : ["category"],
    methods : {},
}
</script>