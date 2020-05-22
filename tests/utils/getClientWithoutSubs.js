import ApolloBoost from 'apollo-boost'

const getClientWithoutSubs = (jwt) => {
    return new ApolloBoost({
        uri: 'http://localhost:4000',
        request(operation) {
            if(jwt) {
                operation.setContext({
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
            }
        }
    })
}

export { getClientWithoutSubs as default }