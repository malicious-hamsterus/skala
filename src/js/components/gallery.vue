<template>
    <div>
        asd
        <LightBox :media="media"></LightBox>
    </div>
</template>

<script>
    import LightBox from 'vue-image-lightbox'
 
    export default {
    components: {
        LightBox,
    },
    data() {
        return {
        media: [
                { // For image
                    thumb: './assets/img/adult/adult-1.jpg',
                    src: './assets/img/adult/adult-1.jpg',
                    // caption: 'caption to display. receive <html> <b>tag</b>', // Optional
                    // srcset: '...' // Optional for displaying responsive images
                },
                { // For image
                    thumb: './assets/img/adult/adult-2.jpg',
                    src: './assets/img/adult/adult-2.jpg',
                    // caption: 'caption to display. receive <html> <b>tag</b>', // Optional
                    // srcset: '...' // Optional for displaying responsive images
                },
                { // For image
                    thumb: './assets/img/adult/adult-3.jpg',
                    src: './assets/img/adult/adult-3.jpg',
                    // caption: 'caption to display. receive <html> <b>tag</b>', // Optional
                    // srcset: '...' // Optional for displaying responsive images
                },
                { // For image
                    thumb: './assets/img/adult/adult-4.jpg',
                    src: './assets/img/adult/adult-4.jpg',
                    // caption: 'caption to display. receive <html> <b>tag</b>', // Optional
                    // srcset: '...' // Optional for displaying responsive images
                },
                { // For image
                    thumb: './assets/img/adult/adult-5.jpg',
                    src: './assets/img/adult/adult-5.jpg',
                    // caption: 'caption to display. receive <html> <b>tag</b>', // Optional
                    // srcset: '...' // Optional for displaying responsive images
                },
                { // For image
                    thumb: './assets/img/adult/adult-6.jpg',
                    src: './assets/img/adult/adult-6.jpg',
                    // caption: 'caption to display. receive <html> <b>tag</b>', // Optional
                    // srcset: '...' // Optional for displaying responsive images
                },
                ]
        }
    }
    }
</script>
