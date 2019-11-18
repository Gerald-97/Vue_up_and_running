<template>
    <div class="settingPage">
        <h1>Settings</h1>
        <p>Linking children of routed pages</p>
        <router-link :to="{ name: 'ProfileSettings'}">Profile Settings</router-link> |
        <router-link :to="{ name: 'SiteSettings'}">Site Settings</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'links',
    components: {
    }
}
</script>