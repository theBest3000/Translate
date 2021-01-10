function get_translations(term) {
    var lookup = term.toLowerCase()

    var url = api_url + "translate?from=" + srcLang + "&dest=" + destLang + "&format=json&pretty=true&phrase=" + lookup + "&tm=true"

    console.log("Try to reach url: GET "+url)

    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function() {
      console.log("Readystate is "+xhr.readyState)
        if (xhr.readyState === 4) {
            var results = JSON.parse(xhr.responseText)

            translatePage.getTranslationsFinished(results)
        }
    }

    xhr.send()
}
