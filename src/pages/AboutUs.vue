<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            developers: [
                {
                    id: 1,
                    name: 'Alberto Gioia',
                    image: 'src/assets/img/darth vader.png',
                    github: 'https://github.com/albertogioia93',
                    linkedin: 'https://www.linkedin.com/in/albertogioia/'
                },
                {
                    id: 2,
                    name: 'Massimiliano Sabatino',
                    image: 'src/assets/img/ichigo.png',
                    github: 'https://github.com/albertogioia93',
                    linkedin: 'https://www.linkedin.com/in/albertogioia/'
                },
                {
                    id: 3,
                    name: 'Mattia Fezzardi',
                    image: 'src/assets/img/gon.png',
                    github: 'https://github.com/albertogioia93',
                    linkedin: 'https://www.linkedin.com/in/albertogioia/'
                },
                {
                    id: 4,
                    name: 'Leonardo Sallustio',
                    image: 'src/assets/img/goku.png',
                    github: 'https://github.com/albertogioia93',
                    linkedin: 'https://www.linkedin.com/in/albertogioia/'
                },
                {
                    id: 5,
                    name: 'Luca Zanfrisco',
                    image: 'src/assets/img/rocket.png',
                    github: 'https://github.com/albertogioia93',
                    linkedin: 'https://www.linkedin.com/in/albertogioia/'
                }
            ]
        };
    }
}
</script>

<template>
    <main>
        <div class="container m-5">
            <h1>About Us:</h1>
        </div>
        <div class="container d-flex justify-content-center">
            <div class="row  carte align-items-stretch">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-2 my-2" v-for="(developer, index) in developers" :key="developer.id">
                    <div class="card h-100">
                        <img :src="developer.image" class="card-img-top immagine img-fluid" alt="Developer Image">
                        <div class="card-body d-flex flex-column">
                            <!-- <h5 class="card-title">{{ developer.name }}</h5> -->
                            <div class="mt-auto d-flex flex-column">
                                <h5 class="card-title">{{ developer.name }}</h5>
                                <a :href="developer.github" class="mb-2 link-no-underline"><font-awesome-icon icon="fa-brands fa-github" /> GitHub</a>
                                <a :href="developer.linkedin" class="link-no-underline"><font-awesome-icon icon="fa-brands fa-linkedin" /> LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
  
<style scoped lang="scss">
main {
    // height: 100vh;
    // overflow-y: scroll;
    margin-bottom: 60px;
}
.carte {
    // justify-content: space-between;
    justify-content: flex-start;
}

@media (min-width: 1400px) {
  .carte {
    justify-content: space-between;
  }
}
.link-no-underline {
  text-decoration: none;
}
.immagine {
    max-height: 200px;
    // width: 100%;
    object-fit: contain;
}
</style>
  
  
  
  
  
  