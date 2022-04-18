import { FaGithub, FaYoutube, FaTwitter, FaSpotify } from "react-icons/fa";
export function Socials({}) {
  return <div className="flex pb-6 justify-center">
        <a href="https://github.com/rosnerdev" target={"_blank"} rel="noreferrer" className="mx-4 hover:text-gray-600 transition ease-in-out" aria-label="Github">
          <FaGithub style={{
        fontSize: 20
      }} />
        </a>
        <a href="https://youtube.com/c/Slink1" target={"_blank"} rel="noreferrer" className="mx-4 hover:text-red-500 transition ease-in-out" aria-label="Youtube">
          <FaYoutube style={{
        fontSize: 20
      }} />
        </a>
        <a href="https://twitter.com/rosneryahav" target={"_blank"} rel="noreferrer" className="mx-4 hover:text-cyan-400 transition ease-in-out" aria-label="Twitter">
          <FaTwitter style={{
        fontSize: 20
      }} />
        </a>
        <a href="https://open.spotify.com/user/r8vilnic420jepcn5f5snt0l7?si=91326ab074194f1d" target={"_blank"} rel="noreferrer" className="mx-4 hover:text-green-600 transition ease-in-out" aria-label="Spotify">
          <FaSpotify style={{
        fontSize: 20
      }} />
        </a>
      </div>;
}
  