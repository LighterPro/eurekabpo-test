{
    "targets": [
        {
            "target_name": "check_user_winapi",
            "sources": [ "src/check_user_winapi.cc" ],
            "include_dirs": ["<!@(node -p \"require('node-addon-api').include\")"],
            "dependencies": ["<!(node -p \"require('node-addon-api').gyp\")"],
            "defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS" ],
            "libraries": [ "Netapi32.lib" ]
        }
    ]
}
