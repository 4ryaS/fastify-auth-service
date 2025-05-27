import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

const PORT: number = 8000;

server.register(cors, {
    origin: "*",
    credentials: false,
});


const start_server = async () => {
    server.listen({ port: PORT }, (err, address) => {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
};

start_server();
