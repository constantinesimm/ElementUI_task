<template>
    <el-row>
        <el-col :span="24">
            <el-row>
                <el-col :span="24">
                    <el-page-header @back="goBackPage" title="user's list" content="User details"/>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" class="page-column">
                    <el-card class="box-card" v-loading="isLoadingData">
                        <template slot="header">
                            <img :src="requestedSingleUser['avatar_url']" class="image">
                        </template>
                        <div v-for="(value, key) in requestedSingleUser" :key="key" class="text item">
                            <div v-if="JSON.stringify(value).indexOf('http') === -1">
                                <span>{{ key.replace(/_/g, ' ') }}:</span>
                                <span>{{ value }}</span>
                            </div>
                            <div v-if="JSON.stringify(value).indexOf('http') !== -1">
                                <span>{{ key.replace(/_/g, ' ') }}:</span>
                                <el-link :href="value.split('{').shift()" target="_blank"><i class="el-icon-link"></i> Link</el-link>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'users-details',
        data() {
            return {
                isLoadingData: true
            }
        },
        computed: mapGetters(['requestedSingleUser']),
        methods: {
            goBackPage() {
                return history.back();
            }
        },
        beforeCreate() {
            this.$store.dispatch('getSingleUser', this.$route.params['user']);
        },
        mounted() {
            const checkStatus = () => {
                let status = this.$store.getters.getStatus;

                if (status === 'loading') {
                    setTimeout(checkStatus, 500)
                } else {
                    clearTimeout(checkStatus);
                    this.isLoadingData = false;
                }
            };
            checkStatus();
        }
    }
</script>

<style>
    .page-column {
        display: flex;
        justify-content: center;
    }
    .box-card {
        width: 325px;
    }
    .el-card__header {
        display: flex!important;
        flex-direction: column;
        align-items: center;
    }
    .el-card__header > .image {
        width: 300px;
        border-radius: 50%;
    }
    .text.item > div{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EBEEF5;
    }
</style>