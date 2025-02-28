import "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            username: string;
            email: string;
            language: string;
            token: string;
        };
    }
    
    interface User {
        id: string;
        username: string;
        email: string;
        language: string;
        token: string;
    }
}