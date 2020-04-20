<template>
    <el-container id="app">
        <el-main>
            <div class="d-flex is-justify-center links-container">
                <router-link class="el-link" to="/users/login">Login page</router-link>
                <router-link class="el-link" to="/users/list">Users list</router-link>
            </div>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            showError(error) {
                this.$store.commit('users_error');

                this.$notify.error({
                        title: error.title,
                        message: error.message,
                        duration: 2500
                    })
            }
        },
        created() {
            this.$eventHub.$on('show-error', this.showError);
        },
        beforeDestroy() {
            this.$eventHub.off('show-error');
        }
    }
</script>

<style>
    #app {
        font-family: 'Ubuntu', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .links-container {
        margin: 0 5px 15px 5px;
    }

    .links-container > a {
        padding: 0 5px;
    }

    .links-container > a:visited {
        color: unset;
    }

    .links-container > a.exact-active {
        text-decoration: underline !important;
    }
</style>
