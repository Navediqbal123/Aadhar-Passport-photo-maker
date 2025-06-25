module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Authoritative trust, professional confidence
        primary: {
          DEFAULT: "#1a365d", // blue-900
          50: "#ebf8ff", // blue-50
          100: "#bee3f8", // blue-100
          200: "#90cdf4", // blue-200
          300: "#63b3ed", // blue-300
          400: "#4299e1", // blue-400
          500: "#3182ce", // blue-500
          600: "#2b77cb", // blue-600
          700: "#2c5aa0", // blue-700
          800: "#2a4365", // blue-800
          900: "#1a365d", // blue-900
        },
        // Secondary Colors - Innovation energy, progress indication
        secondary: {
          DEFAULT: "#38b2ac", // teal-500
          50: "#e6fffa", // teal-50
          100: "#b2f5ea", // teal-100
          200: "#81e6d9", // teal-200
          300: "#4fd1c7", // teal-300
          400: "#38b2ac", // teal-400
          500: "#319795", // teal-500
          600: "#2c7a7b", // teal-600
          700: "#285e61", // teal-700
          800: "#234e52", // teal-800
          900: "#1d4044", // teal-900
        },
        // Accent Colors - Success celebration, completion moments
        accent: {
          DEFAULT: "#ed8936", // orange-400
          50: "#fffaf0", // orange-50
          100: "#feebc8", // orange-100
          200: "#fbd38d", // orange-200
          300: "#f6ad55", // orange-300
          400: "#ed8936", // orange-400
          500: "#dd6b20", // orange-500
          600: "#c05621", // orange-600
          700: "#9c4221", // orange-700
          800: "#7b341e", // orange-800
          900: "#652b19", // orange-900
        },
        // Background Colors
        background: "#f7fafc", // gray-50 - Clean workspace, content focus
        surface: "#edf2f7", // gray-100 - Subtle organization, interface depth
        // Text Colors
        text: {
          primary: "#2d3748", // gray-700 - Clear readability, serious content
          secondary: "#718096", // gray-500 - Information hierarchy, supporting details
        },
        // Status Colors
        success: {
          DEFAULT: "#38a169", // green-500 - Positive confirmation, quality assurance
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#38a169", // green-500
          600: "#2f855a", // green-600
        },
        warning: {
          DEFAULT: "#d69e2e", // yellow-500 - Helpful guidance, attention without alarm
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          500: "#d69e2e", // yellow-500
          600: "#b7791f", // yellow-600
        },
        error: {
          DEFAULT: "#e53e3e", // red-500 - Clear problems, constructive solutions
          50: "#fed7d7", // red-50
          100: "#feb2b2", // red-100
          500: "#e53e3e", // red-500
          600: "#c53030", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // gray-200
          focus: "#1a365d", // primary color for focus states
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'primary': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'processing': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}