<script>
export default {
    name: 'HeaderApp'
}
</script>

<template>
    <header>
        <div class="container h-100">
            <div class="d-flex align-items-center h-100 justify-content-between text-center">
                <div>Logo</div>
                <ul class="list-unstyled d-flex justify-content-center align-items-center gap-3 m-0">
                    <li>Home</li>
                    <li>Appartamenti</li>
                    <li>Contatti</li>
                </ul>
                <div>
                    <font-awesome-icon icon="fa-solid fa-user-secret" />
                </div>
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;
header {
    background-color: $primary;
    width: 100%;
    height: 6.25rem;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
}
</style>