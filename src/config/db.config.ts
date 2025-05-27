import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";
import mongoose from "mongoose";

const connect_db = async (fastify: FastifyInstance, options: Object) => {
    const MONGO_URI = fastify.config.MONGO_URI;

    if (!MONGO_URI) {
        fastify.log.error('MONGO_URI is not defined');
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(MONGO_URI, {
            dbName: "npl_auth",
        });

        fastify.log.info("Connected to MongoDB");
        fastify.decorate('mongoose', mongoose);
    }
    catch (err) {
        fastify.log.error("MongoDB connection failed", err);
        process.exit(1);
    }

    fastify.addHook('onClose', async () => {
        await mongoose.connection.close();
        fastify.log.info("MongoDB connection closed");
    });

}

export default fp(connect_db);
