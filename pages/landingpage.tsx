import React from "react";
import Image from "next/image";
import styles from "../styles/landingpage.module.scss";
import Button from "../components/shared/button";
import Navbar from "../components/shared/my_navbar";

interface Props{
data?:any;
}

const Landingpage:React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content_container}>
          <div className={styles.image_container}>
            <Image
              src="https://picsum.photos/200/300"
              alt="plant"
              layout="fixed"
              height={250}
              width={300}
              style={{borderRadius:12}}
            />
          </div>
          <div className={styles.text_container}>
            <h1>درباره ی ما</h1>
            <p className={styles.text}>
              نکته مهمی که در بیشتر سایتهای ایرانی توجهی به آن نمیشود طراحی صفحه
              درباره ما یا همان About Us است. اکثر افراد در این بخش مطالبی
              طولانی و خسته کننده برای کاربر و یا نوشته ای کوتاه و ناقص قرار
              میدهند که میتواند اعتبار سایت یا شرکت شما را زیر سوال ببرد.
            </p>
          </div>
        </div>
        <Button>صفحه ی اصلی</Button>
      </div>
    </>
  );
};

export default Landingpage;
