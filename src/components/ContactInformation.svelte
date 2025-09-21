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

<div class="pb-8">
    <h2 class="text-size-cv-1 font-black bg-gradient-to-br from-gradient-pink to-gradient-orange bg-clip-text text-transparent">Contact Information</h2>
    <div>
        <p class="text-size-cv-4">{houseEmoji} {address.street} {address.houseNumber}, {address.postalCode} {address.city}</p>
        <p class="text-size-cv-4">{phoneEmoji} {phoneNumer}</p>
        <p class="text-size-cv-4">{emailEmoji} {emailAddress}</p>
    </div>
</div>
