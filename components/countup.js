// import { useState, useEffect } from "react";

// /**
//  * 
//  * @param {{
//  * initial: number, end: number, skip: number, inView: boolean
//  * }} param0 
//  * @returns 
//  */
// const CountUp = ({ initial, end, skip, inView }) => {

//   const [ text, setText ] = useState(initial);

//   useEffect(() => {
//     let id = setInterval(() => {
//       setText(p => inView ? (p !== end ? p + skip: end) : p);
//     }, 100);
//     return () => clearInterval(id);
//   }, [text === end, inView]);

//   return (
//     <span>
//       {text}
//     </span>
//   )
// }

// export default CountUp;

import { useState, useEffect, forwardRef } from "react";

const CountUp = forwardRef(({ initial, end, skip, inView }, ref) => {
  const [text, setText] = useState(initial);

  useEffect(() => {
    let id = setInterval(() => {
      setText(prevText => {
        if (inView) {
          return prevText !== end ? prevText + skip : end;
        } else {
          return prevText;
        }
      });
    }, 100);

    return () => clearInterval(id);
  }, [end, skip, inView]);

  // Forward the ref to the span element
  return <span ref={ref}>{text}</span>;
});

export default CountUp;
