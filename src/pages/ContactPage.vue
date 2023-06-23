<script>
export default {
    name: 'ContactPage',
}
</script>

<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <h3 class="title is-2 text-uppercase">Contatta il proprietario</h3>
                <form action="" method="post">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <div class="input-group">
                            <span class="input-group-text">
                                <font-awesome-icon icon="fa-solid fa-user" />
                            </span>
                            <input type="text" name="name" id="name" class="form-control form-control-sm"
                                placeholder="Inserisci il tuo nome" autofocus>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <div class="input-group">
                            <span class="input-group-text">
                                <font-awesome-icon icon="fa-solid fa-envelope" />
                            </span>
                            <input type="email" name="email" id="email" class="form-control form-control-sm"
                                placeholder="Inserisci la tua email">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Messaggio</label>
                        <textarea name="message" id="message" rows="5" class="form-control form-control-sm"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success btn-lg">Invia</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
