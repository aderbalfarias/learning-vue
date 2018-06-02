<template>
    <div class="col-sm-6 col-md-4 mb-2">
    <div class="card quote">
        <div class="card-header">
            Quote
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>
                    <slot></slot>
                </p>
                <footer class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
        </div>
    </div>
    </div>
</template>

<script>
</script>

<style scoped>
    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ffe2e2;
    }
</style>