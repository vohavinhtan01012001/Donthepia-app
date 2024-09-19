'use client'
import { motion } from 'framer-motion';
import { IconSet } from './IconSet';

const ButtonNetworkList = () => {
    return <div>
        <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
        >
            <button>
                <IconSet
                    name='x'
                    height={47}
                    width={47}
                />
            </button>
        </motion.div>
        <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
        >
            <button>
                <IconSet
                    name='facebook'
                    height={47}
                    width={47}
                />
            </button>
        </motion.div>
        <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
        >
            <button>
                <IconSet
                    name='instagram'
                    height={47}
                    width={47}
                />
            </button>
        </motion.div>
        <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
        >
            <button>
                <IconSet
                    name='youtube'
                    height={47}
                    width={47}
                />
            </button>
        </motion.div>
    </div>
}

export default ButtonNetworkList;