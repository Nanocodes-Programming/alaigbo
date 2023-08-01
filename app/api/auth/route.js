import User from '@/model/user';
import { connectToDB } from '@/utils/database';
// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';

// export const handler = NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),

//     // ...add more providers here
//   ],
//   callbacks: {
//     async session({ session }) {
//       const sessionUser = await User.findOne({
//         email: session.user.email,
//       });

//       session.user.id = sessionUser._id.toString();

//       return session;
//     },
//     async signIn({ profile }) {
//       try {
//          connectToDB();

//         const userExists = await User.findOne({
//           email: profile.email,
//         });

//         if (!userExists) {
//           await User.create({
//             email: profile.email,
//             username: profile.name.toLowerCase(),
//             image: profile.image,
//           });
//         }
//       } catch (error) {}
//     },
//   },
// });

// export { handler as GET, handler as POST };

export const POST = async (req) => {
  const { username, email, password } = await req.json();

  try {
    await connectToDB();
    const user = await User.create({ username, email, password });

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response('Failed to save', {
      status: 500,
    });
  }
};
