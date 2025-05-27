// fastify.d.ts
import 'fastify';

declare module 'fastify' {
    interface FastifyInstance {
        config: {
            PORT: number;
            MONGO_URI: string;
            JWT_SECRET: string;
            JWT_REFRESH_SECRET: string;
        };
    }
}
