/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'd2kq0urxkarztv.cloudfront.net',
              port: '',
              pathname: '**',
            },
          ],
    }
}

// module.exports = nextConfig
