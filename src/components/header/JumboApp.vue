<script>
export default {
    name: 'JumboApp'
}
</script>

<template >
    <div id="jumbo">
        <div class="container">
            <div class="d-flex align-items-center justify-content-center">
                <input type="text" id="search" placeholder="Cerca per città o indirizzo">
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;

#jumbo {
    margin-top: 6.25rem;
    background: linear-gradient($primary, white);
    padding: 3.125rem 0rem;

    #search {
        width: 50%;
        padding: .625rem 0;
        border-radius: .625rem;
        text-align: center;
        font-weight: bold;
        border-radius: 3.125rem;
    }
}
</style>