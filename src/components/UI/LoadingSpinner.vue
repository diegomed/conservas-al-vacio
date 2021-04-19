<template>
    <div class="flex items-center justify-center absolute h-100 w-100 bg-white z-1 overflow-hidden">
        <div class="loader"></div>
    </div>
</template>

<style>
    .loader {
        border: 16px solid #f3f3f3;
        border-top: 16px solid #bb944c;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        -webkit-animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
