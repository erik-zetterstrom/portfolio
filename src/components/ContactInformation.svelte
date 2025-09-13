<script lang="ts">
    type Address = {
        street: string;
        houseNumber: string;
        postalCode: string;
        city: string;
    }
    export let address: Address;
    export let phoneNumer: string;
    export let emailAddress: string;

    const houseEmoji = "🏠";
    const phoneEmoji = "📞";
    const emailEmoji = "📧";
</script>

<div class="contact-information-container">
    <h2 class="contact-information-title">Contact information</h2>
    <div>
        <p class="contact-information">{houseEmoji} {address.street} {address.houseNumber}, {address.postalCode} {address.city}</p>
        <p class="contact-information">{phoneEmoji} {phoneNumer}</p>
        <p class="contact-information">{emailEmoji} {emailAddress}</p>
    </div>
</div>

<style>
    .contact-information-container {
        padding: 0rem; /*clamp(3rem, 5rem); */
    }

    .contact-information-title {
        font-size: var(--cv-h2-font-size);
    }

    .contact-information {
        font-size: var(--cv-font-size);
    }
</style>