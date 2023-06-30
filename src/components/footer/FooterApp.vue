<script>
export default {
    name: 'FooterApp'
}

</script>
<template>
    <footer>
        <div class="container h-100">
            <div class="row align-items-center justify-content-between">
                <ul class="d-flex align-items-center  mb-0 list-unstyled col-8">
                    <li> &copy; BnB Anonimi,Inc</li>
                </ul>
                <div class="text-end col-4">
                    <a class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#footer"
                        aria-controls="offcanvasBottom">Info</a>

                    <div class="offcanvas offcanvas-bottom rounded-2" tabindex="-1" id="footer"
                        aria-labelledby="offcanvasBottomLabel">
                        <div class="offcanvas-header">
                            <a type="button" class="" data-bs-dismiss="offcanvas" aria-label="Close"><i
                                    class="fa-solid fa-xmark"></i></a>
                        </div>
                        <div class="offcanvas-body small">
                            <div class="row row-cols-2 justify-content-between ">
                                <ul class="list-unstyled m-0 d-flex flex-column text-center">
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Termini</a></li>
                                    <li><router-link :to="{ name: 'AboutUs'}">Dettagli Azienda</router-link></li>

                                </ul>
                                <ul class="list-unstyled m-0 d-flex flex-column text-center" id="social">
                                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a></li>
                                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
                                    <li><a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;

footer {
    background-color: #F7F7F7;
    width: 100%;
    height: 3.125rem;
    color: #333;
    padding: 5px;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    
    ul {
        li {
            margin: 0 1.25rem;
            font-size: .75rem;
        }
    }
    a {
        text-decoration: none;
        color: inherit;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
    .offcanvas-body {
        #social {
            li {
                a {
                    font-size: 20px;
                }
            }
        }
        ul {
            li {
                padding: 10px 0;
                font-size: 16px;
            }
        }
    }
}</style>