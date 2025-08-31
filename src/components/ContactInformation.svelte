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
</script>

<div class="p-5">
    <p>&#127968; {address.street} {address.houseNumber}, {address.postalCode} {address.city}</p>
    <p>&#128222; {phoneNumer}</p>
    <p>&#128231; {emailAddress}</p>
</div>