<script>
export default {
    name: 'HeaderApp',
    methods: {
        loginDrop() {

        }
    }
}

</script>

<template>
    <header>
        <div class="container h-100">
            <div class="d-flex align-items-center h-100 justify-content-between text-center">
                <div id="logo"><img class="img-fluid" src="../../assets/img/logo.png" alt="">
                </div>
                <ul
                    class="list-unstyled d-flex justify-content-center align-items-center gap-2 gap-lg-5 m-0 d-none d-sm-flex">
                    <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'Search' }">Appartamenti</router-link></li>
                </ul>
                <div class="dropdown">
                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                        id="login">
                        <font-awesome-icon icon="fa-solid fa-bars" class="me-1" />
                        <font-awesome-icon icon="fa-solid fa-user" />
                    </button>
                    <ul class="dropdown-menu p-2">
                        <li><router-link class="py-3 d-block d-sm-none" :to="{ name: 'Home' }">Home</router-link></li>
                        <li><router-link class="py-3 d-block d-sm-none" :to="{ name: 'Search' }">Appartamenti</router-link></li>
                        <li><a class="py-3 d-block" href="#">Accedi/Registrati</a></li>
                    </ul>
                </div>
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
    // position: fixed;
    // right: 0;
    // left: 0;
    // top: 0;
    // z-index: 1;
    // color: black;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: white;

    #logo {
        width: 6.25rem;
    }

    a {
        text-decoration: none;
        color: inherit;
        display: block;

        &:hover {
            color: $link;
        }
    }

    #login {
        border: .0625rem solid lightgray;
        border-radius: .4688rem;
        padding: .3125rem .625rem;
        background-color: transparent;

        &::after {
            display: none;
        }
    }

    .item:hover {
        background-color: transparent;
    }
}
</style>