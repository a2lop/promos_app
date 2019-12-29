import wsCall from '../utils/fetcher'

export function wsGetUserInfo(userId) {
    return wsCall('users/' + userId)
}

export function wsPutUserCategory(userId, category) {
    return wsCall(`users/${userId}/categories`, { category }, { method: 'PUT' })
}

export function wsDeleteUserCategory(userId, category) {
    return wsCall(
        `users/${userId}/categories`,
        { category },
        { method: 'DELETE' }
    )
}

export function wsPutUserMembership(userId, membership) {
    return wsCall(
        `users/${userId}/memberships`,
        { membership },
        { method: 'PUT' }
    )
}

export function wsDeleteUserMembership(userId, membership) {
    return wsCall(
        `users/${userId}/memberships`,
        { membership },
        { method: 'DELETE' }
    )
}
