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

<div class="pb-5">
    <h2 class="text-cv-1">Contact information</h2>
    <div>
        <p class="text-cv-3">{houseEmoji} {address.street} {address.houseNumber}, {address.postalCode} {address.city}</p>
        <p class="text-cv-3">{phoneEmoji} {phoneNumer}</p>
        <p class="text-cv-3">{emailEmoji} {emailAddress}</p>
    </div>
</div>
