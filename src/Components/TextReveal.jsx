import { motion } from "framer-motion";

const TextReveal = ({ text }) => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="text-reveal-div"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={variants}
          style={{ display: "inline-block", whiteSpace: 'pre' }}
          transition={{ delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
