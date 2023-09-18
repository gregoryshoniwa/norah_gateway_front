<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Privacy Policy" />
            <PrivacyPolicy />
        </div>
        <FooterStyleTwo />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import FooterStyleTwo from '../Layouts/FooterStyleTwo'

export default {
    name: 'PrivacyPolicyPage',
    components: {
        Navbar,
        PageTitle,
        PrivacyPolicy,
        FooterStyleTwo,
    }
}
</script>