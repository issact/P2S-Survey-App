import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1170px',
  		'2xl': '1320px'
  	},
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem'
  		}
  	},
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
      backgroundColor: {
        'input': 'rgba(231, 236, 240, 0.04)',
      },
      backdropFilter: {
        'input': 'blur(8.5px)',
      },
      borderColor: {
        'input-border': 'rgba(255, 255, 255, 0.30)',
      },
  		fontFamily: {
  			ubuntu: [
  				'var(--font-ubuntu)',
  				'sans-serif'
  			],
  			poppins: [
  				'var(--font-poppins)',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			'hero-pattern': 'url("/gradient-bar.svg")',
  			gradient1: 'linear-gradient(90deg, #7CB13A 0%, #16AAE2 100%)',
  			gradient2: 'linear-gradient(144deg, rgba(136, 195, 64, 0.12) 5.78%, rgba(22, 170, 226, 0.12) 94.22%)',
				gradient3: 'linear-gradient(144deg, rgba(5, 27, 44, 0.12) 5.78%, rgba(22, 170, 226, 0.12) 94.22%)',
  			'gradient-border': 'linear-gradient(90deg, #7CB13A 0%, #16AAE2 100%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
				'input': '0.5rem',
  		},
  		backdropBlur: {
  			'8.5': '8.5px'
  		},
			boxShadow: {
        'input-focus': '0 0 0 4px rgba(59, 130, 246, 0.5)',
      },
  		keyframes: {
  			'bg-position': {
  				'0%': {
  					backgroundPosition: '0% 50%'
  				},
  				'100%': {
  					backgroundPosition: '100% 50%'
  				}
  			},
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size) 0'
  				}
  			},
  			blob: {
  				'0%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(10px, -10px) scale(1.1)'
  				},
  				'66%': {
  					transform: 'translate(-20px, 20px) scale(0.9)'
  				},
  				'100%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				}
  			},
  			'spin-slow': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'pulse-slow': {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.5'
  				}
  			},
  			morph: {
  				'0%': {
  					borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
  				},
  				'50%': {
  					borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%'
  				},
  				'100%': {
  					borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
  				}
  			},
  			'shimmer-slide': {
  				to: {
  					transform: 'translate(calc(100cqw - 100%), 0)'
  				}
  			},
  			'spin-around': {
  				'0%': {
  					transform: 'translateZ(0) rotate(0)'
  				},
  				'15%, 35%': {
  					transform: 'translateZ(0) rotate(90deg)'
  				},
  				'65%, 85%': {
  					transform: 'translateZ(0) rotate(270deg)'
  				},
  				'100%': {
  					transform: 'translateZ(0) rotate(360deg)'
  				}
  			},
				"border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
				'focus-ring-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 0 1px rgba(59, 130, 246, 0)',
            borderColor: 'rgba(96, 165, 250, 0)'
          },
          '50%': { 
            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
            borderColor: 'rgba(96, 165, 250, 0.1)'
          },
        }
  		},
  		animation: {
  			gradient: 'gradient 8s linear infinite',
  			blob: 'blob 7s infinite',
  			'spin-slow': 'spin-slow 20s linear infinite',
  			float: 'float 6s ease-in-out infinite',
  			'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
  			morph: 'morph 8s ease-in-out infinite',
  			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
  			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
				'focus-pulse': 'focus-ring-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  		}
  	}
  },
  plugins: [animate],
} satisfies Config;
