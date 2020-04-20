<template>
    <el-row>
        <el-col :span="24" class="table-container">
            <el-table :data="requestedUsersList" v-loading="isLoadingData">
                <el-table-column prop="id" label="User ID" width="75px"/>
                <el-table-column prop="type" label="Type" width="75px"/>
                <el-table-column prop="login" label="Login" width="100px"/>
                <el-table-column prop="html_url" label="URL" width="350px">
                    <template slot-scope="scope">
                        <el-link :href="scope.row.html_url" target="_blank">
                            <i class="el-icon-link"></i> {{ scope.row.html_url }}
                        </el-link>
                    </template>
                </el-table-column>
                <el-table-column label="Operations" width="100px">
                    <template slot-scope="scope">
                        <el-button @click="$router.push({ name: 'users-details', params: { user: scope.row.login } })"
                                   icon="el-icon-collection"
                                   size="mini" type="primary"
                                   plain round>
                            Details
                        </el-button>
                    </template>
                </el-table-column>
                <template slot="empty">
                    <div>No data available</div>
                </template>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'users-list',
        data() {
            return {
                isLoadingData: true
            }
        },
        computed: mapGetters(['requestedUsersList']),
        beforeCreate() {
            this.$store.dispatch('getUsers');
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
    .table-container {
        display: flex;
        justify-content: center;
    }
    .el-table {
        width: 700px;
        flex: unset;
        border-radius: 10px;
        box-shadow: 0 -5px 25px 0 rgba(0, 0, 0, 0.1), 0 5px 25px 0 rgba(0, 0, 0, 0.1);background-color: #ffffff;
    }
    .el-table th>.cell, .el-table td>.cell {
        display: flex!important;
        justify-content: center;
    }
</style>