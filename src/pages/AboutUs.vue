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
                    github: 'https://github.com/massimilianosabatino',
                    linkedin: 'https://www.linkedin.com/in/massimiliano-sabatino/'
                },
                {
                    id: 3,
                    name: 'Mattia Fezzardi',
                    image: 'src/assets/img/gon.png',
                    github: 'https://github.com/Fez06',
                    linkedin: 'https://www.linkedin.com/in/mattiafezzardi/'
                },
                {
                    id: 4,
                    name: 'Leonardo Sallustio',
                    image: 'src/assets/img/goku.png',
                    github: 'https://github.com/LeoSallu',
                    linkedin: 'https://www.linkedin.com/in/leonardo-sallustio-6b787a1b3/'
                },
                {
                    id: 5,
                    name: 'Luca Zanfrisco',
                    image: 'src/assets/img/rocket.png',
                    github: 'https://github.com/LucaZanfrisco',
                    linkedin: 'https://www.linkedin.com/in/luca-zanfrisco/'
                }
            ]
        };
    }
}
</script>

<template>
    <main>
        <div class="container m-5 mx-auto">
            <h1 class="text-center">IL SITO</h1>
            <p class="mb-10 text-center">Questo è il progetto finale del corso da full stack web developer di Boolean. Interpretato da 5 persone, è stato sviluppato utilizzando gli strumenti e le tecnologie appresi durante le 700 ore del corso. Prende ispirazione da un noto sito web dedito alla gestione degli appartamenti da prendere in affitto.</p>
            <p class="text-center">Lo sviluppo avviene sia lato front-end, sia lato back-end. Nello specifico, i proprietari di appartamenti, registrandosi al sito, possono inserire le informazioni delle loro proprietà e decidere se sponsorizzarle per avere una posizione evidenziata nelle ricerche e in home page. Gli utenti interessati ad affittare, senza registrazione, possono cercare e visualizzare gli appartamenti. Una volta scelto l’appartamento di interesse, possono inviare un messaggio al proprietario tramite la piattaforma, per chiedere maggiori dettagli.</p>
        </div>
        <div class="container m-5 mx-auto">
            <h1 class="text-center">CHI SIAMO</h1>
        </div>
        <div class="container d-flex justify-content-center">
            <div class="row  carte align-items-stretch">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-2 my-2" v-for="(developer, index) in developers" :key="developer.id">
                    <div class="card h-100 border-0 cartasingola">
                        <div class="perimg">
                            <img :src="developer.image" class="immagine" alt="Developer Image">
                        </div>
                        <div class="card-body">
                            <!-- <h5 class="card-title">{{ developer.name }}</h5> -->
                            <div class="mt-auto d-flex flex-column">
                                <h5 class="card-title text-center">{{ developer.name }}</h5>
                                <a :href="developer.github" class="mb-2 link-no-underline text-center"><font-awesome-icon icon="fa-brands fa-github" /> GitHub</a>
                                <a :href="developer.linkedin" class="link-no-underline text-center"><font-awesome-icon icon="fa-brands fa-linkedin" /> LinkedIn</a>
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
    margin-top: 7.5rem;
}
.carte {
    // justify-content: space-between;
    justify-content: flex-start;
}

// @media (min-width: 1400px) {
//   .carte {
//     justify-content: space-around;
//   }
// }

.carte {
    justify-content: space-around;
}

@media (min-width: 575px) {
    .cartasingola {
        display: flex;
    }

}

.link-no-underline {
  text-decoration: none;
}
.immagine {
    // height: 300px;
    object-fit: contain;
    // width: 300px;
    // border-radius: 50%;
    // background-color: red;
    width: 100%;
    
}
.perimg{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border:1px solid blue;
    overflow: hidden;
    margin: 0 auto;
}
</style>
  
  
  
  
  
  