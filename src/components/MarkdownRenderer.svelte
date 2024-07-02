<script>
    import { marked } from 'marked';

    export let content = ``;

    function renderMarkdown(content) {
        return marked(content);
    }
</script>

<div class="markdown-content">
    {@html renderMarkdown(content)}
</div>

<style>
    .markdown-content {
        width: 100%;
        max-width: 100%;
        overflow-wrap: break-word; /* Ensure long words are wrapped */
        word-wrap: break-word; /* Support for older browsers */
        word-break: break-word; /* Ensure words are broken if necessary */
        padding: 1rem; /* Optional: Add padding for better readability */
        white-space: pre-wrap; /* Preserve white spaces and wrap text */
    }
</style>
