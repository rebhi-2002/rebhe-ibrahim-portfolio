import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Author } from "../../data/blogData";

interface AuthorBioProps {
  author: Author;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ author }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 p-8 bg-gray-800/50 rounded-2xl border border-gray-700 flex flex-col sm:flex-row items-center gap-8"
    >
      <img
        src={author.avatar}
        alt={author.name}
        className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-2 border-blue-500"
        style={{ objectFit: "scale-down" }}
      />
      <div className="text-center sm:text-left">
        <p className="text-sm text-blue-400 font-semibold mb-1">WRITTEN BY</p>
        <h3 className="text-2xl font-bold mb-2">{author.name}</h3>
        <p className="text-gray-400 mb-4">{author.bio}</p>
        <div className="flex justify-center sm:justify-start space-x-4">
          <a
            href={author.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href={author.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={author.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthorBio;