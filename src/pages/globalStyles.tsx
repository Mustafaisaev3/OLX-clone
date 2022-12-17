import styled, {createGlobalStyle} from 'styled-components'
import Link from 'next/link'
import Colors from '../utils/css_variables/colors'


const GlobalStyle = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  color: black;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
  list-style: none;

}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background-color: ${Colors.main_bg};
}

/* A elements that don't have a class get default styles */
a {
  text-decoration-skip-ink: auto;
  text-decoration: none
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
  border: 0;
  padding: 0;
}



/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 50px 0;
  background-color: ${({bg}: any) => bg };
`

export const Container = styled.div`
    max-width: 1300px;
    height: 100%;
    padding: 0 40px;
    margin: 0 auto;

`

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 24px;
  color: #002f34;
  padding-bottom: 50px;
`

export const LinkComp = styled(Link)`
    
`



export default GlobalStyle