import React from 'react';
import images from '../../images/ShareHolder';
import { Image, Typography } from 'antd';
import classNames from 'classnames/bind';
import styles from './shareholder.module.scss';
import Category from './components/category';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const { Text } = Typography;
const Menu_Items = [
    {
        image: images.image,
        label: 'Báo cáo tài chính riêng giữa niên độ năm 2022',
        date: '11/10/2022',
        time: '14:52:59'
    },
    {
        image: images.image2,
        label: 'Báo cáo tài chính hợp nhất giữa niên độ năm 2022',
        date: '11/10/2022',
        time: '14:52:59'
    },
    {
        image: images.image3,
        label: 'Báo cáo tài chính riêng Quý II năm 2022',
        date: '11/10/2022',
        time: '14:52:59'
    },
    {
        image: images.image,
        label: 'Báo cáo tài chính hợp nhất Quý II năm 2022',
        date: '11/10/2022',
        time: '14:52:59'
    },
    {
        image: images.image,
        label: 'Báo cáo tài chính hợp nhất Quý I năm 2022',
        date: '11/10/2022',
        time: '14:52:59'
    },
    {
        image: images.image,
        label: 'Báo cáo tài chính hợp nhất Quý IV năm 2022',
        date: '11/10/2022',
        time: '14:52:59'
    }
];

const BaoCaoQuanTri = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('items')}>
                {Menu_Items.map((item, index) => (
                    <div key={index} className={cx('item')}>
                        <div className={cx('left')}>
                            <Image src={item.image} alt="Menu Item Image" />
                        </div>
                        <div className={cx('right')}>
                            <Link className={`${cx('text')} text-sky-800 text-base font-bold`} to="/">
                                {item.label}
                            </Link>
                            <Text type="secondary">Date: {item.date}</Text>
                            <Text type="secondary">Time: {item.time}</Text>
                        </div>
                    </div>
                ))}
            </div>
            <Category />
        </div>
    );
};

export default BaoCaoQuanTri;
