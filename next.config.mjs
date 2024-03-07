/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["three"],
    webpack(config, { isServer }) {
        if (!isServer) {
            config.externals.push('sharp')
        }

        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ['raw-loader', 'glslify-loader']
        })

        return config;
    }
};

export default nextConfig;
