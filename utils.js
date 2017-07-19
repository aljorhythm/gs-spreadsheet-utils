/*
 * @param haystack string to search in
 * @param keywords range of keywords
 * @param delimiter delimits keywords found
 * @returns a string of keywords found joined by delimiter
 */
function containsAnyKeyword(haystack, keywords, delimiter) {
    var ret = []
    var delimeter = delimiter ? delimiter : '\n';
    if (typeof haystack == 'undefined') {
        return ""
    }
    haystack = haystack.toLowerCase()
    keywords.forEach(function(keywordsRow) {
        keywordsRow.forEach(function(keyword) {
            if (keyword == "") {
                return
            }
            keyword = keyword.toLowerCase()
            if (haystack.indexOf(keyword) >= 0) {
                ret.push(keyword)
            }
        })
    })
    return ret.join('\n')
}