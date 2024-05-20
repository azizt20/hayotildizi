import type { NitroFetchRequest } from 'nitropack'

export function api<T>(
    request: NitroFetchRequest,
    opts?: any
) {
    const config = useRuntimeConfig()
    const { $i18n } = useNuxtApp();
    opts = opts || {}
    opts.headers = {
        ...opts.headers,
        'Accept-Language': $i18n.locale.value,
    }
    return useFetch<T>(request, {
        baseURL: config.public.baseURL,
        ...opts,
    })
}