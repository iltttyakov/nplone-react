const DEFAULT_TITLE = 'N+1'
const DEFAULT_KEYWORDS = ''
const DEFAULT_DESCRIPTION = ''

export default function seo(data = {}) {
    let title = DEFAULT_TITLE
    let keywords = DEFAULT_KEYWORDS
    let description = DEFAULT_DESCRIPTION
    let hrefLangEn = ''
    let hrefLangDe = ''

    if (data.title) title = DEFAULT_TITLE + ' | ' + data.title
    if (data.description) description = data.description
    if (data.keywords) keywords = data.keywords

    if (data.hrefLangEn) hrefLangEn = data.hrefLangEn
    if (data.hrefLangDe) hrefLangDe = data.hrefLangDe

    document.title = title

    document.querySelector('meta[name="description"]')
        .setAttribute('content', description)

    document.querySelector('meta[name="keywords"]')
        .setAttribute('content', keywords)

    document.querySelector('#linkHrefLangEn').setAttribute('href', hrefLangEn)
    document.querySelector('#linkHrefLangDe').setAttribute('href', hrefLangDe)
}