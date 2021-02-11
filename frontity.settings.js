const settings = {
    "name": "aplex",
    "state": {
        "frontity": {
            "url": "https://wp-dev.space/education/frontity/develop/",
            "title": "Test Frontity Blog",
            "description": "WordPress installation for Frontity development",
        }
    },
    "packages": [
        {
            "name": "aplex-apartment-complex",
            "state": {
                "theme": {
                    "autoPrefetch": "in-view"
                },
            },
        },
        {
            "name": "@frontity/wp-source",
            "state": {
                "source": {
                    "api": "https://wp-dev.space/education/frontity/develop/wp-json/",
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react"
    ]
};

export default settings;
