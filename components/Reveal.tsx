import React from "react";

import { useInView } from "react-intersection-observer";
import { AnimatePresence, MotionProps, motion } from "framer-motion";

interface RevealProps {
    threshold?: number;
    className?: string;
    motionProps?: MotionProps;
}

const Reveal: React.FC<RevealProps> = ({
    threshold = 0,
    className,
    motionProps,
    children,
}) => {
    const { ref, inView } = useInView({
        threshold,
    });

    return (
        <div ref={ref} className={className}>
            <AnimatePresence>
                <motion.div
                    {...motionProps}
                    animate={inView ? motionProps?.animate : undefined}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Reveal;
