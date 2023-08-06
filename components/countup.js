import { useState, useEffect } from "react";

/**
 * 
 * @param {{
 * initial: number, end: number, skip: number
 * }} param0 
 * @returns 
 */
const CountUp = ({ initial, end, skip }) => {

  const [ text, setText ] = useState(initial);

  useEffect(() => {
    let id = setInterval(() => {
      setText(p => p !== end ? p + skip: end);
    }, 100);
    return () => clearInterval(id);
  }, [text === end]);

  return (
    <span>
      {text}
    </span>
  )
}

export default CountUp;