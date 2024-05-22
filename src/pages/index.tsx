import MainLayout from '@/components/common/Layout/Main';
import styles from './Home.module.scss';
import Dropdown from '@/components/common/Dropdown';

export default function HomePage() {
  {
    /* Dropdown 사용 예시 */
  }
  const options = [
    { value: 'option1', label: 'option1' },
    { value: 'option2', label: 'option2' },
    { value: 'option3', label: 'option3' },
  ];
  return (
    <>
      <h1 className={styles.home}>HomePage</h1>
      <Dropdown options={options} placeholder="상품 옵션을 선택해 주세요" />
    </>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
