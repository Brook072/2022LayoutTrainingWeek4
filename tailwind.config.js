module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT: '0.75rem',
        'md': '2.25rem',
        'lg': '0rem'
      },
    },
    screens:{
      'md': '768px',
      'lg': '1296px',
    },
    extend: {
      backgroundImage:{
        'banner-sm':"url(/assets/images/home-header-sm.png)",
        'co-brand-frame-sm': "url(/assets/images/index-bg-md.png)",
        'co-brand-frame-md': "url(/assets/images/index-bg-sm.png)",
        'co-brand-frame-lg': "url(/assets/images/index-bg.png)",
        'co-brand-AA-plus-sm': "url(/assets/images/home-section4-1-sm.png)",
        'co-brand-AA-plus-md': "url(/assets/images/home-section4-1.png)",
        'co-brand-youth-sm': "url(/assets/images/home-section4-2-sm.png)",
        'co-brand-youth-md': "url(/assets/images/home-section4-2.png)",
        'optical-1-sm': "url(/assets/images/product-header-sm-1.png)",
        'optical-1': "url(/assets/images/product-header-1.png)",
        'optical-2-sm': "url(/assets/images/product-header-sm-2.png)",
        'optical-2': "url(/assets/images/product-header-2.png)",
        'optical-3-sm': "url(/assets/images/product-header-sm-3.png)",
        'optical-3': "url(/assets/images/product-header-3.png)",
        'optical-4-sm': "url(/assets/images/product-header-sm-4.png)",
        'optical-4': "url(/assets/images/product-header-4.png)",
      },
      borderWidth:{
        '1':'1px'
      },
      boxShadow:{
        '2':'0px 2px 6px #00000029;',
      },
      colors:{
        'primary':'#aa0601',
        'secondary': '#fbf2f2',
        'blood-red': '#650300',
        'matterhorn': '#555555',
        'gainsboro':'#DCDCDC',
        'dark-silver':'#707070',
        'ruddy-brown':'#B75929',
        'van-dyke-brown':'#5F3E2D',
        'anti-flash-white': '#F2F2F2',
        'spartan-crimson':'#9F1213',
        'branch-border-grey':'#00000020',
      },
      fontSize:{
        'sm': '0.875rem',
        'base': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '40':'40px',
        '64px':'64px',
      },
      height:{
        '34':'8.5rem',
        '54':'13.5rem',
        '74':'18.5rem',
        '100': '25rem',
        '104': '26rem',
        '130':'32.5rem',
      },
      lineHeight:{
        '34':'8.5rem',
      },
      margin:{
        '11px':'11px',
      },
      width:{
        '25':'6.25rem',
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}