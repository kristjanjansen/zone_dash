<template>

    <div class="styleguide">


        <div class="styleguide__title">Icons</div>

        <input class="styleguide__range" v-model="sizeIndex" type="range" min="0" :max="sizeKeys.length - 1">

        <div v-for="icon in icons" class="styleguide__row">
            <icon class="styleguide__icon" :icon="icon" :size="sizeKeys[sizeIndex]"></icon>
            <pre class="styleguide__code">
                &lt;icon icon="{{ icon }}" size="{{ sizeKeys[sizeIndex] }}"&gt;&lt;/icon&gt;
            </pre>
        </div>

    </div>

</template>

<script>

    import _ from 'lodash'
    import path from 'path'

    import icon from '../../components/icon/icon.vue'
    import styles from '../../styles/variables'

    export default {
        
        components: { icon },

        data: function() {
            return {
                icons: [],
                sizeIndex: 1,
                sizeKeys: _.keys(styles.iconSizes),
            }
        },

        mounted: function() {
            this.icons = require
                .context('../../svg', false, /\.svg$/)
                .keys()
                .map(key => path.basename(key, '.svg'))
        }
    }

</script>
<style>
    .styleguide__row {
        display: flex;
        align-items: center;
        margin-bottom: $margin-md;
        height: 4rem;
    }
    .styleguide__title {
        font: $font-text-xl;
        margin-bottom: $margin-md;
        color: $gray-dark;
    }
    .styleguide__icon {
        width: 3rem;
        display: flex;
        align-items: center;
    }
    .styleguide__code {
        color: $gray;
        font: $font-code-md;
        margin-left: $margin-md;
    }
</style>