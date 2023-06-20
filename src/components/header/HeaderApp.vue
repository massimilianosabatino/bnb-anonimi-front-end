<script>
export default {
    name: 'HeaderApp'
}
</script>

<template>
    <header>
        <div class="container h-100">
            <div class="d-flex align-items-center h-100 justify-content-between text-center">
                <div id="logo"><img class="img-fluid" src="../../assets/img/logo.png" alt=""></div>
                <ul class="list-unstyled d-flex justify-content-center align-items-center gap-5 m-0">
                    <li><a href="">Home</a></li>
                    <li><a href="">Appartamenti</a></li>
                    <li><a href="">Contatti</a></li>
                </ul>
                <ul class="list-unstyled d-flex justify-content-center aling-items-center gap-3 m-0">
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-user" /></a></li>
                    <li><a href="">Register</a></li>
                </ul>
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;
header {
    border-bottom: 2px solid $primary;
    box-shadow: 5px 0px 10px 3px $primary;
    width: 100%;
    height: 6.25rem;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1;
    color: black;
    font-size: 1.25rem;
    font-weight: bold;
    #logo{
        width: 6.25rem;
    }
    a{
        text-decoration: none;
        color: inherit;
        &:hover{
            color: $link;
        }
    }
}
</style>