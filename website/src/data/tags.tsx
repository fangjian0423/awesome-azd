/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations
 * (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - `title` is your project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of your project
 * - Use relevant tags to categorize your site (read the tag descriptions below)
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If your website is open-source, add your source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the GitHub interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remain correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 */

export type Tag = {
    label: string;
    description: string;
    color: string;
};

export type User = {
    title: string;
    description: string;
    preview: string;
    website: string;
    author: string;
    source: string | null;
    tags: TagType[];
};

// NN: Updated TagType to suit Static Web Apps
export type TagType =
    | 'featured'
    | 'springboot'
    ;


// LIST OF AVAILABLE TAGS
// Each tag in lit about must have a defined object here
// One or more tags can be associated per card
// Tag Metadata:
//   - label = short name seen in tag
//   - description = explainer for usage
//   - color = color of the dot in tag
// Some tags are special:
//    - 'featured` can only be added by admin (for quality templates)
//    - 'help wanted` must associate "source" with an open issue
export const Tags: {[type in TagType]: Tag} = {

    // =============     FOR ADMIN USE ONLY: 

    // Use for validated templates of high-quality 
    featured: {
        label: ' ♥️ Featured',
        description:
            'This tag is used for admin-curated middlewares that represent high-quality (community) or official (Microsoft) middleware',
        color: 'red', //'#e9669e',
    },

    // Use for templates that were valid once, but either
    //  don't work now or have not been updated in XX time
    /*
    deprecated: {
        label: '❌ Deprecated',
        description: 'This tag is used when a previously approved template is no longer relevant (e.g., out of date, not refreshed in XX months etc.)',
        color: 'red',
    },
    */

    // Use for templates that were valid once, but either
    //  don't work now or have not been updated in XX time
    springboot: {
        label: 'Spring Boot 🍃',
        description: 'This tag is used when there is a request for azd templates for a specific architecture. The title will link to arch, the button to a custom-issue for PR',
        color: 'green',
    },

    springcloud: {
        label: 'Spring Cloud',
        description: 'This tag is used when there is a request for azd templates for a specific architecture. The title will link to arch, the button to a custom-issue for PR',
        color: 'green',
    },

    gateway: {
        label: 'Gateway',
        description: 'This tag is used when there is a request for azd templates for a specific architecture. The title will link to arch, the button to a custom-issue for PR',
        color: 'blue',
    },

    configuration: {
        label: 'Configuration',
        description: 'This tag is used when there is a request for azd templates for a specific architecture. The title will link to arch, the button to a custom-issue for PR',
        color: 'yellow',
    },

    distributedsystem: {
        label: 'Distributed System',
        description: 'This tag is used when there is a request for azd templates for a specific architecture. The title will link to arch, the button to a custom-issue for PR',
        color: 'orange',
    },
};

