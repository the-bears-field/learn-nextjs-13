import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="/">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By shincode, published on 2023/07/05</p>
          <Link href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo
            eos commodi aut repudiandae autem accusamus a voluptas natus
            possimus tenetur tempore, et, illum exercitationem suscipit libero
            esse quasi illo?
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
