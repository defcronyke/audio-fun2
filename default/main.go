package AudioFun2

import (
    "net/http"
)

func init() {

    http.Handle("/", http.FileServer(http.Dir("static/dist")))
}

