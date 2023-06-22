<script>
export default {
    name: 'FooterApp'
}

</script>
<template>
    <footer>
        <div class="container h-100">
            <div class="row row-cols-2 h-100 align-items-center h-100">
                <ul class="d-flex align-items-center">
                    <li> &copy; BnB Anonimi,Inc</li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Termini</a></li>
                    <li><a href="">Dettagli Azienda</a></li>
                </ul>
                <ul class="d-flex align-items-center">
                    <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
                    <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
                    <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;
footer{
    background-color: #F7F7F7;
    width: 100%;
    height: 3.125rem;
    color: #333;
    ul{
        li{
            margin: 0 1.25rem;
        }
    }
    a{
        text-decoration: none;
        color: inherit;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
}
</style>