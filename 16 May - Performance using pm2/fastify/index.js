import Fastify from 'fastify';
const  fastify = Fastify();

fastify.get('/',async function handler(request, reply) {
    return {message: "Welcome to Fastify "}
});

// Run the server

try{
    await fastify.listen({port:4200})
} catch(err) {
    fastify.log.error(err)
    process.exit(1)
}