export default {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "comments": [
                "Comments #1",
                "Comments #2"
            ],
            "auth": true
        }
    ],
    "required": [
        "comments",
        "auth"
    ],
    "properties": {
        "comments": {
            "$id": "#/properties/comments",
            "type": "array",
            "title": "The comments schema",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "examples": [
                [
                    "Comments #1",
                    "Comments #2"
                ]
            ],
            "additionalItems": true,
            "items": {
                "$id": "#/properties/comments/items",
                "anyOf": [
                    {
                        "$id": "#/properties/comments/items/anyOf/0",
                        "type": "string",
                        "title": "The first anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "Comments #1",
                            "Comments #2"
                        ]
                    }
                ]
            }
        },
        "auth": {
            "$id": "#/properties/auth",
            "type": "boolean",
            "title": "The auth schema",
            "description": "An explanation about the purpose of this instance.",
            "default": false,
            "examples": [
                true
            ]
        }
    },
    "additionalProperties": true
}