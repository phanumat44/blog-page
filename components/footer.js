import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";

import Newslatter from "./_child/newslatter";

export default function footer() {
  const bg = {
    background: "url('/images/footer.png') no-repeat",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImYoutube color="#888888" />
              </a>
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Copyright @2022 All rights reserved
          </p>
          
          <p className=" text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

