import React, { useContext } from "react";
import Image from "next/image";
import styles from "../styles/about_us.module.scss";
import Button from "../components/shared/button";
import Navbar from "../components/shared/navbar";
import { themeContext } from "../context/themeProvider";

const AboutUs = () => {
  const { state } = useContext(themeContext);
  console.log(state);
  return (
    <div
      className={
        state.theme === "light"
          ? styles.page_container
          : styles.page_container_dark
      }
    >
      <Navbar />
      <div className={styles.container}>
        <div className={styles.image_container}>
          <Image
            src="https://picsum.photos/200/300?grayscale"
            alt="plant"
            layout="fixed"
            height={350}
            width={800}
            style={{ borderRadius: 12 }}
          />
        </div>
        <p className={styles.text}>
          شهر آرکوزلو یک حومه مسکونی ممتاز پورتو است که از بسیاری جهات دارای
          زمین گلف 9 سوراخ معروف ، ویلاهای مجلل و عمارت است. خود میرامار به
          عنوان مقصدی برای تعطیلات عمومی در نظر گرفته می شود که پرتغالی ها از
          مناطق همسایه آن را دوست دارند. با این حال ، این ساحل هنوز به عنوان یک
          مقصد گردشگری بین المللی چندان مشهور نشده است ، که به بازدیدکنندگانش
          مکانی برای لذت بردن می دهد.
        </p>
        <Button>درباره ی ما</Button>
      </div>
    </div>
  );
};

export default AboutUs;
