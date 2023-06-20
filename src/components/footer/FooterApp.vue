<script>
export default {
    name: 'FooterApp'
}

</script>
<template>
    <footer>
        <div class="container h-100">
            <div class="row row-cols-3 text-center h-100 align-items-center">
                <div>Prova 1</div>
                <div>Prova 2</div>
                <div>Prova 3</div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;
footer{
    background-color: $primary;
    width: 100%;
    height: 3.125rem;
    color: white;
}
</style>