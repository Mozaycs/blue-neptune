export default {
    "type": "document",
    "name": "config",
    "title": "Site Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "description",
            "title": "Site Description",
            "description": "The default site description used in meta data.",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout_style",
            "title": "Layout Style",
            "description": "The style of the theme layout",
            "initialValue": "grid",
            "validation": null,
            "options": {
                "list": [
                    "grid",
                    "list"
                ]
            }
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Color Palette",
            "description": "The color palette used for the site.",
            "initialValue": "green",
            "validation": null,
            "options": {
                "list": [
                    "black",
                    "blue",
                    "green",
                    "red"
                ]
            }
        },
        {
            "type": "object",
            "name": "header",
            "title": "Header Configuration",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "title",
                    "title": "Header Title",
                    "description": "The title displayed in the header if no logo image added.",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "logo_img",
                    "title": "Logo",
                    "description": "The logo image displayed in the header.",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "has_nav",
                    "title": "Enable Navigation Menu",
                    "description": "Display the navigation menu bar in the header.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "nav_links",
                    "title": "Navigation Links",
                    "description": "List of navigation links.",
                    "validation": null,
                    "of": [
                        {
                            "type": "action"
                        }
                    ]
                }
            ]
        },
        {
            "type": "object",
            "name": "footer",
            "title": "Footer Configuration",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "content",
                    "title": "Footer Content",
                    "description": "The copyright text displayed in the footer.",
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "links",
                    "title": "Links",
                    "description": "List of links in the footer.",
                    "validation": null,
                    "of": [
                        {
                            "type": "action"
                        }
                    ]
                },
                {
                    "type": "boolean",
                    "name": "has_social",
                    "title": "Enable Social Links",
                    "description": "Display social links in the footer.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "social_links",
                    "title": "Social Links",
                    "description": "List of social links in the footer.",
                    "validation": null,
                    "of": [
                        {
                            "type": "action"
                        }
                    ]
                },
                {
                    "type": "boolean",
                    "name": "has_subscribe",
                    "title": "Enable Subscribe Section",
                    "description": "Display the newsletter subscription section in the footer.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "subscribe_title",
                    "title": "Title",
                    "description": "The title of the subscribe section.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "subscribe_content",
                    "title": "Content",
                    "description": "The text content of the subscribe section.",
                    "validation": null
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "site-metadata.json"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true
}