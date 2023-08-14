import clientPromise from '../../../../lib/adapters/mongo-client'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'database',
    },
    adapter: MongoDBAdapter(clientPromise, {
        databaseName: 'next-auth',
    }),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),   
    ],
    callbacks: {
        jwt: async ({token, user, account, profile, isNewUser}) => {
            console.log('jwt')
            return token;
        },
        session: async ({session, user, token}) => {
            session.user.id = user.id
            return session
        },
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}