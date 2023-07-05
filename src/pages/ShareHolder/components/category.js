import { Link } from 'react-router-dom';
import { Typography, Divider } from 'antd';
import classNames from 'classnames/bind';
import styles from '../shareholder.module.scss';

const Menu_Items = [
    {
        label: 'Báo cáo tài chính riêng giữa niên độ năm 2022',
        date: '11/10/2022',
        time: '14:52:59'
    },
    {
        label: 'Báo cáo thường niên năm 2021',
        date: '11/10/2022',
        time: '14:52:59'
    },
    {
        label: 'Báo cáo tình hình quản trị Công ty (6 tháng đầu năm 2022)',
        date: '11/10/2022',
        time: '14:52:59'
    }
];
const { Title } = Typography;

const cx = classNames.bind(styles);
function Category() {
    return (
        <div className={`${cx('card')}`}>
            <div className={`${cx('title')}`}>
                <Title level={3}>Danh mục bài viết</Title>
                <Divider />
            </div>

            <div className={`${cx('card-content')}`}>
                <h3>Nhiều người quan tâm</h3>
                {Menu_Items.map((item, index) => (
                    <div key={index}>
                        <Link>{item.label}</Link>
                        <p>Date: {item.date}</p>
                        <p>Time: {item.time}</p>
                        <Divider />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
