<template>
<q-layout view="lHh Lpr lFf">
    <q-header class="move-app-layout">
        <q-toolbar class="row justify-between">

            <!-- <div class="self-center name-div">
          School Care
        </div>-->
            <q-img alt="School care logo" class="logo" src="../statics/logos/logo.png" />

            <div>
                <span>Hi, Ahmad</span>
                <q-icon size="lg" name="account_circle">
                    <q-menu>
                        <q-list style="min-width: 100px">
                            <q-separator />
                            <q-item to="/" dense clickable v-close-popup>
                                <q-item-section>Logout</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-icon>
            </div>
        </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
        <q-list>
            <q-item-label header class="text-grey-8">
                Essential Links
            </q-item-label>
            <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>
    </q-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>
</q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [{
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev'
    },
    {
        title: 'Github',
        caption: 'github.com/quasarframework',
        icon: 'code',
        link: 'https://github.com/quasarframework'
    },
    {
        title: 'Discord Chat Channel',
        caption: 'chat.quasar.dev',
        icon: 'chat',
        link: 'https://chat.quasar.dev'
    },
    {
        title: 'Forum',
        caption: 'forum.quasar.dev',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev'
    },
    {
        title: 'Twitter',
        caption: '@quasarframework',
        icon: 'rss_feed',
        link: 'https://twitter.quasar.dev'
    },
    {
        title: 'Facebook',
        caption: '@QuasarFramework',
        icon: 'public',
        link: 'https://facebook.quasar.dev'
    },
    {
        title: 'Quasar Awesome',
        caption: 'Community Quasar projects',
        icon: 'favorite',
        link: 'https://awesome.quasar.dev'
    }
];

export default {
    name: 'MainLayout',
    components: {
        EssentialLink
    },
    data() {
        return {
            leftDrawerOpen: false,
            essentialLinks: linksData
        }
    }
}
</script>

<style scoped>
.logo {
    height: 40px;
    max-width: 120px;
}
</style>
