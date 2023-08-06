import { useState, useEffect } from "react";

/**
 * 
 * @param {{
 * initial: number, end: number, skip: number, inView: boolean
 * }} param0 
 * @returns 
 */
const CountUp = ({ initial, end, skip, inView }) => {

  const [ text, setText ] = useState(initial);

  useEffect(() => {
    let id = setInterval(() => {
      setText(p => inView ? (p !== end ? p + skip: end) : p);
    }, 100);
    return () => clearInterval(id);
  }, [text === end, inView]);

  return (
    <span>
      {text}
    </span>
  )
}

export default CountUp;