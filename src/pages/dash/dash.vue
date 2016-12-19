<template>
    <div>
        <site
            :style="{
                marginBottom: style.margin.md
            }"
            v-for="site in sites"
            :site="site"
        >
        </site>
    </div>
</template>

<script>

    import yaml from 'js-yaml'
    
    import site from '../../components/site/site.vue'
    import style from '../../style'

    export default {
        components: { site },
        data: function() {
            return {
                sites: [],
                style
            }
        },
        created() {
            this.$http
                .get('./data/dash.yaml')
                .then(res => this.sites = yaml.safeLoad(res.body))
        }
    }

</script>