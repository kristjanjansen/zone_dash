<template>

    <div class="site">
            <div class="site__top" @click="open = ! open">
                
                <icon
                    class="site__top__icon"
                    :icon="statusMap[site.status].icon"
                    :color="statusMap[site.status].color"
                    size="md"
                ></icon>

                <div class="site__top__title">{{ site.name }}</div>

                <div class="site__links" v-for="links in site.topLinks">
                    <div
                        v-for="link in links"
                        class="site__link"
                        :class="linkClass(link)"
                    >
                        {{ link.name }}
                    </div>
                </div>

            </div>

            <div v-for="links in site.bottomLinks" class="site__bottom" v-if="open">
                <div class="site__group" v-for="group in links">
                    <div v-for="link in group" class="site__link" :class="linkClass(link)">{{ link.name }}</div>
                </div>
            </div>


        </div>

    </div>

</template>

<script>
    
    import icon from '../icon/icon.vue'
    
    export default {

        components: { icon },

        props: {
            site: {default: () => {}}
        },
        
        methods: {
            linkClass: function(link) {
                if (link.prio == 'small') { return 'site__link__small'}
                if (link.prio == 'big') { return 'site__link__big'}
                if (link.prio == 'title') { return 'site__link__title'}
                return ''
            }
        },
        data: () => ({
            open: false,
            statusMap: {
                ok: {icon: 'world', color: 'gray'},
                warning: {icon: 'warning', color: 'orange'},
                error: {icon: 'warning', color: 'red'}
            }
        })

    }

</script>
<style>
    .site {
        border: $border-md;
        border-radius: $border-radius-md;
        line-height: $line-height-md;
    }

    .site__top {
        font: $font-text-lg;
        display: flex;
        align-items: center;
    }

    .site__top__icon {
        margin: 0 $margin-md;
    }

    .site__top__title {
        margin-right: $margin-md;
    }

    .site__links {
        padding: $padding-md;
        display: flex;
        border-left: $border-md;
    }

    .site__link {
        font: $font-text-sm;
        padding: 10px;
        background: hsl(0, 0%, 85%);
        color: hsl(0, 0%, 40%);
        margin: 5px;
        border-radius: 3px;
    }
    .site__link__small {
        color: hsl(0, 0%, 40%);
        opacity: 0.5;
    }
    .site__link__big {
        background: hsl(0, 0%, 20%);
        color: hsl(0, 0%, 90%);;
    }
    .site__link__title {
        background: none;
        padding: 0;
        font-size: 1.2rem;
        text-transform: uppercase;
    }
    .site__bottom {
        padding: $padding-md;
        border-top: $border-md;
    }
    .site__group {
        padding-bottom: $padding-md;
        border-bottom: $border-sm;
        margin-bottom: $padding-md;
        display: flex;
        flex-wrap: wrap;
    }
    .site__group:last-child {
        padding: 0;
        margin: 0;
        border: none;
    }
    .site__bottom > * {
        margin-right: $margin-sm;
    }
</style>