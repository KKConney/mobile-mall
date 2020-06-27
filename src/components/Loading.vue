<template>
    <div class="mb-loading-container">
        <div class="content animation-2">
            <div class="shape shape1"></div>
            <div class="shape shape2"></div>
            <div class="shape shape3"></div>
            <div class="shape shape4"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    .mb-loading-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
    }

    .mb-loading-container .content {
        width: 30px;
        height: 30px;
        left: 50%;
        top: 50%;
        margin-left: -15px;
        margin-top: -15px;
        position: absolute;
    }
    .mb-loading-container .shade {
        background: rgba(0,0,0,.15);
        position: fixed;
        width: 100%;
        height: 100%;
    }
    .mb-loading-container .content.animation-2 {
        -webkit-transform: rotate(10deg);
        transform: rotate(10deg);
    }
    .mb-loading-container .content.animation-2 {
        -webkit-animation: rotation 1s infinite;
        animation: rotation 1s infinite;
    }

    .mb-loading-container .shape {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
    .mb-loading-container .shape.shape1 {
        left: 0;
        background-color: #01a6ff;
    }
    .mb-loading-container .shape.shape2 {
        right: 0;
        background-color: #7cdad4;
    }
    .mb-loading-container .shape.shape3 {
        bottom: 0;
        background-color: #f4b06b;
    }
    .mb-loading-container .shape.shape4 {
        bottom: 0;
        right: 0;
        background-color: #ef8784;
    }

    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    .animation-2 .shape1 {
        -webkit-animation: animation2shape1 0.5s ease 0s infinite alternate;
        animation: animation2shape1 0.5s ease 0s infinite alternate;
    }

    @-webkit-keyframes animation2shape1 {
        from {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        to {
            -webkit-transform: translate(5px, 5px);
            transform: translate(5px, 5px);
        }
    }

    @keyframes animation2shape1 {
        from {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        to {
            -webkit-transform: translate(5px, 5px);
            transform: translate(5px, 5px);
        }
    }
    .animation-2 .shape2 {
        -webkit-animation: animation2shape2 0.5s ease 0s infinite alternate;
        animation: animation2shape2 0.5s ease 0s infinite alternate;
    }

    @-webkit-keyframes animation2shape2 {
        from {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        to {
            -webkit-transform: translate(-5px, 5px);
            transform: translate(-5px, 5px);
        }
    }

    @keyframes animation2shape2 {
        from {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        to {
            -webkit-transform: translate(-5px, 5px);
            transform: translate(-5px, 5px);
        }
    }
    .animation-2 .shape3 {
        -webkit-animation: animation2shape3 0.5s ease 0s infinite alternate;
        animation: animation2shape3 0.5s ease 0s infinite alternate;
    }

    @-webkit-keyframes animation2shape3 {
        from {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        to {
            -webkit-transform: translate(5px, -5px);
            transform: translate(5px, -5px);
        }
    }

    @keyframes animation2shape3 {
        from {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        to {
            -webkit-transform: translate(5px, -5px);
            transform: translate(5px, -5px);
        }
    }
    .animation-2 .shape4 {
        -webkit-animation: animation2shape4 0.5s ease 0s infinite alternate;
        animation: animation2shape4 0.5s ease 0s infinite alternate;
    }

    @-webkit-keyframes animation2shape4 {
        from {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        to {
            -webkit-transform: translate(-5px, -5px);
            transform: translate(-5px, -5px);
        }
    }

    @keyframes animation2shape4 {
        from {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        to {
            -webkit-transform: translate(-5px, -5px);
            transform: translate(-5px, -5px);
        }
    }

</style>
